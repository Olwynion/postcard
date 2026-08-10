'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  rotate: number;
  scale: number;
  duration: number;
}

const emojis = ['❤️', '💕', '💖', '💗', '✨', '🌸', '💋', '💌'];

export default function Confetti({ count = 50 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 150 + Math.random() * 250;
      return {
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.cos(angle) * radius * (0.5 + Math.random() * 0.5),
        y: Math.sin(angle) * radius * (0.5 + Math.random() * 0.5) - 100,
        rotate: Math.random() * 720 - 360,
        scale: 0.5 + Math.random() * 1,
        duration: 1.5 + Math.random() * 2,
      };
    });
    setParticles(newParticles);

    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <AnimatePresence>
      {show && (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              style={{ position: 'absolute', left: '50%', top: '50%', fontSize: '1.6rem' }}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0 }}
              animate={{
                x: p.x,
                y: p.y,
                rotate: p.rotate,
                opacity: [1, 1, 0],
                scale: p.scale,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: p.duration, ease: 'easeOut' }}
            >
              {p.emoji}
            </motion.span>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
