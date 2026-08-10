'use client';

import { useState, useEffect } from 'react';
import ParticlesCanvas from './ParticlesCanvas';

const emojiSet = ['🌹', '❤️', '💕', '💖', '💋', '💍', '👫', '💌', '🎁', '🎂', '🎈', '✨'];

export default function Love() {
  const [visibleSection, setVisibleSection] = useState<'gratitude' | 'love' | null>(null);
  const [printedText, setPrintedText] = useState('');
  const [printedLoveText, setPrintedLoveText] = useState('');

  const gratitudeText = "За то, что ты есть. Просто есть.";
  const loveText = "Ты моё солнце, мой свет, моё всё.";

  useEffect(() => {
    if (visibleSection === 'gratitude') {
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex < gratitudeText.length) {
          setPrintedText(gratitudeText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [visibleSection]);

  useEffect(() => {
    if (visibleSection === 'love') {
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex < loveText.length) {
          setPrintedLoveText(loveText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [visibleSection]);

  const showSection = (section: 'gratitude' | 'love') => {
    setPrintedText('');
    setPrintedLoveText('');
    setVisibleSection(section);
  };

  const goBack = () => {
    setPrintedText('');
    setPrintedLoveText('');
    setVisibleSection(null);
  };

  return (
    <>
      <ParticlesCanvas emojiSet={emojiSet} color="#f472b6" count={18} />

      <div className="love-container">
        <div className="love-card">
          {!visibleSection && (
            <div className="choice-screen">
              <div className="choice-hearts">
                <span style={{ fontSize: '1.8rem' }}>❤️</span>
                <span style={{ fontSize: '2.4rem' }}>💕</span>
                <span style={{ fontSize: '1.8rem' }}>❤️</span>
              </div>

              <h2 className="choice-title">Выбери раздел</h2>

              <div className="choice-buttons">
                <button className="choice-btn" onClick={() => showSection('gratitude')}>
                  <span className="choice-icon">🤗</span>
                  <span className="choice-label">Благодарность</span>
                </button>

                <button className="choice-btn" onClick={() => showSection('love')}>
                  <span className="choice-icon">💑</span>
                  <span className="choice-label">Я люблю тебя</span>
                </button>
              </div>
            </div>
          )}

          {visibleSection === 'gratitude' && (
            <div className="section-content">
              <button className="section-back" onClick={goBack}>← Назад</button>
              <div className="section-header">
                <span className="section-icon">🤗</span>
                <h2>Благодарность</h2>
              </div>
              <div className="gratitude-text">
                <p className="animate-in" style={{ animationDelay: '0.1s' }}>
                  Спасибо тебе за каждый момент, проведённый вместе.
                </p>
                <p className="animate-in" style={{ animationDelay: '0.2s' }}>
                  За твой смех, который заряжает меня энергией на весь день.
                </p>
                <p className="animate-in" style={{ animationDelay: '0.3s' }}>
                  За объятия, в которых весь мир исчезает.
                </p>
                <p className="printed-text">
                  {printedText}<span className="cursor">|</span>
                </p>
              </div>
              <div className="heart-decoration">
                <span style={{ fontSize: '1.6rem' }}>💋</span>
                <span style={{ fontSize: '1.4rem' }}>💖</span>
                <span style={{ fontSize: '1.6rem' }}>💍</span>
                <span style={{ fontSize: '1.4rem' }}>👫</span>
              </div>
            </div>
          )}

          {visibleSection === 'love' && (
            <div className="section-content">
              <button className="section-back" onClick={goBack}>← Назад</button>
              <div className="section-header love-header">
                <span className="section-icon">💋</span>
                <h2>Я люблю тебя</h2>
              </div>
              <div className="love-text">
                <div className="love-main">
                  <span className="heart-icon">💖</span>
                  <p>Ты делаешь меня счастливым человеком.</p>
                </div>
                <div className="love-message-box">
                  <p className="love-message">Каждый день с тобой — это подарок.</p>
                  <p className="printed-love-text">
                    {printedLoveText}<span className="cursor">|</span>
                  </p>
                </div>
                <div className="love-sign">
                  <span style={{ fontSize: '2.8rem' }}>❤️</span>
                </div>
              </div>
              <div className="sparkles">
                <span style={{ fontSize: '1.3rem' }}>💘</span>
                <span style={{ fontSize: '1.5rem' }}>🌹</span>
                <span style={{ fontSize: '1.3rem' }}>📩</span>
                <span style={{ fontSize: '1.4rem' }}>♾️</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .deco-fixed {
          position: fixed;
          pointer-events: none;
          z-index: 1;
          font-size: 1.5rem;
          opacity: 0.25;
        }

        .deco-left-top { left: 12px; top: 15%; }
        .deco-left-middle { left: 12px; top: 45%; }
        .deco-left-bottom { left: 12px; top: 70%; }

        .deco-right-top { right: 12px; top: 15%; }
        .deco-right-middle { right: 12px; top: 45%; }
        .deco-right-bottom { right: 12px; top: 70%; }

        .deco-bottom-center {
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          pointer-events: none;
          z-index: 1;
          opacity: 0.5;
        }

        .love-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          min-height: 100vh;
          justify-content: center;
          position: relative;
          z-index: 2;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .love-card {
          width: 100%;
          max-width: 420px;
          background: linear-gradient(145deg, #fff5f5, #ffe4e6);
          border-radius: 8px;
          padding: 36px 24px;
          position: relative;
          box-shadow: 0 20px 60px rgba(236, 72, 153, 0.12);
        }

        .love-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #db7093, #c71585, #db7093);
        }

        .choice-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .choice-hearts {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .choice-hearts span:nth-child(1) { animation: heartPulse 1.5s ease-in-out infinite; }
        .choice-hearts span:nth-child(2) { animation: heartPulse 1.5s ease-in-out 0.25s infinite; }
        .choice-hearts span:nth-child(3) { animation: heartPulse 1.5s ease-in-out 0.5s infinite; }

        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .choice-title {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.4rem;
          color: #8b4557;
          text-align: center;
          font-weight: 600;
        }

        .choice-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .choice-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .choice-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }

        .choice-icon {
          font-size: 2rem;
          animation: wiggle 2s ease-in-out infinite;
        }

        .choice-btn:nth-child(2) .choice-icon { animation-delay: 0.3s; }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .choice-label {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.2rem;
          color: #6b5b4f;
          font-weight: 500;
        }

        .section-content {
          display: flex;
          flex-direction: column;
          animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .section-back {
          align-self: flex-start;
          background: none;
          border: none;
          color: #c71585;
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 0.95rem;
          cursor: pointer;
          padding: 8px 0;
          margin-bottom: 16px;
          transition: opacity 0.3s ease;
        }

        .section-back:hover { opacity: 0.7; }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .section-icon {
          font-size: 2.2rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .section-header h2 {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.4rem;
          color: #c71585;
          font-weight: 600;
        }

        .gratitude-text, .love-text {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gratitude-text p, .love-message {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1rem;
          color: #4a4a4a;
          line-height: 1.4;
          text-align: center;
        }

        .animate-in {
          animation: textIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        @keyframes textIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .printed-text, .printed-love-text {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1rem;
          color: #c71585;
          font-weight: 600;
          font-style: italic;
          text-align: center;
          min-height: 26px;
        }

        .cursor {
          animation: blink 0.8s ease-in-out infinite;
          color: #db7093;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .heart-decoration, .sparkles {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }

        .heart-decoration span:nth-child(even),
        .sparkles span:nth-child(even) {
          animation: sparkle 1.5s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .love-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .heart-icon {
          font-size: 3rem;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.2); }
          30% { transform: scale(1); }
          45% { transform: scale(1.15); }
          60% { transform: scale(1); }
        }

        .love-main p {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.2rem;
          color: #c71585;
          font-weight: 600;
          text-align: center;
        }

        .love-message-box {
          background: rgba(255,255,255,0.7);
          padding: 14px;
          border-radius: 8px;
          text-align: center;
        }

        .love-sign {
          display: flex;
          justify-content: center;
          margin-top: auto;
          animation: floatUp 2s ease-in-out infinite;
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }

        @media (max-width: 480px) {
          .love-container {
            padding: 12px;
          }

          .love-card {
            max-width: 100%;
            padding: 24px 16px;
          }

          .choice-title {
            font-size: 1.2rem;
          }

          .choice-btn {
            padding: 14px 16px;
          }

          .choice-icon {
            font-size: 1.6rem;
          }

          .choice-label {
            font-size: 1.1rem;
          }

          .section-header h2 {
            font-size: 1.2rem;
          }

          .section-icon {
            font-size: 1.8rem;
          }

          .heart-icon {
            font-size: 2.4rem;
          }

          .love-main p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}