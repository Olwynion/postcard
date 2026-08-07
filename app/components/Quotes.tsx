'use client';

import { useState, useEffect, useRef } from 'react';

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
        setTimeout(() => setShowAuthor(true), 200);
      }
    }, 35);
  };

  useEffect(() => {
    printText();
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  const goToQuote = (index: number) => {
    if (index === current || isAnimating) return;
    setAnimDirection('out');

    setTimeout(() => {
      setCurrent(index);
      setAnimDirection('in');
      setTimeout(printText, 50);
    }, 300);
  };

  const next = () => {
    goToQuote((current + 1) % quotes.length);
  };

  const prev = () => {
    goToQuote((current - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className="quotes-container">
      <canvas ref={undefined} className="bg-particles" />
      
      <div className="scene-layer flowers-bg">
        <div className="flower-cluster cluster-1">
          <span style={{fontSize: '3rem', opacity: 0.15}}>🌻</span>
          <span style={{fontSize: '2rem', opacity: 0.12}}>🌼</span>
          <span style={{fontSize: '2.5rem', opacity: 0.1}}>🌻</span>
        </div>
        <div className="flower-cluster cluster-2">
          <span style={{fontSize: '2.5rem', opacity: 0.12}}>🌼</span>
          <span style={{fontSize: '3rem', opacity: 0.15}}>🌻</span>
          <span style={{fontSize: '2rem', opacity: 0.1}}>🌼</span>
        </div>
        <div className="flower-cluster cluster-3">
          <span style={{fontSize: '2rem', opacity: 0.1}}>🌻</span>
          <span style={{fontSize: '2.5rem', opacity: 0.12}}>🌼</span>
        </div>
      </div>

      <div className={`quote-card ${animDirection === 'out' ? 'slide-out' : ''} ${animDirection === 'in' ? 'slide-in' : ''}`}>
        <div className="card-inner">
          <div className="quote-decoration top-left">❝</div>
          <div className="quote-decoration bottom-right">❞</div>

          <div className="flowers-side flowers-left">
            <span>🌻</span>
            <span>🌼</span>
          </div>
          
          <div className="flowers-side flowers-right">
            <span>🌼</span>
            <span>🌻</span>
          </div>

          <div className="quote-content">
            <div className="quote-ribbon">
              <span className="ribbon-icon">✨</span>
              <span className="ribbon-text">Цитата {current + 1} из {quotes.length}</span>
            </div>
            
            <p className="quote-text">
              {printedText}
              {!showAuthor && <span className="cursor">|</span>}
            </p>
            
            {showAuthor && (
              <div className="author-wrapper">
                <div className="author-line"></div>
                <p className="quote-author">— {quotes[current].author}</p>
                <div className="author-line"></div>
              </div>
            )}
          </div>

          <div className="quote-controls">
            <button onClick={prev} className="quote-btn" aria-label="Предыдущая" disabled={isAnimating}>
              ←
            </button>
            
            <div className="quote-dots">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  className={`quote-dot ${current === index ? 'active' : ''}`}
                  onClick={() => goToQuote(index)}
                  aria-label={`Цитата ${index + 1}`}
                />
              ))}
            </div>
            
            <button onClick={next} className="quote-btn" aria-label="Следующая" disabled={isAnimating}>
              →
            </button>
          </div>
        </div>
      </div>

      <div className="scene-layer decorations-bottom">
        <span style={{fontSize: '1.5rem', opacity: 0.08}}>🌻</span>
        <span style={{fontSize: '2rem', opacity: 0.1}}>🌼</span>
        <span style={{fontSize: '1.2rem', opacity: 0.06}}>🌻</span>
      </div>

      <style jsx>{`
        .quotes-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
          padding: 40px 20px;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .bg-particles {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .scene-layer {
          position: fixed;
          pointer-events: none;
          z-index: 1;
        }

        .flowers-bg {
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
        }

        .flower-cluster {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .cluster-1 { transform: rotate(-5deg); }
        .cluster-2 { transform: rotate(3deg); }
        .cluster-3 { transform: rotate(-8deg); }

        .decorations-bottom {
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 30px;
        }

        .quote-card {
          width: 100%;
          max-width: 580px;
          position: relative;
          z-index: 10;
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
          background: rgba(255, 251, 235, 0.92);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 50px 40px;
          position: relative;
          box-shadow: 
            0 25px 80px rgba(139, 90, 43, 0.15),
            0 8px 30px rgba(139, 90, 43, 0.1),
            inset 0 1px 0 rgba(255,255,255,0.8);
          border: 1px solid rgba(139, 90, 43, 0.1);
        }

        .card-inner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b5a2b, #d2691e, #8b5a2b);
          border-radius: 16px 16px 0 0;
        }

        .quote-decoration {
          position: absolute;
          font-size: 4rem;
          color: rgba(139, 90, 43, 0.12);
          font-family: Georgia, serif;
          line-height: 1;
        }

        .quote-decoration.top-left {
          top: 20px;
          left: 25px;
        }

        .quote-decoration.bottom-right {
          bottom: 20px;
          right: 25px;
        }

        .flowers-side {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 20px;
          top: 50%;
          transform: translateY(-50%);
        }

        .flowers-left { left: 12px; }
        .flowers-right { right: 12px; }

        .flowers-side span {
          font-size: 1.8rem;
          opacity: 0.5;
          animation: sway 3s ease-in-out infinite;
        }

        .flowers-side span:nth-child(2) {
          animation-delay: 0.5s;
        }

        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .quote-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .quote-ribbon {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px;
          background: linear-gradient(135deg, rgba(139, 90, 43, 0.1), rgba(210, 105, 30, 0.1));
          border-radius: 20px;
        }

        .ribbon-icon {
          font-size: 1rem;
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .ribbon-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.9rem;
          color: #8b5a2b;
          font-weight: 500;
        }

        .quote-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.3rem, 4vw, 1.7rem);
          color: #3d2914;
          line-height: 1.9;
          font-style: italic;
          text-align: center;
          min-height: 80px;
          text-shadow: 0 1px 0 rgba(255,255,255,0.8);
        }

        .cursor {
          animation: blink 0.7s ease-in-out infinite;
          color: #8b5a2b;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .author-wrapper {
          display: flex;
          align-items: center;
          gap: 16px;
          animation: fadeInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .author-line {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #8b5a2b, transparent);
        }

        .quote-author {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          color: #6b4423;
          font-weight: 500;
        }

        .quote-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 10px;
        }

        .quote-btn {
          font-size: 1.4rem;
          background: linear-gradient(135deg, #8b5a2b, #6b4423);
          border: none;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          cursor: pointer;
          color: #fff;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 6px 20px rgba(139, 90, 43, 0.3);
        }

        .quote-btn:hover:not(:disabled) {
          transform: scale(1.15);
          box-shadow: 0 10px 30px rgba(139, 90, 43, 0.4);
        }

        .quote-btn:active:not(:disabled) {
          transform: scale(0.95);
        }

        .quote-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .quote-dots {
          display: flex;
          gap: 12px;
        }

        .quote-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #d2691e;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          opacity: 0.4;
        }

        .quote-dot:hover {
          opacity: 0.7;
          transform: scale(1.3);
        }

        .quote-dot.active {
          opacity: 1;
          transform: scale(1.4);
          box-shadow: 0 0 15px rgba(139, 90, 43, 0.6);
        }
      `}</style>
    </div>
  );
}