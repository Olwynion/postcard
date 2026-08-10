'use client';

import { ReactNode, useEffect, useState } from 'react';
import ParticlesCanvas from './ParticlesCanvas';

interface TabContentProps {
  tab: 'moments' | 'quotes' | 'love';
  onBack: () => void;
  children: ReactNode;
  seasonBg?: string;
}

const tabStyles = {
  moments: {
    headerBg: 'rgba(255,255,255,0.9)',
    name: 'Моменты',
    emoji: '📷',
  },
  quotes: {
    headerBg: 'rgba(255,255,255,0.95)',
    name: 'Цитаты',
    emoji: '💌',
  },
  love: {
    headerBg: 'rgba(255,255,255,0.95)',
    name: 'Для тебя',
    emoji: '❤️',
  },
};

const defaultBackgrounds = {
  moments: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
  quotes: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)',
  love: 'linear-gradient(135deg, #fff5f5 0%, #ffe4e6 50%, #fecdd3 100%)',
};

const emojiSets = {
  moments: ['🌸', '⭐', '🌷', '🦋', '✨', '🌺', '🌹', '💕', '🌻'],
  quotes: ['💌', '⭐', '📝', '🌹', '🦋', '💫', '💖', '💘', '✨'],
  love: ['❤️', '💕', '💗', '💝', '🌹', '💖', '💘', '✨', '💕'],
};

const decorMap = {
  moments: {
    left: ['🌸', '⭐', '🌷'],
    right: ['🦋', '✨', '🌺'],
    bottom: ['💕', '🌹'],
  },
  quotes: {
    left: ['💌', '⭐', '📝'],
    right: ['🌹', '🦋', '💫'],
    bottom: ['💖', '💘', '✨'],
  },
  love: {
    left: ['❤️', '💕', '💗'],
    right: ['💝', '🌹', '💖'],
    bottom: ['💋', '💘', '🌹'],
  },
};

export default function TabContent({ tab, onBack, children, seasonBg }: TabContentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(true), 50);
    const timer2 = setTimeout(() => setShowContent(true), 400);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleBack = () => {
    setShowContent(false);
    setIsVisible(false);
    setTimeout(onBack, 500);
  };

  const style = tabStyles[tab];
  const background = seasonBg || defaultBackgrounds[tab];
  const decos = decorMap[tab];

return (
    <div
      className={`tab-container ${isVisible ? 'visible' : ''}`}
      style={{ background: background }}
    >
      <ParticlesCanvas emojiSet={emojiSets[tab]} count={12} />
      
      <header className="tab-header" style={{ background: style.headerBg }}>
        <span className="tab-icon">{style.emoji}</span>
        <span className="tab-name">{style.name}</span>
      </header>

      <div className={`tab-content ${showContent ? 'show' : ''}`}>
        {children}
      </div>

      <button
        className="back-button"
        onClick={handleBack}
        aria-label="Вернуться"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style jsx>{`
        .tab-container {
          position: fixed;
          inset: 0;
          opacity: 0;
          transform: scale(0.92);
          transition: background 0.6s ease;
          z-index: 50;
          overflow-y: auto;
        }

        .tab-container.visible {
          opacity: 1;
          transform: scale(1);
        }

        .deco-fixed {
          position: fixed;
          pointer-events: none;
          z-index: 0;
          font-size: 1.5rem;
          opacity: 0.25;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .deco-left-top { left: 10px; top: 18%; }
        .deco-left-middle { left: 10px; top: 45%; }
        .deco-left-bottom { left: 10px; top: 72%; }

        .deco-right-top { right: 10px; top: 18%; }
        .deco-right-middle { right: 10px; top: 45%; }
        .deco-right-bottom { right: 10px; top: 72%; }

        .deco-bottom-center {
          position: fixed;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 16px;
          pointer-events: none;
          z-index: 0;
          font-size: 1.3rem;
          opacity: 0.3;
        }

        .tab-container.visible {
          opacity: 1;
          transform: scale(1);
        }

        .tab-bg-deco {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .deco-left, .deco-right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          opacity: 0.2;
        }

        .deco-left { left: 8px; }
        .deco-right { right: 8px; }

        .deco-bottom {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          opacity: 0.25;
        }

        .tab-header {
          position: sticky;
          top: 0;
          padding: 16px 20px;
          text-align: center;
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .tab-icon {
          display: flex;
        }

        .tab-name {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.4rem;
          font-weight: 600;
          color: #5a4a42;
        }

        .tab-content {
          padding: 20px;
          padding-bottom: 100px;
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          transition-delay: 0.15s;
          position: relative;
          z-index: 1;
        }

        .tab-content.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .back-button {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fff, #fef9f3);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 25px rgba(0,0,0,0.12);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          color: #6b5b4f;
          z-index: 100;
          opacity: 0;
          transform: scale(0.5) rotate(-90deg);
        }

        .tab-container.visible .back-button {
          opacity: 1;
          transform: scale(1) rotate(0);
          transition-delay: 0.5s;
        }

        .back-button:hover {
          transform: scale(1.1) rotate(-10deg);
          box-shadow: 0 10px 35px rgba(0,0,0,0.18);
        }

        .back-button:active {
          transform: scale(0.95);
        }

        @media (max-width: 480px) {
          .tab-header {
            padding: 12px 16px;
          }

          .tab-icon {
            font-size: 1.4rem;
          }

          .tab-name {
            font-size: 1.2rem;
          }

          .tab-content {
            padding: 16px 12px;
            padding-bottom: 90px;
          }

          .back-button {
            bottom: 20px;
            right: 20px;
            width: 46px;
            height: 46px;
          }

          .back-button svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </div>
  );
}