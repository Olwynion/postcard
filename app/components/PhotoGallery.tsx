'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const touchStartX = useRef(0);
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
    ctx.restore();
  };

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particles: Particle[] = [];
    const count = 20;

    for (let i = 0; i < count; i++) {
      const type = Math.random() > 0.5 ? 'snowflake' : 'leaf';
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedY: Math.random() * 0.6 + 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        opacity: Math.random() * 0.2 + 0.08,
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

  const changeSeason = (newIndex: number) => {
    if (isTransitioning || newIndex === currentSeason) return;
    setIsTransitioning(true);
    initParticles();

    setTimeout(() => {
      setCurrentSeason(newIndex);
      setIsTransitioning(false);
    }, 400);
  };

  const nextSeason = () => {
    changeSeason((currentSeason + 1) % seasons.length);
  };

  const prevSeason = () => {
    changeSeason((currentSeason - 1 + seasons.length) % seasons.length);
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

    if (diffY > 50 && diffY > Math.abs(diffX)) return;
    if (Math.abs(diffX) > 50) {
      diffX > 0 ? nextSeason() : prevSeason();
    }
  };

  const decos = null;

  return (
    <div className="gallery">
      <canvas ref={canvasRef} className="particle-canvas" />

      <motion.div
        className="season-indicator"
        style={{ background: season.accentColor + '30' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        key={season.id}
      >
        <span className="season-emoji">{season.emoji}</span>
        <span className="season-name">{season.name}</span>
      </motion.div>

      <motion.div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        animate={{ opacity: isTransitioning ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={prevSeason}
          className="carousel-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={isTransitioning}
        >
          ←
        </motion.button>

        <div className="photos-container">
          <div className="photos-area">
            <AnimatePresence mode="wait">
              <motion.div
                className="photos-grid"
                key={season.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {season.photos.map((photo, index) => (
                  <motion.div
                    key={photo.url + season.id}
                    className="photo-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                    onClick={() => setSelectedPhoto(photo)}
                    whileHover={{ scale: 1.02 }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="polaroid-frame">
                      <div className="polaroid-photo">
                        <img src={photo.url} alt={photo.caption} />
                      </div>
                      <div className="polaroid-bottom">
                        <span className="polaroid-caption">{photo.caption}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          onClick={nextSeason}
          className="carousel-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={isTransitioning}
        >
          →
        </motion.button>
      </motion.div>

      <div className="season-dots">
        {seasons.map((s, index) => (
          <motion.button
            key={s.id}
            className={`season-dot ${currentSeason === index ? 'active' : ''}`}
            onClick={() => changeSeason(index)}
            style={{ '--accent': s.accentColor } as React.CSSProperties}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="dot-emoji">{s.emoji}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="photo-viewer-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="photo-viewer-close"
                onClick={() => setSelectedPhoto(null)}
              >
                ✕
              </button>
              <img
                src={selectedPhoto.url.replace('w=400&h=400', 'w=1200&h=1200')}
                alt={selectedPhoto.caption}
              />
              <div className="photo-viewer-caption">
                <span>{selectedPhoto.caption}</span>
                <span>{season.emoji} {season.name}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}