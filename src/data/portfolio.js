// Edit your content here. The layout and 3D read everything from this file.

export const profile = {
  name: 'Ariff Firdaus',
  role: 'Full stack developer in Kuala Lumpur, Malaysia',
  tagline:
    "I build web apps with React and Node.js,I'm using MongoDB as the web database. Currently, I'm learning AI by training a language model by using free source AI Models.",
  status: 'Open to junior developer roles',
  email: 'arifffirdaus18@gmail.com',
  links: [
    { label: 'GitHub', icon: 'github', href: 'https://github.com/Ariff2605' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/ariff-firdaus' },
    { label: 'Upwork', icon: 'upwork', href: 'https://www.upwork.com/freelancers/~01af8369043276ff89' },
    { label: 'WhatsApp', icon: 'whatsapp', href: 'https://wa.me/60128226855' },
  ],
};

export const about = {
  title: 'I learn many things while...',
  paragraphs: [
    'Before I wrote code, I worked as an aircraft technician at Upeca Aerotech Sdn Bhd, I learned how to make a aircraft wings from a single piece of titanium,steel and aluminum. I learned how to follow a procedure and check every detail, because a single mistake can be fatal.',
    "I carried into my computer science degree at MSU. It's why I'm so curious about  the AI works everyday, and i'm tuning the existing AI models to make it more efficient. I also learned how to build web apps with React and Node.js, and I'm using MongoDB as the web database.",
  ],
  facts: [
    { label: 'Bachelor', value: ' in Computer Science & Technology' },
    { label: 'Diploma', value: 'Aircraft Maintenance Technology' },
    { label: 'Still Learning', value: 'RAG,Qlora,LLM,Vector DBs,Embeddings,Neural Networks' },
  ],
  skills: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'HTML & CSS', 'Python', 'PyTorch'],
};

export const experience = [
  {
    when: 'Apr to Sep 2026',
    title: 'Full Stack Developer Intern, Cloud Basha',
    text: 'Built an internal business and admin web application, working across the MongoDB data layer and the interface.',
  },
  {
    when: '2022 to 2023',
    title: 'Aircraft Technician, Upeca Aerotech',
    text: 'Maintained and inspected aircraft components, where every step follows a procedure and every detail is checked.',
  },
  {
    when: 'Graduating in November 2026',
    title: 'Degree Holders',
    text: "Bachelor's in Computer Science & Technology at Management & Science University (MSU), Malaysia.",
  },
];

// Stack layers shown in the Projects legend; tags are coloured by the layer they belong to.
export const layers = {
  frontend: { label: 'Frontend', color: '#3FD8F0' },
  backend: { label: 'Backend', color: '#9D6BFF' },
  database: { label: 'Database', color: '#3BE38B' },
  ai: { label: 'AI', color: '#101bf1' },
};

// Tags not listed here (e.g. 'Full stack') stay neutral.
export const tagLayer = {
  'React': 'frontend',
  'UI design': 'frontend',
  'Node.js': 'backend',
  'MongoDB': 'database',
  'Vector DBs': 'database',
  'Python': 'ai',
  'PyTorch': 'ai',
  'Transformers': 'ai',
  'RAG': 'ai',
  'QLoRA': 'ai',
  'LLM': 'ai',
  'Embeddings': 'ai',
  'Neural Networks': 'ai',
};

export const projects = [
  {
    name: 'CodeBridge Courses(LMS)',
    type: 'Internship Project',
    text: 'A learning platform with separate dashboards for students and trainers, redesigned around a clean sidebar layout.',
    tags: ['React', 'Node.js', 'UI design'],
    link: 'https://courses.codebridge.app/', // adds a "Visit live site" button to the card
  },
  {
    name: 'E-Commerce Web App',
    type: ' Internship Project',
    text: 'An internal business tool for managing company Stock, built during my full stack internship.',
    tags: ['MongoDB', 'Node.js', 'Full stack'],
    href: '#contact',
  },
  {
    name: 'Aeri ( Still Developing )',
    type: 'AI',
    text: "Use existing AI models, to understand how LLMs really work.",
    tags: ['Python', 'PyTorch', 'Transformers', 'RAG', 'QLoRA', 'LLM', 'Vector DBs', 'Embeddings', 'Neural Networks'],
    href: '#contact',
  },
];

// Section order must match the shape order in src/three/shapes.js
export const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
