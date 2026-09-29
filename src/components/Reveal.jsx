import { motion, useReducedMotion } from 'framer-motion';

// Fade + slide + un-blur when the element scrolls into view.
// `i` staggers items inside the same section.
export default function Reveal({ as = 'div', i = 0, children, ...rest }) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y: 26, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
