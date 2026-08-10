'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoItem {
  url: string;
  caption: string;
}

interface Season {
  id: string;
  name: string;
  emoji: string;
  photos: PhotoItem[];
}

const seasons: Season[] = [
  {
    id: 'summer',
    name: 'Лето',
    emoji: '☀️',
    photos: [
      { url: 'https://images.unsplash.com/photo-1529333166437-7752a1e5eb76?w=400&h=400&fit=crop', caption: 'Наши моменты' },
      { url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop', caption: 'Счастливые дни' },
      { url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop', caption: 'Вместе' },
      { url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&h=400&fit=crop', caption: 'Любимые' },
    ],
  },
  {
    id: 'autumn',
    name: 'Осень',
    emoji: '🍂',
    photos: [
      { url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=400&fit=crop', caption: 'Прогулки' },
      { url: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=400&h=400&fit=crop', caption: 'Объятия' },
      { url: 'https://images.unsplash.com/photo-1516731566880-919c39d23910?w=400&h=400&fit=crop', caption: 'Улыбки' },
      { url: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop', caption: 'Тепло' },
    ],
  },
  {
    id: 'winter',
    name: 'Зима',
    emoji: '❄️',
    photos: [
      { url: 'https://images.unsplash.com/photo-1518569003061-24dcea3116a2?w=400&h=400&fit=crop', caption: 'Зимние вечера' },
      { url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=400&fit=crop', caption: 'Рядом с тобой' },
      { url: 'https://images.unsplash.com/photo-1524261305457-5942e2be7d02?w=400&h=400&fit=crop', caption: 'Новый год' },
      { url: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=400&fit=crop', caption: 'Праздник' },
    ],
  },
  {
    id: 'spring',
    name: 'Весна',
    emoji: '🌸',
    photos: [
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop', caption: 'Весеннее тепло' },
      { url: 'https://images.unsplash.com/photo-1529333166437-7752a1e5eb76?w=400&h=400&fit=crop', caption: 'Цветы' },
      { url: 'https://images.unsplash.com/photo-1523482580672-f109ba8b9f90?w=400&h=400&fit=crop', caption: 'Прогулки' },
      { url: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=400&h=400&fit=crop', caption: 'Счастье' },
    ],
  },
];

export default function PhotoGallery({ onNext }: { onNext?: () => void }) {
  const [currentSeason, setCurrentSeason] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const season = seasons[currentSeason];

  const nextSeason = () => {
    setCurrentSeason((currentSeason + 1) % seasons.length);
  };

  const prevSeason = () => {
    setCurrentSeason((currentSeason - 1 + seasons.length) % seasons.length);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="gallery-page">
      <div className="gallery-card">
        <div className="header">
          <span className="emoji">{season.emoji}</span>
          <h1>{season.name}</h1>
        </div>

        <div className="photos-wrapper">
          <button className="nav-btn" onClick={prevSeason}>←</button>
          
          <div className="photos-area">
            <AnimatePresence mode="wait">
              <motion.div 
                className="photos-grid"
                key={season.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {season.photos.map((photo) => (
                  <div key={photo.url} className="photo-item" onClick={() => setSelectedPhoto(photo)}>
                    <div className="polaroid">
                      <div className="photo-placeholder"></div>
                      <p>{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button className="nav-btn" onClick={nextSeason}>→</button>
        </div>

        <div className="dots">
          {seasons.map((s, index) => (
            <button
              key={s.id}
              className={`dot ${currentSeason === index ? 'active' : ''}`}
              onClick={() => setCurrentSeason(index)}
            >
              {s.emoji}
            </button>
          ))}
        </div>

        {onNext && currentSeason === seasons.length - 1 && (
          <button className="continue-btn" onClick={onNext}>
            Продолжить 💕
          </button>
        )}
      </div>

      {selectedPhoto && (
        <div className="viewer" onClick={() => setSelectedPhoto(null)}>
          <div className="viewer-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPhoto(null)}>✕</button>
            <div className="viewer-photo"></div>
            <p className="viewer-caption">{selectedPhoto.caption}</p>
          </div>
        </div>
      )}

      <style>{`
        .gallery-page {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 100;
          background: linear-gradient(135deg, #fff5f7 0%, #ffeef2 50%, #fdf2f8 100%);
        }

        .gallery-card {
          background: #fff;
          border-radius: 12px;
          padding: 28px 20px;
          max-width: 480px;
          width: 100%;
          box-shadow: 0 15px 50px rgba(236, 72, 153, 0.1);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .emoji {
          font-size: 1.8rem;
        }

        h1 {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.8rem;
          color: #be185d;
          margin: 0;
        }

        .photos-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .photos-area {
          flex: 1;
        }

        .photos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          max-width: 100%;
        }

        .photo-item {
          cursor: pointer;
          display: flex;
          justify-content: center;
        }

        .polaroid {
          background: #fff;
          padding: 6px 6px 32px 6px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 130px;
        }

        .photo-item:nth-child(1) .polaroid { transform: rotate(-2deg); }
        .photo-item:nth-child(2) .polaroid { transform: rotate(1.5deg); }
        .photo-item:nth-child(3) .polaroid { transform: rotate(-1deg); }
        .photo-item:nth-child(4) .polaroid { transform: rotate(2deg); }

        .photo-item:hover .polaroid {
          transform: rotate(0deg) scale(1.03);
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        }

        .photo-placeholder {
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
        }

        .polaroid p {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 0.9rem;
          color: #444;
          text-align: center;
          margin: 0;
          padding-top: 10px;
          font-style: italic;
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fce7f3;
          border: none;
          font-size: 1.1rem;
          color: #be185d;
          cursor: pointer;
          flex-shrink: 0;
        }

        .nav-btn:hover {
          background: #fbcfe8;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #fce7f3;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .dot.active {
          border-color: #f9a8d4;
          box-shadow: 0 0 15px rgba(249, 168, 212, 0.5);
        }

        .continue-btn {
          display: block;
          margin: 20px auto 0;
          background: #fce7f3;
          border: none;
          padding: 12px 28px;
          border-radius: 25px;
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.2rem;
          color: #be185d;
          cursor: pointer;
        }

        .viewer {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .viewer-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .viewer-content img,
        .viewer-photo {
          max-width: 100%;
          max-height: 85vh;
          border-radius: 8px;
        }

        .viewer-photo {
          width: 70vh;
          max-width: 90vw;
          aspect-ratio: 1;
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
        }

        .close-btn {
          position: absolute;
          top: -45px;
          right: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .viewer-caption {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.1rem;
          color: white;
          text-align: center;
          margin-top: 15px;
        }

        @media (max-width: 480px) {
          .gallery-card {
            padding: 16px 10px;
          }

          .photos-grid {
            gap: 8px;
          }

          .polaroid {
            max-width: 110px;
            padding: 4px 4px 24px 4px;
          }

          .photo-placeholder {
            min-height: auto;
          }

          .polaroid p {
            font-size: 0.75rem;
            padding-top: 6px;
          }
        }
      `}</style>
    </div>
  );
}