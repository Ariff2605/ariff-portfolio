import * as THREE from 'three';

// Each builder returns { p, c }: N positions and N colours (Float32Array, xyz / rgb).
// Order here = order of <section data-shape> on the page.

const V = THREE.Vector3;
const Col = THREE.Color;

export const SIDES = [1, -1, 1, -1, 0]; // where the shape sits: 1 right, -1 left, 0 centre
export const GLOWS = ['#5b2bd1', '#a3268a', '#1d4fb8', '#3b3fb8', '#2b5fd1'];

function sampleGeo(geo, n, cb) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const p = g.attributes.position.array;
  const T = p.length / 9;
  const cum = new Float32Array(T);
  const a = new V(), b = new V(), c = new V(), e1 = new V(), e2 = new V();
  let tot = 0;
  for (let i = 0; i < T; i++) {
    a.fromArray(p, i * 9); b.fromArray(p, i * 9 + 3); c.fromArray(p, i * 9 + 6);
    tot += e1.subVectors(b, a).cross(e2.subVectors(c, a)).length() / 2;
    cum[i] = tot;
  }
  for (let k = 0; k < n; k++) {
    const r = Math.random() * tot;
    let lo = 0, hi = T - 1;
    while (lo < hi) { const m = (lo + hi) >> 1; if (cum[m] < r) lo = m + 1; else hi = m; }
    a.fromArray(p, lo * 9); b.fromArray(p, lo * 9 + 3); c.fromArray(p, lo * 9 + 6);
    let u = Math.random(), v = Math.random();
    if (u + v > 1) { u = 1 - u; v = 1 - v; }
    cb(new V().copy(a).addScaledVector(e1.subVectors(b, a), u).addScaledVector(e2.subVectors(c, a), v));
  }
  geo.dispose();
}

function rdir() {
  const u = Math.random() * 2 - 1, t = Math.random() * Math.PI * 2, r = Math.sqrt(1 - u * u);
  return new V(r * Math.cos(t), u, r * Math.sin(t));
}

function collector() {
  const P = [], C = [];
  return { add(v, c) { P.push(v.x, v.y, v.z); C.push(c.r, c.g, c.b); }, P, C };
}

function finish(b, N) {
  const cnt = b.P.length / 3;
  const idx = [];
  for (let i = 0; i < N; i++) idx.push(i < cnt ? i : Math.floor(Math.random() * cnt));
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  const p = new Float32Array(N * 3), c = new Float32Array(N * 3);
  idx.forEach((s, i) => { for (let k = 0; k < 3; k++) { p[i * 3 + k] = b.P[s * 3 + k]; c[i * 3 + k] = b.C[s * 3 + k]; } });
  return { p, c };
}

const grad = (c1, c2, t) => new Col(c1).lerp(new Col(c2), Math.min(1, Math.max(0, t)));

function knot(N) {
  const b = collector();
  sampleGeo(new THREE.TorusKnotGeometry(1.15, 0.36, 260, 36), N, (v) => b.add(v, grad('#9D6BFF', '#3FD8F0', (v.x + 1.7) / 3.4)));
  return finish(b, N);
}

