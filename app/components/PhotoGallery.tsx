'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HandFlower, HandTulip, HandCherry,
  HandLeaf, HandClover, HandPalm, HandSun,
  HandLeafOrange, HandMaple, HandMapleSmall,
  HandSnowflake, HandStar, HandSnowflakeSimple,
  HandButterfly, HandDaisy, HandMoon, HandNote, HandGift, HandSparkle,
  HandBird, HandSunset, HandFire, HandRain, HandCloudy
} from './hand-drawn/Decorations';

interface PhotoItem {
  url: string;
  caption: string;
}

interface Season {
  id: string;
  name: string;
  emoji: React.ReactNode;
  accentColor: string;
  background: string;
  decorations: React.ReactNode[];
  photos: PhotoItem[];
  particleColor: string;
}

const SpringDecorations = [
  <HandFlower key="flower" size={32} color="#f9a8d4" />,
  <HandTulip key="tulip" size={28} color="#ec4899" />,
  <HandCherry key="cherry" size={24} color="#f9a8d4" />
];

const SummerDecorations = [
  <HandLeaf key="leaf" size={32} color="#86efac" />,
  <HandClover key="clover" size={28} color="#22c55e" />,
  <HandPalm key="palm" size={24} color="#65a30d" />
];

const AutumnDecorations = [
  <HandLeafOrange key="leaf" size={32} color="#f97316" />,
  <HandMaple key="maple" size={28} color="#ea580c" />,
  <HandMapleSmall key="maple2" size={24} color="#dc2626" />
];

const WinterDecorations = [
  <HandSnowflake key="snow" size={32} color="#7dd3fc" />,
  <HandStar key="star" size={28} color="#fbbf24" />,
  <HandSnowflakeSimple key="snow2" size={24} color="#bae6fd" />
];

const seasons: Season[] = [
  {
    id: 'spring',
    name: 'Весна',
    emoji: <HandFlower size={32} color="#f9a8d4" />,
    accentColor: '#f9a8d4',
    background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
    decorations: SpringDecorations,
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
    emoji: <HandSun size={36} color="#fbbf24" />,
    accentColor: '#86efac',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
    decorations: SummerDecorations,
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
    emoji: <HandMaple size={32} color="#ea580c" />,
    accentColor: '#fb923c',
    background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)',
    decorations: AutumnDecorations,
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
    emoji: <HandSnowflake size={32} color="#7dd3fc" />,
    accentColor: '#7dd3fc',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
    decorations: WinterDecorations,
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

const GalleryDecos = {
  spring: {
    left: [<HandButterfly key="b" size={18} color="#a78bfa" />, <HandBird key="bi" size={14} color="#60a5fa" />],
    right: [<HandFlower key="f" size={18} color="#f9a8d4" />, <HandSparkle key="s" size={12} color="#fbbf24" />],
    bottom: [<HandBird key="bi" size={14} color="#60a5fa" />, <HandDaisy key="d" size={12} color="#fef3c7" />],
  },
  summer: {
    left: [<HandSun key="sun" size={20} color="#fbbf24" />, <HandLeaf key="l" size={14} color="#86efac" />],
    right: [<HandBird key="bi" size={18} color="#60a5fa" />, <HandFire key="fi" size={14} color="#f97316" />],
    bottom: [<HandSparkle key="s" size={14} color="#fef08a" />, <HandLeaf key="l2" size={12} color="#86efac" />],
  },
  autumn: {
    left: [<HandMaple key="m" size={18} color="#ea580c" />, <HandSunset key="su" size={14} color="#f97316" />],
    right: [<HandLeafOrange key="lo" size={18} color="#f97316" />, <HandNote key="n" size={14} color="#fef08a" />],
    bottom: [<HandMapleSmall key="ms" size={14} color="#dc2626" />, <HandSparkle key="s" size={12} color="#fbbf24" />],
  },
  winter: {
    left: [<HandSnowflake key="snow" size={18} color="#7dd3fc" />, <HandMoon key="moon" size={14} color="#fef08a" />],
    right: [<HandCloudy key="c" size={18} color="#d1d5db" />, <HandRain key="r" size={14} color="#7dd3fc" />],
    bottom: [<HandMoon key="moon2" size={14} color="#fef08a" />, <HandSnowflakeSimple key="s2" size={12} color="#bae6fd" />],
  },
};

export default function PhotoGallery({ onSeasonChange }: { onSeasonChange?: (bg: string) => void }) {
  const [currentSeason, setCurrentSeason] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  const decos = GalleryDecos[season.id as keyof typeof GalleryDecos];

  return (
    <div className="gallery">
      <canvas ref={canvasRef} className="particle-canvas" />
      
      <div className="gallery-deco">
        <div className="deco-left">{decos.left}</div>
        <div className="deco-right">{decos.right}</div>
        <div className="deco-bottom">{decos.bottom}</div>
      </div>

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
          <div className="decorations-left">
            {season.decorations.map((deco, i) => (
              <span key={i} className="decoration" style={{ fontSize: `${1.3 + i * 0.25}rem` }}>
                {deco}
              </span>
            ))}
          </div>

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

          <div className="decorations-right">
            {season.decorations.map((deco, i) => (
              <span key={i + 10} className="decoration" style={{ fontSize: `${1.35 - i * 0.15}rem` }}>
                {deco}
              </span>
            ))}
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
    </div>
  );
}