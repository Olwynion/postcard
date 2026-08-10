'use client';

import { useState } from 'react';
import Card from './components/Card';
import YearMessage from './components/YearMessage';
import PhotoGallery from './components/PhotoGallery';
import LoveMessage from './components/LoveMessage';

type Screen = 'card' | 'message' | 'moments' | 'love';

export default function Home() {
  const [screen, setScreen] = useState<Screen>('card');

  const handleCardOpen = () => {
    setScreen('message');
  };

  const handleMessageNext = () => {
    setScreen('moments');
  };

  const handleMomentsNext = () => {
    setScreen('love');
  };

  return (
    <div className="app">
      {screen === 'card' && (
        <Card onOpen={handleCardOpen} />
      )}

      {screen === 'message' && (
        <YearMessage onNext={handleMessageNext} />
      )}

      {screen === 'moments' && (
        <PhotoGallery onNext={handleMomentsNext} />
      )}

      {screen === 'love' && (
        <LoveMessage />
      )}
    </div>
  );
}