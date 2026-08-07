'use client';

import { useState } from 'react';
import Card from './components/Card';
import PolaroidSelector from './components/PolaroidSelector';
import TabContent from './components/TabContent';
import PhotoGallery from './components/PhotoGallery';
import Quotes from './components/Quotes';
import Love from './components/Love';

type Screen = 'card' | 'selector' | { tab: 'moments' | 'quotes' | 'love' };

const defaultSeasonBg = 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)';

export default function Home() {
  const [screen, setScreen] = useState<Screen>('card');
  const [seasonBackground, setSeasonBackground] = useState<string>(defaultSeasonBg);

  const handleCardOpen = () => {
    setScreen('selector');
  };

  const handleTabSelect = (tab: 'moments' | 'quotes' | 'love') => {
    setScreen({ tab });
  };

  const handleBack = () => {
    setScreen('selector');
  };

  const handleSeasonChange = (bg: string) => {
    setSeasonBackground(bg);
  };

  return (
    <div className="app">
      {screen === 'card' && (
        <Card onOpen={handleCardOpen} />
      )}

      {screen === 'selector' && (
        <PolaroidSelector onSelectTab={handleTabSelect} />
      )}

      {typeof screen === 'object' && 'tab' in screen && (
        <TabContent tab={screen.tab} onBack={handleBack} seasonBg={screen.tab === 'moments' ? seasonBackground : undefined}>
          {screen.tab === 'moments' && <PhotoGallery onSeasonChange={handleSeasonChange} />}
          {screen.tab === 'quotes' && <Quotes />}
          {screen.tab === 'love' && <Love />}
        </TabContent>
      )}
    </div>
  );
}