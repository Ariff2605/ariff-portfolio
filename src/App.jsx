import { useState } from 'react';
import ParticleMorph from './components/ParticleMorph.jsx';
import Nav from './components/Nav.jsx';
import { Hero, About, Experience, Projects, Contact } from './components/Sections.jsx';
import { profile } from './data/portfolio.js';

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <>
      <ParticleMorph onActiveChange={setActive} />
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
