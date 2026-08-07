'use client';

import { useEffect, useRef } from 'react';

interface PolaroidConfig {
  id: string;
  icon: string;
  label: string;
  tab: 'moments' | 'quotes' | 'love';
  rotation: number;
  translateY: number;
}

const polaroids: PolaroidConfig[] = [
  { id: 'moments', icon: '📸', label: 'Моменты', tab: 'moments', rotation: -4, translateY: -8 },
  { id: 'quotes', icon: '💬', label: 'Цитаты', tab: 'quotes', rotation: 2, translateY: 12 },
  { id: 'love', icon: '💝', label: 'Для тебя', tab: 'love', rotation: -3, translateY: -5 },
];

interface PolaroidSelectorProps {
  onSelectTab: (tab: 'moments' | 'quotes' | 'love') => void;
}

export default function PolaroidSelector({ onSelectTab }: PolaroidSelectorProps) {
  const polaroidRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      polaroidRefs.current.forEach((ref, index) => {
        if (ref) {
          const speed = [0.08, 0.05, 0.12][index] || 0.08;
          const baseY = polaroids[index].translateY;
          const baseRotation = polaroids[index].rotation;
          ref.style.transform = `rotate(${baseRotation}deg) translateY(${baseY + scrollY * speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="selector-container">
      <div className="selector-background" />
      
      <div className="decorations">
        <span className="deco deco-1">✨</span>
        <span className="deco deco-2">💕</span>
        <span className="deco deco-3">🌸</span>
        <span className="deco deco-4">✨</span>
        <span className="deco deco-5">💕</span>
      </div>

      <div className="selector-content">
        <div className="title-container">
          <span className="title-heart">💖</span>
          <h1 className="selector-title">Выбери раздел</h1>
          <span className="title-heart">💖</span>
        </div>

        <div className="polaroids-row">
          {polaroids.map((polaroid, index) => (
            <button
              key={polaroid.id}
              ref={(el) => { polaroidRefs.current[index] = el; }}
              className="polaroid-button"
              onClick={() => onSelectTab(polaroid.tab)}
              style={{
                '--rotation': `${polaroid.rotation}deg`,
                '--offset-y': `${polaroid.translateY}px`,
              } as React.CSSProperties}
            >
              <div className="polaroid-frame">
                <div className="polaroid-content">
                  <span className="polaroid-icon">{polaroid.icon}</span>
                </div>
              </div>
              <span className="polaroid-label">{polaroid.label}</span>
            </button>
          ))}
        </div>

        <p className="hint">Нажми на Polaroid, чтобы открыть</p>
      </div>

      <style jsx>{`
        .selector-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .selector-background {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #fef3f2 0%, #fdf2f8 50%, #faf5ff 100%);
          z-index: -1;
        }

        .decorations {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .deco {
          position: absolute;
          font-size: 2rem;
          opacity: 0;
          animation: floatIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .deco-1 { top: 15%; left: 10%; animation-delay: 0.3s; font-size: 1.5rem; }
        .deco-2 { top: 25%; right: 15%; animation-delay: 0.5s; font-size: 2rem; }
        .deco-3 { bottom: 30%; left: 8%; animation-delay: 0.7s; font-size: 1.8rem; }
        .deco-4 { bottom: 20%; right: 10%; animation-delay: 0.9s; font-size: 1.4rem; }
        .deco-5 { top: 50%; left: 5%; animation-delay: 0.4s; font-size: 1.6rem; }

        @keyframes floatIn {
          0% { 
            opacity: 0; 
            transform: scale(0) rotate(-180deg) translateY(50px);
          }
          100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg) translateY(0);
          }
        }

        .selector-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
          padding: 40px 20px;
        }

        .title-container {
          display: flex;
          align-items: center;
          gap: 16px;
          animation: titleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        @keyframes titleIn {
          0% { opacity: 0; transform: translateY(-30px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .title-heart {
          font-size: 2rem;
          animation: heartBeat 1.5s ease-in-out infinite;
        }

        .title-heart:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .selector-title {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: clamp(1.5rem, 5vw, 2.2rem);
          font-weight: 700;
          color: #6b5b4f;
          text-align: center;
          letter-spacing: 0.02em;
        }

        .polaroids-row {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          gap: clamp(25px, 6vw, 60px);
          perspective: 1200px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .polaroid-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          background: none;
          border: none;
          cursor: pointer;
          transform: rotate(var(--rotation)) translateY(var(--offset-y));
          animation: polaroidIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
          transition: transform 0.15s ease-out;
        }

        .polaroid-button:nth-child(1) { animation-delay: 0.3s; }
        .polaroid-button:nth-child(2) { animation-delay: 0.45s; }
        .polaroid-button:nth-child(3) { animation-delay: 0.6s; }

        @keyframes polaroidIn {
          0% {
            opacity: 0;
            transform: rotate(var(--rotation)) translateY(calc(var(--offset-y) + 60px)) scale(0.7);
          }
          100% {
            opacity: 1;
            transform: rotate(var(--rotation)) translateY(var(--offset-y)) scale(1);
          }
        }

        .polaroid-button:hover {
          transform: rotate(0deg) scale(1.1) translateY(-10px) !important;
          z-index: 10;
        }

        .polaroid-frame {
          width: clamp(100px, 24vw, 140px);
          height: clamp(115px, 28vw, 165px);
          background: #fff;
          padding: 10px 10px 40px 10px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.12);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          border-radius: 4px;
        }

        .polaroid-button:hover .polaroid-frame {
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }

        .polaroid-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #fef9f3, #fdf2f8);
          border-radius: 3px;
        }

        .polaroid-icon {
          font-size: clamp(36px, 10vw, 56px);
          animation: iconBounce 2s ease-in-out infinite;
        }

        .polaroid-button:nth-child(2) .polaroid-icon {
          animation-delay: 0.3s;
        }

        .polaroid-button:nth-child(3) .polaroid-icon {
          animation-delay: 0.6s;
        }

        @keyframes iconBounce {
          0%, 100% { transform: scale(1) rotate(-3deg); }
          50% { transform: scale(1.1) rotate(3deg); }
        }

        .polaroid-label {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-style: italic;
          font-size: clamp(1rem, 3vw, 1.2rem);
          color: #6b5b4f;
          letter-spacing: 0.05em;
          background: rgba(255,255,255,0.95);
          padding: 8px 16px;
          border-radius: 6px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .polaroid-button:hover .polaroid-label {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }

        .hint {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.1rem;
          color: #9c8b7e;
          font-style: italic;
          animation: fadeIn 0.8s ease-out 1s forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}