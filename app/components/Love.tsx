'use client';

import { useState, useEffect } from 'react';

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
    <div className="love-container">
      <div className="love-card">
        {!visibleSection && (
          <div className="choice-screen">
            <div className="choice-hearts">
              <span>💕</span>
              <span>💖</span>
              <span>💕</span>
            </div>

            <h2 className="choice-title">Выбери раздел</h2>

            <div className="choice-buttons">
              <button
                className="choice-btn gratitude"
                onClick={() => showSection('gratitude')}
              >
                <span className="choice-emoji">💝</span>
                <span className="choice-label">Благодарность</span>
              </button>

              <button
                className="choice-btn love"
                onClick={() => showSection('love')}
              >
                <span className="choice-emoji">❤️</span>
                <span className="choice-label">Я люблю тебя</span>
              </button>
            </div>
          </div>
        )}

        {visibleSection === 'gratitude' && (
          <div className="section-content">
            <button className="section-back" onClick={goBack}>
              ← Назад
            </button>

            <div className="paper-lines" />

            <div className="section-header">
              <span className="section-emoji">💝</span>
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
              <span>💕</span>
              <span>✨</span>
              <span>💕</span>
            </div>
          </div>
        )}

        {visibleSection === 'love' && (
          <div className="section-content">
            <button className="section-back" onClick={goBack}>
              ← Назад
            </button>

            <div className="paper-lines" />

            <div className="section-header love-header">
              <span className="section-emoji">❤️</span>
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

              <div className="love-sign">💕</div>
            </div>

            <div className="sparkles">
              <span>✨</span>
              <span>💕</span>
              <span>✨</span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .love-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          min-height: 100vh;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .love-card {
          width: 100%;
          max-width: 520px;
          background: linear-gradient(145deg, #fff5f5, #ffe4e6);
          border-radius: 8px;
          padding: 50px 36px;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(236, 72, 153, 0.15),
            inset 0 0 60px rgba(139, 69, 119, 0.03);
        }

        .love-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(90deg, #db7093, #c71585, #db7093);
        }

        .love-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: linear-gradient(90deg, #db7093, #c71585, #db7093);
        }

        .paper-lines {
          position: absolute;
          inset: 20px 30px;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 27px,
              rgba(219, 112, 147, 0.1) 27px,
              rgba(219, 112, 147, 0.1) 28px
            );
          pointer-events: none;
        }

        .choice-screen {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 36px;
          animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .choice-hearts {
          display: flex;
          gap: 12px;
          font-size: 2rem;
        }

        .choice-hearts span:nth-child(1) { animation: heartPulse 1.5s ease-in-out infinite; }
        .choice-hearts span:nth-child(2) { animation: heartPulse 1.5s ease-in-out 0.25s infinite; }
        .choice-hearts span:nth-child(3) { animation: heartPulse 1.5s ease-in-out 0.5s infinite; }

        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        .choice-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.8rem;
          color: #8b4557;
          text-align: center;
          font-weight: 600;
        }

        .choice-buttons {
          display: flex;
          flex-direction: column;
          gap: 18px;
          width: 100%;
        }

        .choice-btn {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px 28px;
          background: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        }

        .choice-btn:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .choice-btn:active {
          transform: translateY(0) scale(0.98);
        }

        .choice-emoji {
          font-size: 3rem;
          animation: wiggle 2s ease-in-out infinite;
        }

        .choice-btn:nth-child(2) .choice-emoji {
          animation-delay: 0.3s;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .choice-label {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          color: #6b5b4f;
          font-weight: 500;
        }

        .section-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 1;
        }

        .section-back {
          align-self: flex-start;
          background: none;
          border: none;
          color: #c71585;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem;
          cursor: pointer;
          padding: 8px 0;
          margin-bottom: 24px;
          transition: opacity 0.3s ease;
        }

        .section-back:hover {
          opacity: 0.7;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .section-emoji {
          font-size: 2.8rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .section-header h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          color: #c71585;
          font-weight: 600;
        }

        .gratitude-text, .love-text {
          display: flex;
          flex-direction: column;
          gap: 18px;
          flex: 1;
        }

        .gratitude-text p, .love-message {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.15rem;
          color: #4a4a4a;
          line-height: 1.9;
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
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.15rem;
          color: #c71585;
          font-weight: 600;
          font-style: italic;
          text-align: center;
          min-height: 30px;
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
          gap: 8px;
          margin-top: auto;
          font-size: 1.4rem;
        }

        .heart-decoration span:nth-child(even),
        .sparkles span:nth-child(even) {
          animation: sparkle 1.5s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.5; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .love-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .heart-icon {
          font-size: 4rem;
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
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          color: #c71585;
          font-weight: 600;
          text-align: center;
        }

        .love-message-box {
          background: rgba(255,255,255,0.7);
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }

        .love-sign {
          text-align: center;
          font-size: 4rem;
          margin-top: auto;
          animation: floatUp 2s ease-in-out infinite;
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}