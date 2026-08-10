'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticlesCanvas from './ParticlesCanvas';
import Confetti from './Confetti';

const emojiSet = ['❤️', '💕', '💖', '💗', '🌹', '💋', '💌', '✨'];

export default function LoveMessage({ onBack }: { onBack?: () => void }) {
  const [visible, setVisible] = useState(false);
  const [printedText, setPrintedText] = useState('');
  const [showHeart, setShowHeart] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const finalMessage = "Я люблю тебя. Спасибо за этот год. За каждый день. За всё.";

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < finalMessage.length) {
        setPrintedText(finalMessage.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowHeart(true), 800);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startDate = new Date('2025-08-30T00:00:00').getTime();

    const tick = () => {
      const diff = Date.now() - startDate;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Confetti count={80} />
      <ParticlesCanvas emojiSet={emojiSet} color="#f472b6" count={35} />

      <div className={`love-container ${visible ? 'visible' : ''}`}>
        <div className="love-card">
          <div className="hearts-row">
            <span>💕</span>
            <span>💖</span>
            <span>💕</span>
          </div>

          <h1 className="love-title">Для тебя, моя любимая</h1>

          <div className="heart-center">
            <span className="big-heart">❤️</span>
          </div>

          <div className="message-box">
            <p className="love-text">
              {printedText}
              <span className="cursor">|</span>
            </p>
          </div>

          {showHeart && (
            <div 
              className="final-hearts"
              style={{ animation: 'fadeIn 0.5s ease forwards' }}
            >
              <span>❤️</span>
              <span>💕</span>
              <span>❤️</span>
            </div>
          )}

          <div className="signature">
            <p>С любовью, навсегда</p>
            <p className="year">❤️ Наш 2024-2025 ❤️</p>
          </div>

          <div className="sparkles">
            <span>✨</span>
            <span>💖</span>
            <span>✨</span>
          </div>

          {showHeart && (
            <div
              style={{ width: '100%', animation: 'fadeIn 0.5s ease 0.3s forwards', opacity: 0 }}
            >
              <div className="timer">
                <span className="timer-label">Мы вместе уже</span>
                <span className="timer-value">
                  {timeLeft.days} дней {String(timeLeft.hours).padStart(2, '0')} часов {String(timeLeft.minutes).padStart(2, '0')} минут {String(timeLeft.seconds).padStart(2, '0')} секунд
                </span>
              </div>
            </div>
          )}

          {showHeart && onBack && (
            <div
              style={{ animation: 'fadeIn 0.5s ease 0.5s forwards', opacity: 0 }}
            >
              <button className="back-btn" onClick={onBack}>
                ← Наши моменты
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .love-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.8s ease;
          z-index: 100;
          background: linear-gradient(135deg, #fff5f7 0%, #ffeef2 50%, #fdf2f8 100%);
          overflow-y: auto;
        }

        .love-container.visible {
          opacity: 1;
        }

        .love-card {
          background: linear-gradient(145deg, #fff, #fef2f2);
          border-radius: 12px;
          padding: 40px 32px;
          max-width: 440px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(236, 72, 153, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          margin: auto;
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .love-title {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 2rem;
          font-weight: 700;
          color: #be185d;
          text-align: center;
        }

        .heart-center {
          display: flex;
          justify-content: center;
        }

        .big-heart {
          font-size: 5rem;
          display: block;
          animation: heartbeat 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(255, 100, 100, 0.5));
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.2); }
          30% { transform: scale(1); }
          45% { transform: scale(1.12); }
          60% { transform: scale(1); }
        }

        .message-box {
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
          padding: 24px;
          border-radius: 12px;
          text-align: center;
          width: 100%;
        }

        .love-text {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.4rem;
          color: #831843;
          line-height: 1.5;
          font-weight: 500;
        }

        .cursor {
          animation: blink 0.8s ease-in-out infinite;
          color: #ec4899;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .final-hearts {
          display: flex;
          gap: 12px;
          font-size: 2rem;
        }

        .final-hearts span:nth-child(1) { animation: heartPulse 1.5s ease-in-out infinite; }
        .final-hearts span:nth-child(2) { animation: heartPulse 1.5s ease-in-out 0.25s infinite; }
        .final-hearts span:nth-child(3) { animation: heartPulse 1.5s ease-in-out 0.5s infinite; }

        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        .signature {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .signature p {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.3rem;
          color: #9f1239;
        }

        .year {
          font-size: 1rem !important;
          color: #be185d !important;
          opacity: 0.8;
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

        .timer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          width: 100%;
          padding: 16px 0;
          border-top: 1px solid rgba(190, 24, 93, 0.12);
          border-bottom: 1px solid rgba(190, 24, 93, 0.12);
        }

        .timer-label {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1rem;
          color: #be185d;
          opacity: 0.7;
        }

        .timer-value {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.2rem;
          font-weight: 700;
          color: #be185d;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .back-btn {
          background: #fce7f3;
          border: none;
          padding: 10px 28px;
          border-radius: 25px;
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.1rem;
          color: #be185d;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.15);
          transition: all 0.2s;
        }

        .back-btn:hover {
          box-shadow: 0 6px 25px rgba(236, 72, 153, 0.25);
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .love-card {
            padding: 30px 20px;
            gap: 20px;
          }

          .love-title {
            font-size: 1.6rem;
          }

          .big-heart {
            font-size: 4rem;
          }

          .message-box {
            padding: 18px;
          }

          .love-text {
            font-size: 1.2rem;
          }

          .signature p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}