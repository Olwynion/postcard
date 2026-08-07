'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
  type: 'sparkle' | 'confetti';
  rotation: number;
  rotationSpeed: number;
}

export default function Card({ onOpen }: { onOpen: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [showTap, setShowTap] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas.width, canvas.height));
    }

    function createParticle(w: number, h: number): Particle {
      const isSparkle = Math.random() > 0.4;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        size: isSparkle ? Math.random() * 3 + 1 : Math.random() * 6 + 3,
        speedX: isSparkle ? (Math.random() - 0.5) * 0.4 : (Math.random() - 0.5) * 1.2,
        speedY: isSparkle ? (Math.random() - 0.5) * 0.4 : Math.random() * 0.6 + 0.2,
        opacity: Math.random() * 0.6 + 0.4,
        hue: Math.random() * 40 + 330,
        type: isSparkle ? 'sparkle' : 'confetti',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.06,
      };
    }

    let animationId: number;
    let gradientHue = 340;

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      const bgGradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7);
      bgGradient.addColorStop(0, `hsl(${gradientHue}, 30%, 20%)`);
      bgGradient.addColorStop(1, `hsl(${gradientHue + 20}, 35%, 10%)`);
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, w, h);

      gradientHue = (gradientHue + 0.03) % 360;

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.opacity = Math.max(0, p.opacity - 0.0008);

        if (p.y > h + 20) {
          p.y = -20;
          p.x = Math.random() * w;
          p.opacity = Math.random() * 0.6 + 0.4;
        }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'sparkle') {
          const sparkleGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
          sparkleGradient.addColorStop(0, `hsla(${p.hue}, 100%, 95%, 1)`);
          sparkleGradient.addColorStop(0.5, `hsla(${p.hue}, 100%, 75%, 0.6)`);
          sparkleGradient.addColorStop(1, `hsla(${p.hue}, 100%, 60%, 0)`);
          ctx.fillStyle = sparkleGradient;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = `hsla(${p.hue}, 100%, 85%, 0.9)`;
          ctx.lineWidth = 0.5;
          for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos((i * Math.PI) / 2) * p.size * 2.5, Math.sin((i * Math.PI) / 2) * p.size * 2.5);
            ctx.stroke();
          }
        } else {
          ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, 0.8)`;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        }

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleClick = () => {
    if (isClosing) return;
    setShowTap(false);
    setIsClosing(true);
    setTimeout(onOpen, 700);
  };

  return (
    <div className={`card-container ${isClosing ? 'closing' : ''}`} onClick={handleClick}>
      <canvas ref={canvasRef} className="card-canvas" />

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
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-container.closing {
          opacity: 0;
          transform: scale(1.15);
        }

        .card-canvas {
          position: absolute;
          inset: 0;
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
          color: #fff;
          margin-bottom: 16px;
          text-shadow: 0 4px 30px rgba(0,0,0,0.4);
        }

        .card-subtitle {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: clamp(1.4rem, 4vw, 1.8rem);
          color: rgba(255, 255, 255, 0.9);
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
      `}</style>
    </div>
  );
}