'use client';

import { useState, useEffect, useRef } from 'react';
import ParticlesCanvas from './ParticlesCanvas';

const quotes = [
  {
    text: 'Ты — моё любимое "Привет" и "Спокойной ночи" в одном лице.',
    author: 'Неизвестный романтик'
  },
  {
    text: 'Мы не идеальны, но идеальны вместе. Особенно когда ты не видишь, как я заказываю пиццу тайком.',
    author: 'Влюблённый'
  },
  {
    text: 'Люблю тебя сильнее, чем свой телефон. А это, поверь, о многом говорит.',
    author: 'Современный романтик'
  },
  {
    text: 'Ты моя любимая причина опаздывать.',
    author: 'Опоздавший'
  },
  {
    text: 'С тобой даже молчание — это разговор.',
    author: 'Философ'
  },
  {
    text: 'Ты — как Wi-Fi. Без тебя у меня нет связи с миром.',
    author: 'Техно-романтик'
  },
  {
    text: 'Моё сердце делает "тык-тык", но думает о тебе оно постоянно.',
    author: 'Кардиолог-романтик'
  },
];

const emojiSet = ['💕', '✨', '💖', '💘', '❤️', '⭐', '🌹', '💌'];

export default function Quotes() {
  const [current, setCurrent] = useState(0);
  const [printedText, setPrintedText] = useState('');
  const [showAuthor, setShowAuthor] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animDirection, setAnimDirection] = useState<'in' | 'out' | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const printText = () => {
    setPrintedText('');
    setShowAuthor(false);
    setIsAnimating(true);

    const text = quotes[current].text;
    let charIndex = 0;

    if (timeoutRef.current) clearInterval(timeoutRef.current);

    timeoutRef.current = setInterval(() => {
      if (charIndex < text.length) {
        setPrintedText(text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(timeoutRef.current!);
        setIsAnimating(false);
        setTimeout(() => setShowAuthor(true), 600);
      }
    }, 35);
  };

  useEffect(() => {
    printText();
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [current]);

  const goToQuote = (index: number) => {
    if (isAnimating) return;
    setAnimDirection('out');
    setTimeout(() => {
      setCurrent(index);
      setAnimDirection('in');
      setTimeout(() => setAnimDirection(null), 300);
    }, 300);
  };

  const next = () => {
    goToQuote((current + 1) % quotes.length);
  };

  const prev = () => {
    goToQuote((current - 1 + quotes.length) % quotes.length);
  };

  return (
    <>
      <ParticlesCanvas emojiSet={emojiSet} color="#fbbf24" count={15} />

      <div className="quotes-container">
        <div className={`quote-card ${animDirection === 'out' ? 'slide-out' : ''} ${animDirection === 'in' ? 'slide-in' : ''}`}>
          <div className="card-inner">
            <div className="quote-decoration top-left">❝</div>
            <div className="quote-decoration bottom-right">❞</div>

            <div className="quote-content">
              <div className="quote-ribbon">
                <span style={{ fontSize: '1rem' }}>💘</span>
                <span className="ribbon-text">Цитата {current + 1} из {quotes.length}</span>
                <span style={{ fontSize: '0.9rem' }}>💕</span>
              </div>
              
              <div className="quote-icons-top">
                <span style={{ fontSize: '1.8rem' }}>💌</span>
              </div>
              
              <p className="quote-text">
                {printedText}
                {!showAuthor && <span className="cursor">|</span>}
              </p>
              
              <div className="quote-icons-bottom">
                <span style={{ fontSize: '1.6rem' }}>💋</span>
              </div>
              
              {showAuthor && (
                <div className="author-wrapper">
                  <div className="author-line"></div>
                  <p className="quote-author">— {quotes[current].author}</p>
                  <div className="author-line"></div>
                </div>
              )}
            </div>

            <div className="quote-controls">
              <button onClick={prev} className="quote-btn" disabled={isAnimating}>←</button>
              
              <div className="quote-dots">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    className={`quote-dot ${current === index ? 'active' : ''}`}
                    onClick={() => goToQuote(index)}
                  />
                ))}
              </div>
              
              <button onClick={next} className="quote-btn" disabled={isAnimating}>→</button>
            </div>
          </div>
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
          opacity: 0.4;
        }

        .quotes-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          position: relative;
          z-index: 2;
        }

        .quote-card {
          width: 100%;
          max-width: 480px;
          animation: floatIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes floatIn {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .quote-card.slide-out {
          animation: slideOut 0.3s cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        .quote-card.slide-in {
          animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes slideOut {
          to { opacity: 0; transform: translateX(-30px) scale(0.95); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px) scale(0.95); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        .card-inner {
          background: linear-gradient(145deg, #fffbeb, #fef3c7);
          border-radius: 8px;
          padding: 36px 28px;
          position: relative;
          box-shadow: 0 20px 60px rgba(245, 158, 11, 0.12);
          border: 2px solid rgba(245, 158, 11, 0.15);
        }

        .quote-decoration {
          position: absolute;
          font-size: 2rem;
          color: rgba(139, 90, 43, 0.1);
          font-family: Georgia, serif;
        }

        .quote-decoration.top-left { top: 10px; left: 14px; }
        .quote-decoration.bottom-right { bottom: 10px; right: 14px; }

        .quote-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .quote-ribbon {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.08), rgba(210, 105, 30, 0.08));
          border-radius: 20px;
        }

        .ribbon-text {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 0.85rem;
          color: #8b5a2b;
        }

        .quote-icons-top {
          display: flex;
          gap: 12px;
          opacity: 0.8;
        }

        .quote-icons-bottom {
          display: flex;
          gap: 12px;
          opacity: 0.85;
        }

        .quote-text {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: clamp(1.1rem, 4vw, 1.4rem);
          color: #3d2914;
          line-height: 1.4;
          font-style: italic;
          text-align: center;
          min-height: 45px;
        }

        .author-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }

        .author-line {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #d97706, transparent);
        }

        .quote-author {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 0.9rem;
          color: #92400e;
          font-style: italic;
        }

        .quote-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 20px;
        }

        .quote-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fff, #fef9f3);
          border: 2px solid rgba(245, 158, 11, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: #92400e;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.15);
        }

        .quote-btn:hover:not(:disabled) {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.25);
        }

        .quote-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quote-dots {
          display: flex;
          gap: 8px;
        }

        .quote-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(245, 158, 11, 0.4);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .quote-dot.active {
          background: #f59e0b;
          border-color: #f59e0b;
          transform: scale(1.2);
        }

        .quote-dot:hover:not(.active) {
          border-color: #f59e0b;
        }

        .cursor {
          animation: blink 0.8s ease-in-out infinite;
          color: #f59e0b;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 480px) {
          .quotes-container {
            padding: 12px;
          }

          .quote-card {
            max-width: 100%;
          }

          .card-inner {
            padding: 24px 18px;
          }

          .quote-text {
            font-size: 1.1rem;
            line-height: 1.35;
          }

          .quote-btn {
            width: 36px;
            height: 36px;
          }

          .quote-dot {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>
    </>
  );
}