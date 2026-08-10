'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesCanvas from './ParticlesCanvas';

const emojiSet = ['💕', '✨', '💖', '🌸', '❤️', '💗'];

export default function Card({ onOpen }: { onOpen: () => void }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(onOpen, 700);
  };

  return (
    <div className={`card-container ${isClosing ? 'closing' : ''}`} onClick={handleClick}>
      <ParticlesCanvas emojiSet={emojiSet} color="#f9a8d4" count={50} />

      <div className="card-content">
        <div className="hearts-row">
          <span className="floating-heart left">💕</span>
          <span className="main-heart">❤️</span>
          <span className="floating-heart right">💕</span>
        </div>

        <div className="card-text">
          <h1 className="card-title">Наш первый год вместе</h1>
          <p className="card-subtitle">Коснись, чтобы открыть</p>
        </div>

        <div className="sparkles">
          <span>✨</span>
          <span>💖</span>
          <span>✨</span>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 200;
          background: linear-gradient(135deg, #fff5f7 0%, #ffeef2 50%, #fdf2f8 100%);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-container.closing {
          opacity: 0;
          transform: scale(1.15);
        }

        .card-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .hearts-row {
          display: flex;
          align-items: center;
          gap: 20px;
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .floating-heart {
          font-size: clamp(30px, 8vw, 50px);
          animation: floatHeart 3s ease-in-out infinite;
        }

        .floating-heart.left {
          animation-delay: 0.5s;
        }

        .floating-heart.right {
          animation-delay: 1s;
        }

        @keyframes floatHeart {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        .main-heart {
          font-size: clamp(80px, 22vw, 150px);
          display: block;
          animation: heartbeat 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 30px rgba(255, 100, 100, 0.5));
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.15); }
          30% { transform: scale(1); }
          45% { transform: scale(1.1); }
          60% { transform: scale(1); }
        }

        .card-text {
          text-align: center;
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards;
          opacity: 0;
        }

        .card-title {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: clamp(2.2rem, 7vw, 4rem);
          font-weight: 700;
          color: #be185d;
          margin-bottom: 16px;
          text-shadow: 0 4px 30px rgba(236, 72, 153, 0.2);
        }

        .card-subtitle {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: clamp(1.4rem, 4vw, 1.8rem);
          color: #9f1239;
          letter-spacing: 0.08em;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }

        .sparkles {
          display: flex;
          gap: 16px;
          font-size: 1.5rem;
          animation: fadeInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
          opacity: 0;
        }

        .sparkles span:nth-child(1) { animation: sparkle 2s ease-in-out infinite; }
        .sparkles span:nth-child(2) { animation: sparkle 2s ease-in-out 0.3s infinite; }
        .sparkles span:nth-child(3) { animation: sparkle 2s ease-in-out 0.6s infinite; }

        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @media (max-width: 480px) {
          .hearts-row {
            gap: 12px;
          }

          .floating-heart {
            font-size: clamp(24px, 6vw, 40px);
          }

          .main-heart {
            font-size: clamp(70px, 28vw, 120px);
          }

          .sparkles {
            gap: 12px;
            font-size: 1.2rem;
          }

          .card-title {
            margin-bottom: 12px;
          }
        }
      `}</style>
    </div>
  );
}