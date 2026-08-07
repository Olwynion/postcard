'use client';

import { ReactNode, useEffect, useState } from 'react';

interface TabContentProps {
  tab: 'moments' | 'quotes' | 'love';
  onBack: () => void;
  children: ReactNode;
  seasonBg?: string;
}

const tabStyles = {
  moments: {
    headerBg: 'rgba(255,255,255,0.8)',
    name: 'Моменты 📸',
  },
  quotes: {
    headerBg: 'rgba(255,255,255,0.85)',
    name: 'Цитаты 💬',
  },
  love: {
    headerBg: 'rgba(255,255,255,0.85)',
    name: 'Для тебя 💝',
  },
};

const defaultBackgrounds = {
  moments: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
  quotes: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)',
  love: 'linear-gradient(135deg, #fff5f5 0%, #ffe4e6 50%, #fecdd3 100%)',
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

  return (
    <div
      className={`tab-container ${isVisible ? 'visible' : ''}`}
      style={{ background: background }}
    >
      <header className="tab-header" style={{ background: style.headerBg }}>
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

        .tab-header {
          position: sticky;
          top: 0;
          padding: 24px;
          text-align: center;
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          z-index: 10;
          box-shadow: 0 4px 30px rgba(0,0,0,0.05);
        }

        .tab-name {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #5a4a42;
          letter-spacing: 0.03em;
        }

        .tab-content {
          padding: 24px;
          padding-bottom: 120px;
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          transition-delay: 0.15s;
        }

        .tab-content.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .back-button {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fff, #fef9f3);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
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
          transform: scale(1.15) rotate(-10deg);
          box-shadow: 0 12px 40px rgba(0,0,0,0.2);
        }

        .back-button:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}