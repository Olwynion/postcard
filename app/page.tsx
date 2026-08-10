'use client';

import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './components/Card';
import YearMessage from './components/YearMessage';
import PhotoGallery from './components/PhotoGallery';
import LoveMessage from './components/LoveMessage';

type Screen = 'card' | 'message' | 'moments' | 'love';
const screenOrder: Screen[] = ['card', 'message', 'moments', 'love'];

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Home() {
  const [screen, setScreen] = useState<Screen>('card');
  const currentIndex = screenOrder.indexOf(screen);
  const touchStart = useRef({ x: 0, y: 0 });

  const goTo = useCallback((next: Screen) => {
    setScreen(next);
  }, []);

  const handleCardOpen = useCallback(() => goTo('message'), [goTo]);

  const handleSwipe = (dx: number, dy: number) => {
    if (Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (Math.abs(dx) < 80) return;

    if (dx < 0 && currentIndex < screenOrder.length - 1) {
      setScreen(screenOrder[currentIndex + 1]);
    } else if (dx > 0 && currentIndex > 0) {
      setScreen(screenOrder[currentIndex - 1]);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    handleSwipe(dx, dy);
  };

  return (
    <div className="app" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ position: 'fixed', inset: 0 }}
        >
          {screen === 'card' && <Card onOpen={handleCardOpen} />}
          {screen === 'message' && <YearMessage onNext={() => goTo('moments')} />}
          {screen === 'moments' && <PhotoGallery onNext={() => goTo('love')} />}
          {screen === 'love' && <LoveMessage onBack={() => goTo('moments')} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}