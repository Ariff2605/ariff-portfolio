import Reveal from './Reveal.jsx';
import Icon from './Icons.jsx';
import { profile, about, experience, projects, layers, tagLayer } from '../data/portfolio.js';

// Every <section data-shape> is one step of the 3D morph, in order.

export function Hero() {
  return (
    <section id="intro" data-shape>
      <div className="col">
        <Reveal as="p" i={0} className="kick">{profile.role}</Reveal>
        <Reveal as="h1" i={1}>{profile.name}</Reveal>
        <Reveal as="p" i={2} className="lead">{profile.tagline}</Reveal>
        <Reveal i={3} className="btns">
          <a className="btn p" href="#projects">See my projects</a>
          <a className="btn g" href="#contact">Get in touch</a>
        </Reveal>
        <Reveal i={4} className="status"><span className="dot" />{profile.status}</Reveal>
      </div>
      <div className="hint" aria-hidden="true">Scroll to explore<i /></div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="r" data-shape>
      <div className="col">
        <Reveal as="p" i={0} className="kick">About me</Reveal>
        <Reveal as="h2" i={1}>{about.title}</Reveal>
        {about.paragraphs.map((p, k) => (
          <Reveal as="p" i={2 + k} key={k}>{p}</Reveal>
        ))}
        <div className="facts">
          {about.facts.map((f, k) => (
            <Reveal className="card" i={4 + k} key={f.label}>
              <small>{f.label}</small>
              <b>{f.value}</b>
            </Reveal>
          ))}
        </div>
        <Reveal i={7} className="chips">
          {about.skills.map((s) => <span key={s}>{s}</span>)}
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" data-shape>
      <div className="col">
        <Reveal as="p" i={0} className="kick">Experience</Reveal>
        <Reveal as="h2" i={1}>Precision is a habit, not a phase.</Reveal>
        <Reveal as="p" i={2}>Engines don't forgive shortcuts, and neither do production apps. This is where I built that discipline.</Reveal>
        <div className="tl">
          {experience.map((e, k) => (
            <Reveal className="card" i={3 + k} key={e.title}>
              <time>{e.when}</time>
              <div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="r" data-shape>
      <div className="col">
        <Reveal as="p" i={0} className="kick">Projects</Reveal>
        <Reveal as="h2" i={1}>Work as Full Stack Developer.</Reveal>
        <Reveal as="p" i={2}>This is the project that i have worked on.</Reveal>
        <Reveal i={3} className="legend">
          {Object.values(layers).map((l) => (
            <span key={l.label}><i style={{ background: l.color }} />{l.label}</span>
          ))}
        </Reveal>
        <div className="proj">
          {projects.map((p, k) => (
            // Cards with a live link can't be an <a> themselves (no nested links), so they get a CTA row instead.
            <Reveal as={p.link ? 'div' : 'a'} className="card" href={p.link ? undefined : p.href} i={4 + k} key={p.name}>
              <h3>{p.name} <span>{p.type}</span></h3>
              <p>{p.text}</p>
              <div className="tags">
                {p.tags.map((t) => {
                  const layer = layers[tagLayer[t]];
                  return (
                    <span key={t} className={layer ? 'on' : undefined} style={layer && { '--c': layer.color }}>{t}</span>
                  );
                })}
              </div>
              {p.link && (
                <div className="live">
                  <span className="live-url">{new URL(p.link).host}</span>
                  <a className="btn p sm" href={p.link} target="_blank" rel="noreferrer">
                    Visit live site <Icon name="arrow" />
                  </a>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="c" data-shape>
      <div className="col">
        <Reveal as="p" i={0} className="kick">Contact</Reveal>
        <Reveal as="h2" i={1}>Let's build something together.</Reveal>
        <Reveal as="p" i={2} className="lead">
          I'm open to junior front-end and full stack roles, and to freelance projects. Based in Kuala Lumpur, happy to work with you.
        </Reveal>
        <Reveal i={3} className="btns">
          <a className="btn p" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn g" href="#intro">Back to top</a>
        </Reveal>
        <Reveal i={4} className="links">
          {profile.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              <Icon name={l.icon} />
              {l.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