function brain(N) {
  const b = collector();
  const cortex = Math.floor(N * 0.78), cereb = Math.floor(N * 0.1), stem = Math.floor(N * 0.04), inner = N - cortex - cereb - stem;
  for (let i = 0; i < cortex; i++) {
    const d = rdir();
    let x = d.x * 1.5, y = d.y * 1.05, z = d.z * 1.12;
    if (y < -0.5) y = -0.5 + (y + 0.5) * 0.35;
    const f = 1 + 0.075 * Math.sin(9 * d.x + 2.2 * d.y) * Math.sin(8 * d.y + 1.3) + 0.05 * Math.sin(11 * d.z + 5 * d.x);
    x *= f; y *= f; z *= f; z += z > 0 ? 0.09 : -0.09;
    b.add(new V(x + 0.12, y + 0.2, z), grad('#FF6FD8', '#8B7BFF', (x + 1.5) / 3));
  }
  for (let i = 0; i < cereb; i++) {
    const d = rdir(), f = 1 + 0.07 * Math.sin(28 * d.y);
    b.add(new V(-1.02 + d.x * 0.5 * f, -0.62 + d.y * 0.3 * f, d.z * 0.74 * f), grad('#C084FC', '#FF6FD8', Math.random()));
  }
  for (let i = 0; i < stem; i++) {
    const t = Math.random(), a = Math.random() * Math.PI * 2;
    b.add(new V(-0.45 + t * 0.2 + Math.cos(a) * 0.15, -0.55 - t * 0.9, Math.sin(a) * 0.15), new Col('#B794F4'));
  }
  for (let i = 0; i < inner; i++) {
    const d = rdir().multiplyScalar(Math.cbrt(Math.random()) * 0.8);
    b.add(new V(d.x * 1.4 + 0.12, d.y * 0.9 + 0.2, d.z), new Col('#FFE3FA'));
  }
  return finish(b, N);
}

function car(N) {
  const b = collector();
  const sh = new THREE.Shape();
  sh.moveTo(2.15, -0.25); sh.lineTo(2.22, 0.05); sh.quadraticCurveTo(2.2, 0.24, 1.9, 0.28); sh.lineTo(1.0, 0.4);
  sh.quadraticCurveTo(0.6, 0.46, 0.45, 0.52); sh.quadraticCurveTo(0.1, 0.86, -0.2, 0.88); sh.lineTo(-0.8, 0.88);
  sh.quadraticCurveTo(-1.2, 0.8, -1.6, 0.5); sh.lineTo(-2.05, 0.42); sh.quadraticCurveTo(-2.25, 0.3, -2.2, 0);
  sh.lineTo(-2.15, -0.25); sh.lineTo(-1.8, -0.25); sh.absarc(-1.35, -0.25, 0.45, Math.PI, 0, true);
  sh.lineTo(0.9, -0.25); sh.absarc(1.35, -0.25, 0.45, Math.PI, 0, true); sh.lineTo(2.15, -0.25);
  const M = new THREE.Matrix4().makeRotationX(0.16)
    .multiply(new THREE.Matrix4().makeRotationY(-0.6))
    .multiply(new THREE.Matrix4().makeScale(0.8, 0.8, 0.8));
  const body = new THREE.ExtrudeGeometry(sh, { depth: 1.6, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.08, bevelSegments: 3, curveSegments: 28 });
  body.translate(0, 0, -0.8);
  sampleGeo(body, Math.floor(N * 0.66), (v) => { const c = grad('#22D3EE', '#6366F1', (v.x + 2.2) / 4.4); b.add(v.applyMatrix4(M), c); });
  [[-1.35, 0.82], [1.35, 0.82], [-1.35, -0.82], [1.35, -0.82]].forEach(([x, z]) => {
    const w = new THREE.TorusGeometry(0.33, 0.11, 12, 48); w.translate(x, -0.27, z);
    sampleGeo(w, Math.floor(N * 0.06), (v) => b.add(v.applyMatrix4(M), new Col('#E0E7FF')));
    const d = new THREE.CircleGeometry(0.22, 24); d.translate(x, -0.27, z + (z > 0 ? 0.02 : -0.02));
    sampleGeo(d, Math.floor(N * 0.012), (v) => b.add(v.applyMatrix4(M), new Col('#A5B4FC')));
  });
  const rest = N - b.P.length / 3;
  for (let i = 0; i < rest; i++) {
    const a = Math.random() * Math.PI * 2, r = 0.9 + Math.random() * 0.12;
    b.add(new V(Math.cos(a) * 2.6 * r, -0.72, Math.sin(a) * 1.3 * r).applyMatrix4(M), new Col('#155E75'));
  }
  return finish(b, N);
}

