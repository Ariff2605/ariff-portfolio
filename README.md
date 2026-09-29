# Ariff Firdaus portfolio (React + Vite)

Scroll-driven 3D particle portfolio. One particle cloud morphs into a new shape
per section: knot, brain, car, full-stack layers, globe.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Edit your content

Everything you'd change is in `src/data/portfolio.js`:
name, tagline, email, GitHub/LinkedIn/Upwork links, experience and projects.

## How it's organised

- `src/components/ParticleMorph.jsx`: the Three.js canvas and scroll-to-morph logic
- `src/three/shapes.js`: the 5 shapes (edit or add shapes here)
- `src/components/Sections.jsx`: the page sections
- `src/components/Reveal.jsx`: Framer Motion fade-in used on text
- `src/index.css`: all styles

## Adding or reordering sections

Each `<section data-shape>` is one morph step, in page order.
The number of sections must equal the number of shapes returned by
`buildShapes()`, and `SIDES` / `GLOWS` in `shapes.js` need one entry per shape.
