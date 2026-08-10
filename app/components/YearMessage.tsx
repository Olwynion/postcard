'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesCanvas from './ParticlesCanvas';

const emojiSet = ['✨', '🌟', '💫', '⭐', '🌙', '💕'];

const fullText = `Год назад ты вошла в мою жизнь и сделала её ярче.

Каждый день с тобой — это маленькое приключение.

Ты смеёшься, и мир становится теплее.

Ты рядом, и всё остальное неважно.

Этот год — только начало нашей истории.`;

export default function YearMessage({ onNext }: { onNext: () => void }) {
  const [visible, setVisible] = useState(false);
  const [printedText, setPrintedText] = useState('');
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    setVisible(true);

    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < fullText.length) {
        setPrintedText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowContinue(true), 600);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ParticlesCanvas emojiSet={emojiSet} color="#f9a8d4" count={30} />

      <div className={`message-container ${visible ? 'visible' : ''}`}>
        <div className="message-card">
          <div className="hearts-row">
            <span>💕</span>
            <span>❤️</span>
            <span>💕</span>
          </div>

          <div className="message-content">
            <h1 className="message-title">Наш год вместе</h1>
            
            <div className="message-text">
              <p className="typed-text">
                {printedText}
                <span className="cursor">|</span>
              </p>
            </div>

            <div className="sparkles">
              <span>✨</span>
              <span>💖</span>
              <span>✨</span>
            </div>
          </div>

          <AnimatePresence>
            {showContinue && (
              <button
                className="continue-btn"
                onClick={onNext}
              >
                Продолжить 💕
              </button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .message-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.8s ease;
          z-index: 100;
        }

        .message-container.visible {
          opacity: 1;
        }

        .message-card {
          background: linear-gradient(145deg, #fff5f7, #ffeef2);
          border-radius: 12px;
          padding: 40px 32px;
          max-width: 480px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(236, 72, 153, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .hearts-row {
          display: flex;
          gap: 8px;
          font-size: 1.6rem;
        }

        .hearts-row span:nth-child(1) { animation: pulse 2s ease-in-out infinite; }
        .hearts-row span:nth-child(2) { animation: pulse 2s ease-in-out 0.3s infinite; }
        .hearts-row span:nth-child(3) { animation: pulse 2s ease-in-out 0.6s infinite; }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .message-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        .message-title {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 2.2rem;
          font-weight: 700;
          color: #be185d;
        }

        .message-text {
          width: 100%;
        }

        .typed-text {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.3rem;
          color: #4a4a4a;
          line-height: 1.6;
          white-space: pre-wrap;
        }

        .cursor {
          animation: blink 0.8s ease-in-out infinite;
          color: #ec4899;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .sparkles {
          display: flex;
          gap: 12px;
          font-size: 1.4rem;
        }

        .sparkles span:nth-child(1) { animation: sparkle 2s ease-in-out infinite; }
        .sparkles span:nth-child(2) { animation: sparkle 2s ease-in-out 0.4s infinite; }
        .sparkles span:nth-child(3) { animation: sparkle 2s ease-in-out 0.8s infinite; }

        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .continue-btn {
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
          border: none;
          padding: 14px 28px;
          border-radius: 30px;
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.2rem;
          color: #be185d;
          cursor: pointer;
          box-shadow: 0 6px 25px rgba(236, 72, 153, 0.2);
          transition: all 0.3s ease;
          animation: fadeInBtn 0.5s ease-out forwards;
        }

        @keyframes fadeInBtn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .continue-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 35px rgba(236, 72, 153, 0.3);
        }

        @media (max-width: 480px) {
          .message-card {
            padding: 30px 20px;
          }

          .message-title {
            font-size: 1.8rem;
          }

          .typed-text {
            font-size: 1.1rem;
          }

          .message-card {
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}