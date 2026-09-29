import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { buildShapes, SIDES, GLOWS } from '../three/shapes.js';

// Keep hex colours exactly as written (the shader outputs them directly).
THREE.ColorManagement.enabled = false;

const vertexShader = /* glsl */ `
  attribute vec3 pA; attribute vec3 pB; attribute vec3 cA; attribute vec3 cB; attribute float rnd;
  uniform float uMix, uTime, uIntro, uSize, uPR;
  varying vec3 vC; varying float vA;
  void main() {
    float d = clamp(uMix * 1.4 - rnd * 0.4, 0.0, 1.0);
    d = d * d * (3.0 - 2.0 * d);
    vec3 dir = normalize(vec3(sin(rnd * 91.7), cos(rnd * 47.3), sin(rnd * 13.1 + 1.0)));
    vec3 p = mix(pA, pB, d) + dir * sin(3.14159 * d) * 0.9;
    p += 0.02 * vec3(sin(uTime * 1.3 + rnd * 40.0), cos(uTime * 1.1 + rnd * 30.0), sin(uTime * 0.9 + rnd * 20.0));
    float it = clamp(uIntro * 1.3 - rnd * 0.3, 0.0, 1.0);
    it = 1.0 - pow(1.0 - it, 3.0);
    p = mix(dir * 7.0, p, it);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPR * (0.55 + rnd * 0.9) / (-mv.z);
    vC = mix(cA, cB, d);
    vA = (0.35 + 0.45 * rnd) * it;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uAlpha;
  varying vec3 vC; varying float vA;
  void main() {
    float r = length(gl_PointCoord - 0.5);
    if (r > 0.5) discard;
    gl_FragColor = vec4(vC, smoothstep(0.5, 0.0, r) * vA * uAlpha);
  }
`;

export default function ParticleMorph({ onActiveChange }) {
  const mountRef = useRef(null);
  const glowRef = useRef(null);
  const cbRef = useRef(onActiveChange);
  cbRef.current = onActiveChange;

  useEffect(() => {
    const mount = mountRef.current;
    const glow = glowRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.innerWidth < 820;
    const N = small ? 4200 : 7500;

    const shapes = buildShapes(N);
    const glows = GLOWS.map((c) => new THREE.Color(c));
    const secs = [...document.querySelectorAll('section[data-shape]')];

    // Scroll progress: 0 at the first section, +1 each time a new section's top
    // travels from 80% to 20% of the viewport height.
    const targetS = () => {
      const vh = window.innerHeight;
      let s = 0;
      for (let i = 1; i < secs.length; i++) {
        const p = (window.scrollY + vh * 0.8 - secs[i].offsetTop) / (vh * 0.6);
        s += Math.min(1, Math.max(0, p));
      }
      return s;
    };

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    const group = new THREE.Group();
    scene.add(group);

    const pA = new Float32Array(N * 3), pB = new Float32Array(N * 3);
    const cA = new Float32Array(N * 3), cB = new Float32Array(N * 3);
    const rnd = new Float32Array(N).map(() => Math.random());
    const atA = new THREE.BufferAttribute(pA, 3), atB = new THREE.BufferAttribute(pB, 3);
    const atCA = new THREE.BufferAttribute(cA, 3), atCB = new THREE.BufferAttribute(cB, 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', atA);
    geo.setAttribute('pA', atA);
    geo.setAttribute('pB', atB);
    geo.setAttribute('cA', atCA);
    geo.setAttribute('cB', atCB);
    geo.setAttribute('rnd', new THREE.BufferAttribute(rnd, 1));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uMix: { value: 0 },
        uTime: { value: 0 },
        uIntro: { value: reduce ? 1 : 0 },
        uSize: { value: small ? 24 : 30 },
        uPR: { value: renderer.getPixelRatio() },
        uAlpha: { value: small ? 0.6 : 1 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    group.add(points);

    let pair = -1;
    const setPair = (i) => {
      pA.set(shapes[i].p); pB.set(shapes[i + 1].p);
      cA.set(shapes[i].c); cB.set(shapes[i + 1].c);
      [atA, atB, atCA, atCB].forEach((a) => (a.needsUpdate = true));
      pair = i;
    };

    let halfW = 3, mobile = small;
    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      mobile = w < 820;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.z = mobile ? 8.6 : 7.2;
      camera.updateProjectionMatrix();
      halfW = Math.tan((20 * Math.PI) / 180) * camera.position.z * camera.aspect;
    };
    resize();

    let tx = 0, ty = 0, mx = 0, my = 0;
    const onMove = (e) => { tx = (e.clientX / window.innerWidth) * 2 - 1; ty = (e.clientY / window.innerHeight) * 2 - 1; };
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);

    let sCur = targetS(), lastDot = -1, lastGlow = '', raf = 0;
    const start = performance.now();
    const gc = new THREE.Color();

    const frame = (now) => {
      const t = (now - start) / 1000;
      mat.uniforms.uTime.value = reduce ? 0 : t;
      if (!reduce) mat.uniforms.uIntro.value = Math.min(1, t / 2.2);

      const sT = targetS();
      sCur += (sT - sCur) * (reduce ? 1 : 0.07); // spring-like easing toward scroll
      if (Math.abs(sT - sCur) < 1e-4) sCur = sT;

      const last = shapes.length - 1;
      const i = Math.min(Math.floor(sCur), last - 1);
      const m = Math.min(1, sCur - i);
      if (i !== pair) setPair(i);
      mat.uniforms.uMix.value = m;

      const e = m * m * (3 - 2 * m);
      const off = mobile ? 0 : SIDES[i] + (SIDES[i + 1] - SIDES[i]) * e;
      group.position.x = off * halfW * 0.46;

      mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
      // Gentle side-to-side sway so the robot and the person keep facing you
      const sway = reduce ? 0 : Math.sin(t * 0.3) * 0.5;
      group.rotation.y = sway + mx * 0.4;
      group.rotation.x = my * 0.22;

      gc.copy(glows[i]).lerp(glows[i + 1], e);
      const g = `radial-gradient(55% 60% at ${(50 + off * 22).toFixed(1)}% 48%, #${gc.getHexString()} 0%, transparent 70%)`;
      if (g !== lastGlow) { glow.style.background = g; lastGlow = g; }

      const di = Math.round(sCur);
      if (di !== lastDot) { lastDot = di; cbRef.current?.(di); }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="glow" aria-hidden="true" />
      <div ref={mountRef} className="gl" aria-hidden="true" />
    </>
  );
}