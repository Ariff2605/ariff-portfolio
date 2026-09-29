import { sections } from '../data/portfolio.js';

export default function Nav({ active }) {
  return (
    <>
      <nav className="top" aria-label="Main">
        <a className="logo" href="#intro">AF-PORTFOLIO</a>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <a className="cta" href="#contact">Contact</a>
      </nav>

      <nav className="dots" aria-label="Sections">
        {sections.map((s, k) => (
          <a key={s.id} href={`#${s.id}`} className={k === active ? 'on' : ''} aria-current={k === active ? 'true' : undefined}>
            {s.label}
            <i />
          </a>
        ))}
      </nav>
    </>
  );
}