function stack(N) {
  const b = collector();
  const M = new THREE.Matrix4().makeRotationX(0.5).multiply(new THREE.Matrix4().makeRotationY(Math.PI / 4));
  [[0.95, '#3FD8F0'], [0, '#9D6BFF'], [-0.95, '#3BE38B']].forEach(([y, c]) => {
    const g = new THREE.BoxGeometry(2.3, 0.08, 2.3); g.translate(0, y, 0);
    sampleGeo(g, Math.floor(N * 0.22), (v) => b.add(v.applyMatrix4(M), new Col(c)));
  });
  [[-0.45, 1.12, -0.35, 0.8, 0.26, 0.55], [0.5, 1.12, 0.35, 0.6, 0.26, 0.8]].forEach(([x, y, z, w, h, d]) => {
    const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z);
    sampleGeo(g, Math.floor(N * 0.04), (v) => b.add(v.applyMatrix4(M), new Col('#A5F3FC')));
  });
  [[-0.6, 0.18, 0.4], [0, 0.18, -0.5], [0.6, 0.18, 0.3]].forEach(([x, y, z]) => {
    const g = new THREE.BoxGeometry(0.38, 0.3, 0.38); g.translate(x, y, z);
    sampleGeo(g, Math.floor(N * 0.02), (v) => b.add(v.applyMatrix4(M), new Col('#D8B4FE')));
  });
  const cy = new THREE.CylinderGeometry(0.45, 0.45, 0.5, 36); cy.translate(0, -0.66, 0);
  sampleGeo(cy, Math.floor(N * 0.06), (v) => b.add(v.applyMatrix4(M), new Col('#86EFAC')));
  const rest = N - b.P.length / 3;
  for (let i = 0; i < rest; i++) {
    const k = i % 4, x = k < 2 ? -1.15 : 1.15, z = k % 2 ? -1.15 : 1.15;
    b.add(new V(x, -0.95 + Math.random() * 1.9, z).applyMatrix4(M), new Col('#6B7280'));
  }
  return finish(b, N);
}

function globe(N) {
  const b = collector(), R = 1.65, D = Math.PI / 180;
  const P = (lat, lon) => new V(Math.cos(lat) * Math.cos(lon) * R, Math.sin(lat) * R, Math.cos(lat) * Math.sin(lon) * R);
  for (let i = 0; i < N * 0.52; i++) {
    const v = Math.random() < 0.5
      ? P((Math.floor(Math.random() * 7) - 3) * 20 * D, Math.random() * Math.PI * 2)
      : P((Math.random() * 180 - 90) * D, Math.floor(Math.random() * 12) * 30 * D);
    b.add(v, grad('#60A5FA', '#C4B5FD', (v.y + R) / (2 * R)));
  }
  for (let i = 0; i < N * 0.25; i++) {
    const v = rdir().multiplyScalar(R);
    b.add(v, grad('#1E3A8A', '#6D28D9', (v.y + R) / (2 * R)));
  }
  const xa = new V(1, 0, 0), za = new V(0, 0, 1);
  for (let i = 0; i < N * 0.18; i++) {
    const a = Math.random() * Math.PI * 2, r = 2.4 + Math.random() * 0.14;
    b.add(new V(Math.cos(a) * r, (Math.random() - 0.5) * 0.03, Math.sin(a) * r).applyAxisAngle(xa, 0.35).applyAxisAngle(za, 0.3), new Col('#3FD8F0'));
  }
  const malaysia = P(3.1 * D, -101.7 * D);
  const rest = N - b.P.length / 3;
  for (let i = 0; i < rest; i++) b.add(malaysia.clone().add(rdir().multiplyScalar(Math.random() * 0.09)), new Col('#FF6FD8'));
  return finish(b, N);
}


