'use client';

import PolaroidButton from './PolaroidButton';

type Tab = 'moments' | 'quotes' | 'love';

interface NavigationProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs = [
  { id: 'moments' as Tab, icon: '📸', label: 'Моменты' },
  { id: 'quotes' as Tab, icon: '💬', label: 'Цитаты' },
  { id: 'love' as Tab, icon: '💝', label: 'Для тебя' },
];

export default function Navigation({ currentTab, onTabChange }: NavigationProps) {
  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1>Наш первый год вместе 💕</h1>
      </div>

      <div className="nav-buttons">
        {tabs.map((tab) => (
          <PolaroidButton
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            isActive={currentTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </div>

      <style jsx>{`
        .navigation {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          padding: 30px 20px;
        }

        .nav-header h1 {
          font-family: 'Georgia', serif;
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          color: #6b5b4f;
          text-align: center;
          letter-spacing: 0.02em;
          animation: fadeIn 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .nav-buttons {
          display: flex;
          gap: clamp(20px, 5vw, 40px);
          flex-wrap: wrap;
          justify-content: center;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </nav>
  );
}