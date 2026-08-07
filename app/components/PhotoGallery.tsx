'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface PhotoItem {
  url: string;
  caption: string;
}

interface Season {
  id: string;
  name: string;
  emoji: string;
  accentColor: string;
  background: string;
  decorations: string[];
  photos: PhotoItem[];
  particleColor: string;
}

const seasons: Season[] = [
  {
    id: 'spring',
    name: 'Весна',
    emoji: '🌸',
    accentColor: '#f9a8d4',
    background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
    decorations: ['🌸', '🌷', '🌺'],
    particleColor: '#f9a8d4',
    photos: [
      { url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop', caption: 'Первые цветы...' },
      { url: 'https://images.unsplash.com/photo-1518882605630-8a6c87889c28?w=400&h=400&fit=crop', caption: 'Тёплый ветер...' },
      { url: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', caption: 'Прогулки вдвоём...' },
      { url: 'https://images.unsplash.com/photo-1462275646964-a0e3571f4f74?w=400&h=400&fit=crop', caption: 'Сакура...' },
    ],
  },
  {
    id: 'summer',
    name: 'Лето',
    emoji: '☀️',
    accentColor: '#86efac',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
    decorations: ['🌿', '🍃', '🌴'],
    particleColor: '#86efac',
    photos: [
      { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop', caption: 'Лесные тропы...' },
      { url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop', caption: 'Свежий воздух...' },
      { url: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&h=400&fit=crop', caption: 'Утренний туман...' },
      { url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=400&h=400&fit=crop', caption: 'Закаты...' },
    ],
  },
  {
    id: 'autumn',
    name: 'Осень',
    emoji: '🍂',
    accentColor: '#fb923c',
    background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)',
    decorations: ['🍂', '🍁', '🍃'],
    particleColor: '#fb923c',
    photos: [
      { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', caption: 'Золотые листья...' },
      { url: 'https://images.unsplash.com/photo-1476600149028-4ef929da6b2e?w=400&h=400&fit=crop', caption: 'Уютные дни...' },
      { url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=400&fit=crop', caption: 'Город в дыму...' },
      { url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=400&fit=crop', caption: 'Ожидание зимы...' },
    ],
  },
  {
    id: 'winter',
    name: 'Зима',
    emoji: '❄️',
    accentColor: '#7dd3fc',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
    decorations: ['❄️', '✨', '🌨️'],
    particleColor: '#7dd3fc',
    photos: [
      { url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=400&fit=crop', caption: 'Первый снег...' },
      { url: 'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=400&h=400&fit=crop', caption: 'Тёплые объятия...' },
      { url: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&h=400&fit=crop', caption: 'Ночной город...' },
      { url: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=400&h=400&fit=crop', caption: 'Новогодняя сказка...' },
    ],
  },
];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: 'snowflake' | 'leaf';
}

export default function PhotoGallery({ onSeasonChange }: { onSeasonChange?: (bg: string) => void }) {
  const [currentSeason, setCurrentSeason] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const touchStartX = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const touchStartY = useRef(0);

  const season = seasons[currentSeason];

  useEffect(() => {
    if (onSeasonChange) {
      onSeasonChange(season.background);
    }
  }, [season.background, onSeasonChange]);

  const drawSnowflake = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, opacity: number, color: string) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';

    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 * Math.PI) / 180;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
      ctx.stroke();

      for (let j = 1; j <= 3; j++) {
        const branchPos = size * j / 4;
        const branchAngle1 = angle + Math.PI / 6;
        const branchAngle2 = angle - Math.PI / 6;
        const branchLen = size / 4;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * branchPos, Math.sin(angle) * branchPos);
        ctx.lineTo(Math.cos(branchAngle1) * branchLen + Math.cos(angle) * branchPos, Math.sin(branchAngle1) * branchLen + Math.sin(angle) * branchPos);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * branchPos, Math.sin(angle) * branchPos);
        ctx.lineTo(Math.cos(branchAngle2) * branchLen + Math.cos(angle) * branchPos, Math.sin(branchAngle2) * branchLen + Math.sin(angle) * branchPos);
        ctx.stroke();
      }
    }

    ctx.restore();
  };

  const drawLeaf = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, opacity: number, color: string) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.bezierCurveTo(size * 0.8, -size * 0.5, size * 0.8, size * 0.5, 0, size);
    ctx.bezierCurveTo(-size * 0.8, size * 0.5, -size * 0.8, -size * 0.5, 0, -size);
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.8);
    ctx.lineTo(0, size * 0.8);
    ctx.stroke();
    ctx.restore();
  };

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particles: Particle[] = [];
    const count = 50;

    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.5 ? 'snowflake' : 'leaf';
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 3,
        opacity: Math.random() * 0.5 + 0.3,
        type,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    initParticles();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > h + 20) {
          p.y = -20;
          p.x = Math.random() * w;
        }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        if (p.type === 'snowflake') {
          drawSnowflake(ctx, p.x, p.y, p.size, p.rotation, p.opacity, season.particleColor);
        } else {
          drawLeaf(ctx, p.x, p.y, p.size, p.rotation, p.opacity, season.particleColor);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [season.id, season.particleColor, initParticles]);

  const changeSeason = (newIndex: number, direction: 'left' | 'right') => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideDirection(direction);

    setTimeout(() => {
      setCurrentSeason(newIndex);
      setIsSliding(false);
      setSlideDirection(null);
    }, 400);
  };

  const nextSeason = () => {
    const newIndex = (currentSeason + 1) % seasons.length;
    changeSeason(newIndex, 'left');
  };

  const prevSeason = () => {
    const newIndex = (currentSeason - 1 + seasons.length) % seasons.length;
    changeSeason(newIndex, 'right');
  };

  const goToSeason = (index: number) => {
    if (index === currentSeason || isSliding) return;
    const direction = index > currentSeason ? 'left' : 'right';
    changeSeason(index, direction);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = Math.abs(touchStartY.current - touchEndY);

    if (diffY > 50 && diffY > Math.abs(diffX)) {
      return;
    }

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSeason();
      } else {
        prevSeason();
      }
    }
  };

  return (
    <div className="gallery" ref={containerRef}>
      <canvas ref={canvasRef} className="particle-canvas" />

      <div className="scene-layer decorations-bg">
        <div className="deco-cluster left-top">
          {season.decorations.map((emoji, i) => (
            <span key={i} style={{ fontSize: `${2 + i * 0.5}rem`, opacity: 0.08 + i * 0.02 }}>
              {emoji}
            </span>
          ))}
        </div>
        <div className="deco-cluster right-bottom">
          {season.decorations.map((emoji, i) => (
            <span key={i + 10} style={{ fontSize: `${2.5 - i * 0.4}rem`, opacity: 0.08 + i * 0.02 }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>

      <div className="season-indicator" style={{ background: season.accentColor + '30' }}>
        <span className="season-emoji">{season.emoji}</span>
        <span className="season-name">{season.name}</span>
      </div>

      <div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={prevSeason} className="carousel-btn prev" aria-label="Предыдущий">
          ←
        </button>

        <div className={`photos-container ${isSliding ? `slide-${slideDirection}` : ''}`}>
          <div className="decorations-left">
            {season.decorations.map((emoji, i) => (
              <span
                key={i}
                className="decoration decoration-left"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  fontSize: `${1.5 + i * 0.4}rem`
                }}
              >
                {emoji}
              </span>
            ))}
          </div>

          <div className="photos-area">
            <div className="photos-grid">
              {season.photos.map((photo, index) => (
                <div
                  key={index}
                  className="photo-item"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="polaroid-frame" style={{ '--accent': season.accentColor } as React.CSSProperties}>
                    <div className="polaroid-photo">
                      <img src={photo.url} alt={photo.caption} />
                    </div>
                    <div className="polaroid-bottom">
                      <span className="polaroid-caption">{photo.caption}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="decorations-right">
            {season.decorations.map((emoji, i) => (
              <span
                key={i + 10}
                className="decoration decoration-right"
                style={{
                  animationDelay: `${i * 0.25}s`,
                  fontSize: `${1.6 - i * 0.3}rem`
                }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>

        <button onClick={nextSeason} className="carousel-btn next" aria-label="Следующий">
          →
        </button>
      </div>

      <div className="scene-layer decorations-bottom">
        <span style={{ fontSize: '1.2rem', opacity: 0.06 }}>{season.decorations[0]}</span>
        <span style={{ fontSize: '1.5rem', opacity: 0.08 }}>{season.decorations[1]}</span>
        <span style={{ fontSize: '1rem', opacity: 0.05 }}>{season.decorations[2]}</span>
      </div>

      <div className="season-dots">
        {seasons.map((s, index) => (
          <button
            key={s.id}
            className={`season-dot ${currentSeason === index ? 'active' : ''}`}
            onClick={() => goToSeason(index)}
            style={{
              '--accent': s.accentColor,
            } as React.CSSProperties}
            aria-label={s.name}
          >
            <span className="dot-emoji">{s.emoji}</span>
          </button>
        ))}
      </div>

      <style jsx>{`
        .gallery {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 20px;
          min-height: 100vh;
          position: relative;
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .particle-canvas {
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

        .decorations-bg {
          inset: 0;
        }

        .deco-cluster {
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .deco-cluster.left-top {
          left: 3%;
          top: 15%;
          transform: rotate(-8deg);
        }

        .deco-cluster.right-bottom {
          right: 3%;
          bottom: 20%;
          transform: rotate(5deg);
        }

        .decorations-bottom {
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 25px;
        }

        .season-indicator {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 32px;
          border-radius: 50px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          z-index: 10;
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes bounceIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .season-emoji {
          font-size: 2.2rem;
          animation: wiggle 2s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        .season-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #5a4a42;
          letter-spacing: 0.02em;
        }

        .carousel-wrapper {
          display: flex;
          align-items: center;
          gap: 20px;
          width: 100%;
          max-width: 950px;
          z-index: 10;
        }

        .carousel-btn {
          font-size: 2rem;
          background: rgba(255,255,255,0.9);
          border: none;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          cursor: pointer;
          color: #6b5b4f;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          flex-shrink: 0;
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }

        .carousel-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 40px rgba(0,0,0,0.2);
          background: #fff;
        }

        .carousel-btn:active {
          transform: scale(0.95);
        }

        .photos-container {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .decorations-left, .decorations-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .decoration {
          opacity: 0.6;
          animation: growIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .decorations-left .decoration:nth-child(1) { animation-delay: 0.1s; }
        .decorations-left .decoration:nth-child(2) { animation-delay: 0.3s; }
        .decorations-left .decoration:nth-child(3) { animation-delay: 0.5s; }

        .decorations-right .decoration:nth-child(1) { animation-delay: 0.15s; }
        .decorations-right .decoration:nth-child(2) { animation-delay: 0.35s; }
        .decorations-right .decoration:nth-child(3) { animation-delay: 0.55s; }

        @keyframes growIn {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); }
          100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
        }

        .photos-area {
          flex: 1;
          padding: 20px;
          background: rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          box-shadow: 
            0 20px 60px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.5);
        }

        .photos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .photo-item {
          display: flex;
          justify-content: center;
          animation: photoIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        @keyframes photoIn {
          from { opacity: 0; transform: scale(0.7) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .polaroid-frame {
          width: 100%;
          max-width: 160px;
          background: #fff;
          padding: 10px 10px 32px 10px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          transform: rotate(-3deg);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
        }

        .photo-item:nth-child(even) .polaroid-frame {
          transform: rotate(2deg);
        }

        .photo-item:nth-child(3n) .polaroid-frame {
          transform: rotate(-1deg);
        }

        .photo-item:nth-child(4n) .polaroid-frame {
          transform: rotate(3deg);
        }

        .polaroid-frame:hover {
          transform: rotate(0deg) scale(1.08);
          box-shadow: 0 20px 50px rgba(0,0,0,0.18);
        }

        .polaroid-photo {
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
          background: #f0f0f0;
        }

        .polaroid-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .polaroid-bottom {
          position: absolute;
          bottom: 6px;
          left: 0;
          right: 0;
          text-align: center;
        }

        .polaroid-caption {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.7rem;
          color: #999;
          font-style: italic;
        }

        .season-dots {
          display: flex;
          justify-content: center;
          gap: 16px;
          z-index: 10;
          padding-bottom: 40px;
        }

        .season-dot {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          border: 3px solid rgba(255,255,255,0.6);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          opacity: 0.6;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .season-dot:hover {
          opacity: 0.9;
          transform: scale(1.15);
          border-color: rgba(255,255,255,0.9);
        }

        .season-dot.active {
          opacity: 1;
          transform: scale(1.25);
          border-color: var(--accent);
          box-shadow: 0 0 25px var(--accent), 0 4px 15px rgba(0,0,0,0.15);
        }

        .dot-emoji {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}