function roundedRect(w, h, r) {
  const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

// 1. AI robot: rounded head with visor, glowing eyes, antenna, ears, neck and shoulders
function robot(N) {
  const b = collector();
  const add = (v, c) => { v.y -= 0.3; b.add(v, c); };
  const part = (geo, share, color) => sampleGeo(geo, Math.floor(N * share), (v) => add(v, typeof color === 'function' ? color(v) : new Col(color)));
  const HY = 0.55; // head centre height

  const head = new THREE.ExtrudeGeometry(roundedRect(2.0, 1.55, 0.42), { depth: 1.3, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.1, bevelSegments: 4, curveSegments: 16 });
  head.translate(0, HY, -0.65);
  part(head, 0.33, (v) => grad('#9D6BFF', '#3FD8F0', (v.x + 1.1) / 2.2));

  const visor = new THREE.ShapeGeometry(roundedRect(1.55, 0.95, 0.3), 12); visor.translate(0, HY + 0.02, 0.79);
  part(visor, 0.08, '#312E81');
  [-0.38, 0.38].forEach((x) => {
    const eye = new THREE.CircleGeometry(0.17, 32); eye.translate(x, HY + 0.1, 0.8);
    part(eye, 0.05, '#A5F3FC');
  });
  const mouth = new THREE.PlaneGeometry(0.5, 0.06); mouth.translate(0, HY - 0.25, 0.8);
  part(mouth, 0.015, '#3FD8F0');

  const stem = new THREE.CylinderGeometry(0.035, 0.035, 0.45, 12); stem.translate(0, 1.655, 0);
  part(stem, 0.015, '#C4B5FD');
  const tip = new THREE.SphereGeometry(0.11, 20, 20); tip.translate(0, 1.95, 0);
  part(tip, 0.03, '#FF6FD8');

  [-1.18, 1.18].forEach((x) => {
    const ear = new THREE.CylinderGeometry(0.2, 0.2, 0.18, 32); ear.rotateZ(Math.PI / 2); ear.translate(x, HY, 0);
    part(ear, 0.03, '#8B7BFF');
  });

  const neck = new THREE.CylinderGeometry(0.32, 0.36, 0.3, 32); neck.translate(0, -0.46, 0);
  part(neck, 0.05, '#8B7BFF');
  const torso = new THREE.SphereGeometry(1.45, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2);
  torso.scale(1, 0.55, 0.8); torso.translate(0, -1.35, 0);
  part(torso, 0.2, (v) => grad('#8B7BFF', '#22D3EE', (v.x + 1.45) / 2.9));
  const chest = new THREE.CircleGeometry(0.16, 24); chest.translate(0, -0.95, 1.03);
  part(chest, 0.03, '#FF6FD8');

  const rest = N - b.P.length / 3;
  for (let i = 0; i < rest; i++) {
    const a = Math.random() * Math.PI * 2, r = 0.9 + Math.random() * 0.12;
    add(new V(Math.cos(a) * 1.9 * r, -1.38, Math.sin(a) * 1.1 * r), new Col('#155E75'));
  }
  return finish(b, N);
}

// 3. A person with a briefcase walking along a path into an office building
function office(N) {
  const b = collector();
  const M = new THREE.Matrix4().makeRotationX(0.12).multiply(new THREE.Matrix4().makeRotationY(0.6));
  const add = (v, c) => { v.y -= 0.2; b.add(v.applyMatrix4(M), c); };
  const part = (geo, share, color) => sampleGeo(geo, Math.floor(N * share), (v) => add(v, typeof color === 'function' ? color(v) : new Col(color)));
  const rect = (n, fn, color) => { for (let i = 0; i < n; i++) add(fn(Math.random(), Math.random()), new Col(color)); };
  const G = -1.4; // ground height

  // Building
  const X0 = 0.3, X1 = 1.7, Y1 = 1.8, Z0 = -0.4, Z1 = 0.8;
  const bld = new THREE.BoxGeometry(X1 - X0, Y1 - G, Z1 - Z0); bld.translate((X0 + X1) / 2, (G + Y1) / 2, (Z0 + Z1) / 2);
  part(bld, 0.2, (v) => grad('#312E81', '#22D3EE', (v.y - G) / (Y1 - G)));

  // Windows: front face and the side facing the person
  const wins = [];
  for (let r = 0; r < 7; r++) for (let c = 0; c < 3; c++) wins.push({ face: 'front', x: X0 + 0.16 + c * 0.42, y: -0.55 + r * 0.33, k: r * 3 + c });
  for (let r = 0; r < 6; r++) for (let c = 0; c < 3; c++) wins.push({ face: 'side', z: Z0 + 0.14 + c * 0.37, y: -0.42 + r * 0.33, k: r * 5 + c });
  const perWin = Math.floor((N * 0.26) / wins.length);
  wins.forEach((w) => {
    const col = w.k % 4 === 0 ? '#A5F3FC' : '#FDE68A';
    if (w.face === 'front') rect(perWin, (u, v) => new V(w.x + u * 0.26, w.y + v * 0.2, Z1 + 0.005), col);
    else rect(perWin, (u, v) => new V(X0 - 0.005, w.y + v * 0.2, w.z + u * 0.24), col);
  });
  rect(Math.floor(N * 0.04), (u, v) => new V(X0 - 0.005, G + v * 0.7, 0.1 + u * 0.4), '#3FD8F0'); // door

  // Person walking toward the door (+x)
  const hx = -1.0, hz = 0.3;
  const limb = (px, py, pz, len, r, ang, share, color) => {
    const g = new THREE.CylinderGeometry(r, r * 0.85, len, 16);
    g.translate(0, -len / 2, 0); g.rotateZ(ang); g.translate(px, py, pz);
    part(g, share, color);
  };
  const head = new THREE.SphereGeometry(0.15, 24, 24); head.translate(hx + 0.03, G + 1.45, hz);
  part(head, 0.045, '#E0E7FF');
  const neck = new THREE.CylinderGeometry(0.05, 0.05, 0.1, 12); neck.translate(hx + 0.02, G + 1.28, hz);
  part(neck, 0.008, '#E0E7FF');
  const torso = new THREE.CylinderGeometry(0.19, 0.15, 0.52, 24); torso.translate(hx, G + 1.0, hz);
  part(torso, 0.09, (v) => grad('#818CF8', '#A5F3FC', (v.y - G - 0.74) / 0.52));
  const hip = G + 0.76;
  limb(hx, hip, hz + 0.07, 0.74, 0.07, 0.38, 0.05, '#818CF8');  // front leg
  limb(hx, hip, hz - 0.07, 0.74, 0.07, -0.38, 0.05, '#6366F1'); // back leg
  const sh = G + 1.22;
  limb(hx, sh, hz - 0.23, 0.6, 0.055, 0.45, 0.035, '#A5F3FC');  // arm swinging forward
  limb(hx, sh, hz + 0.23, 0.6, 0.055, 0.12, 0.035, '#A5F3FC');  // arm holding the briefcase
  const bag = new THREE.BoxGeometry(0.34, 0.25, 0.09);
  bag.translate(hx + 0.6 * Math.sin(0.12), sh - 0.6 * Math.cos(0.12) - 0.13, hz + 0.25);
  part(bag, 0.035, '#FF6FD8');

  // Path to the door and a ground ring
  const path = new THREE.PlaneGeometry(2.2, 0.6); path.rotateX(-Math.PI / 2); path.translate(-0.8, G, hz);
  part(path, 0.06, '#1E3A8A');
  const rest = N - b.P.length / 3;
  for (let i = 0; i < rest; i++) {
    const a = Math.random() * Math.PI * 2, r = 0.9 + Math.random() * 0.12;
    add(new V(0.2 + Math.cos(a) * 2.4 * r, G, 0.2 + Math.sin(a) * 1.4 * r), new Col('#155E75'));
  }
  return finish(b, N);
}

export function buildShapes(N) {
  // To swap a shape back, e.g. use knot(N) instead of robot(N), or car(N) instead of office(N).
  return [robot(N), brain(N), office(N), stack(N), globe(N)];
}