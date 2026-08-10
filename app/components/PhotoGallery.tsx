'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface MediaItem {
  type: 'photo' | 'video';
  caption: string;
  emoji: string;
  gradient: string;
}

interface TimelineEvent {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  emoji: string;
  media: MediaItem[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1', date: '2025-08-10', displayDate: '10 авг 2025', title: 'Первая встреча', emoji: '👀',
    media: [
      { type: 'photo', caption: 'Тот самый день, когда мы встретились', emoji: '☕', gradient: 'linear-gradient(135deg, #fce7f3, #fbcfe8)' },
      { type: 'photo', caption: 'Наша первая фотка вместе', emoji: '📸', gradient: 'linear-gradient(135deg, #fef3c7, #fde68a)' },
    ],
  },
  {
    id: '2', date: '2025-08-17', displayDate: '17 авг 2025', title: 'Первое предложение', emoji: '💍',
    media: [
      { type: 'photo', caption: 'Он сказал "давай попробуем"', emoji: '💍', gradient: 'linear-gradient(135deg, #ede9fe, #c4b5fd)' },
    ],
  },
  {
    id: '3', date: '2025-08-30', displayDate: '30 авг 2025', title: 'Начало отношений', emoji: '❤️',
    media: [
      { type: 'photo', caption: 'Официально вместе', emoji: '❤️', gradient: 'linear-gradient(135deg, #fecaca, #fca5a5)' },
      { type: 'video', caption: 'Наше первое видео', emoji: '🎥', gradient: 'linear-gradient(135deg, #e0e7ff, #a5b4fc)' },
    ],
  },
  {
    id: '4', date: '2025-09-30', displayDate: '30 сен 2025', title: 'Первый месяц', emoji: '💕',
    media: [
      { type: 'photo', caption: 'Уже месяц вместе', emoji: '💕', gradient: 'linear-gradient(135deg, #fce7f3, #f9a8d4)' },
    ],
  },
  {
    id: '5', date: '2025-10-06', displayDate: '6 окт 2025', title: 'Твой день рождения', emoji: '🎂',
    media: [
      { type: 'photo', caption: 'С днём рождения, любимая!', emoji: '🎂', gradient: 'linear-gradient(135deg, #fef3c7, #fbbf24)' },
      { type: 'video', caption: 'Тортик и свечки', emoji: '🕯️', gradient: 'linear-gradient(135deg, #fce7f3, #f472b6)' },
    ],
  },
  {
    id: '6', date: '2025-10-11', displayDate: '11 окт 2025', title: 'Первый концерт', emoji: '🎵',
    media: [
      { type: 'photo', caption: 'Наш первый концерт', emoji: '🎵', gradient: 'linear-gradient(135deg, #dbeafe, #60a5fa)' },
    ],
  },
  {
    id: '7', date: '2025-10-14', displayDate: '14 окт 2025', title: 'Маленькая мечта', emoji: '✨',
    media: [
      { type: 'photo', caption: 'Наша маленькая мечта', emoji: '✨', gradient: 'linear-gradient(135deg, #f3e8ff, #c084fc)' },
    ],
  },
  {
    id: '8', date: '2025-11-22', displayDate: '22 ноя 2025', title: 'Первая поездка', emoji: '✈️',
    media: [
      { type: 'photo', caption: 'Путешествие началось', emoji: '✈️', gradient: 'linear-gradient(135deg, #e0f2fe, #38bdf8)' },
    ],
  },
  {
    id: '9', date: '2025-12-30', displayDate: '30 дек 2025 - 1 янв 2026', title: 'Новый год', emoji: '🎆',
    media: [
      { type: 'photo', caption: 'Новый год вместе', emoji: '🎆', gradient: 'linear-gradient(135deg, #fce7f3, #f472b6)' },
      { type: 'video', caption: 'Фейерверки', emoji: '🎇', gradient: 'linear-gradient(135deg, #ede9fe, #8b5cf6)' },
    ],
  },
  {
    id: '10', date: '2026-01-25', displayDate: '25 янв 2026', title: 'Новогодняя Москва', emoji: '🏙️',
    media: [
      { type: 'photo', caption: 'Гуляли по Москве', emoji: '🏙️', gradient: 'linear-gradient(135deg, #dbeafe, #3b82f6)' },
    ],
  },
  {
    id: '11', date: '2026-02-28', displayDate: '28 фев 2026', title: '6 месяцев', emoji: '💖',
    media: [
      { type: 'photo', caption: 'Полгода любви', emoji: '💖', gradient: 'linear-gradient(135deg, #fce7f3, #ec4899)' },
    ],
  },
  {
    id: '12', date: '2026-02-28', displayDate: '28 фев - 12 май 2026', title: 'Микс', emoji: '📸',
    media: [
      { type: 'photo', caption: 'Наши лучшие моменты', emoji: '📸', gradient: 'linear-gradient(135deg, #fef3c7, #f59e0b)' },
      { type: 'video', caption: 'Короткое видео', emoji: '🎬', gradient: 'linear-gradient(135deg, #e0e7ff, #6366f1)' },
    ],
  },
  {
    id: '13', date: '2026-05-12', displayDate: '12 май 2026', title: 'Мой ДР', emoji: '🎉',
    media: [
      { type: 'photo', caption: 'Мой день рождения', emoji: '🎉', gradient: 'linear-gradient(135deg, #fce7f3, #f9a8d4)' },
    ],
  },
  {
    id: '14', date: '2026-05-30', displayDate: '30 май 2026', title: '9 месяцев', emoji: '💗',
    media: [
      { type: 'photo', caption: '9 месяцев счастья', emoji: '💗', gradient: 'linear-gradient(135deg, #fecaca, #fb7185)' },
    ],
  },
  {
    id: '15', date: '2026-06-01', displayDate: '1 июн 2026', title: 'Наше совместное лето', emoji: '☀️',
    media: [
      { type: 'photo', caption: 'Лето — это мы', emoji: '☀️', gradient: 'linear-gradient(135deg, #fef9c3, #eab308)' },
      { type: 'video', caption: 'Летние деньки', emoji: '🌻', gradient: 'linear-gradient(135deg, #dcfce7, #22c55e)' },
    ],
  },
];

function TimelineItem({ event, index, onClick }: { event: TimelineEvent; index: number; onClick: (e: TimelineEvent) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onClick={() => onClick(event)}
    >
      <div className="timeline-dot">
        <span>{event.emoji}</span>
      </div>
      <div className="timeline-content">
        <span className="timeline-date">{event.displayDate}</span>
        <span className="timeline-title">{event.title}</span>
      </div>
    </motion.div>
  );
}

export default function PhotoGallery({ onNext }: { onNext?: () => void }) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [fullscreenMedia, setFullscreenMedia] = useState<MediaItem | null>(null);
  const [mounted, setMounted] = useState(false);
  
  const particles = ['💕', '💗', '💖', '✨', '🌸', '💫'];
  const timelineEmojis = ['💕', '💗', '✨', '🌸', '💖', '🌷', '💫', '💝', '🌺', '⭐', '💞', '🌹', '💜', '🦋', '🌟'];
  const [particlesList, setParticlesList] = useState<{ id: number; emoji: string; left: number; delay: number; duration: number }[]>([]);

  const [showContinue, setShowContinue] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      emoji: particles[Math.floor(Math.random() * particles.length)],
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
    }));
    setParticlesList(newParticles);
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContinue(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setCurrentMediaIndex(0);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  const nextMedia = () => {
    if (!selectedEvent) return;
    setCurrentMediaIndex((prev) => (prev + 1) % selectedEvent.media.length);
  };

  const prevMedia = () => {
    if (!selectedEvent) return;
    setCurrentMediaIndex((prev) => (prev - 1 + selectedEvent.media.length) % selectedEvent.media.length);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="timeline-page">
      <div className="particles-container">
        {particlesList.map((p) => (
          <span
            key={p.id}
            className="falling-particle"
            style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }}
          >
            {p.emoji}
          </span>
        ))}
      </div>
      <div className="timeline-bg-decoration">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <span className="sparkle">✨</span>
        <span className="sparkle">💕</span>
        <span className="sparkle">💗</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">💕</span>
        <span className="sparkle">💖</span>
      </div>
      <div className="timeline-header">
        <span className="emoji">📅</span>
        <h1>Наша история любви 💕</h1>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-hearts">
          {timelineEmojis.map((emoji, i) => (
            <span key={i} className="timeline-emoji" style={{ animationDelay: `${i * 0.15}s` }}>
              {emoji}
            </span>
          ))}
        </div>
        {timelineEvents.map((event, index) => (
          <TimelineItem key={event.id} event={event} index={index} onClick={handleEventClick} />
        ))}
        <div ref={sentinelRef} style={{ height: '1px' }} />
      </div>

      {onNext && showContinue && (
        <motion.button 
          className="continue-btn" 
          onClick={onNext}
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          transition={{ duration: 0.3 }}
        >
          Продолжить 💕
        </motion.button>
      )}

      <AnimatePresence>
        {fullscreenMedia && selectedEvent && (
          <motion.div
            className="fullscreen-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenMedia(null)}
          >
            <button className="fullscreen-close" onClick={() => setFullscreenMedia(null)}>✕</button>
            <motion.div
              className="fullscreen-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="fullscreen-media" style={{ background: fullscreenMedia.gradient }}>
                <span style={{ fontSize: '6rem' }}>{fullscreenMedia.emoji}</span>
                {fullscreenMedia.type === 'video' && (
                  <span className="fullscreen-play">▶</span>
                )}
              </div>
              <p className="fullscreen-caption">{fullscreenMedia.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="event-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="event-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="event-close" onClick={handleClose}>✕</button>

              <div className="event-header">
                <span className="event-emoji">{selectedEvent.emoji}</span>
                <h2>{selectedEvent.title}</h2>
                <span className="event-date">{selectedEvent.displayDate}</span>
              </div>

              {selectedEvent.media.length > 0 && (
                <div className="media-section">
                  <div className="media-main">
                    {selectedEvent.media.length > 1 && (
                      <button className="media-nav media-prev" onClick={prevMedia}>‹</button>
                    )}
                    <div
                      className="media-display"
                      style={{ background: selectedEvent.media[currentMediaIndex].gradient }}
                      onClick={() => setFullscreenMedia(selectedEvent.media[currentMediaIndex])}
                    >
                      <span className="media-emoji">{selectedEvent.media[currentMediaIndex].emoji}</span>
                      {selectedEvent.media[currentMediaIndex].type === 'video' && (
                        <span className="media-play-icon">▶</span>
                      )}
                      <span className="media-expand">⛶</span>
                    </div>
                    {selectedEvent.media.length > 1 && (
                      <button className="media-nav media-next" onClick={nextMedia}>›</button>
                    )}
                  </div>

                  <p className="media-caption">{selectedEvent.media[currentMediaIndex].caption}</p>

                  {selectedEvent.media.length > 1 && (
                    <div className="media-dots">
                      {selectedEvent.media.map((_, i) => (
                        <button
                          key={i}
                          className={`media-dot${i === currentMediaIndex ? ' active' : ''}`}
                          onClick={() => setCurrentMediaIndex(i)}
                        >
                          {selectedEvent.media[i].type === 'video' ? '▶' : ''}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

<style>{`
        .timeline-page {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          z-index: 100;
          background: linear-gradient(135deg, #fff5f7 0%, #ffeef2 50%, #fdf2f8 100%);
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
          overflow-y: auto;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .timeline-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background: 
            linear-gradient(135deg, rgba(255,182,193,0.3) 0%, transparent 50%),
            linear-gradient(225deg, rgba(255,192,203,0.3) 0%, transparent 50%);
          background-size: 200% 200%;
          animation: gradientOverlay 10s ease infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes gradientOverlay {
          0% { background-position: 0% 0%; opacity: 0.5; }
          50% { background-position: 100% 100%; opacity: 0.8; }
          100% { background-position: 0% 0%; opacity: 0.5; }
        }

        .timeline-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding-top: 20px;
        }

        .timeline-header .emoji {
          font-size: 1.8rem;
        }

        .particles-container {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .falling-particle {
          position: absolute;
          top: -30px;
          font-size: 1.2rem;
          opacity: 0.6;
          animation: fall linear infinite;
          text-shadow: 0 0 10px rgba(249,168,212,0.5);
        }

        @keyframes fall {
          0% {
            top: -30px;
            transform: rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            top: 100vh;
            transform: rotate(360deg) translateX(20px);
            opacity: 0;
          }
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
          max-width: 400px;
          padding-bottom: 100px;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 34px;
          bottom: 134px;
          width: 3px;
          background: linear-gradient(180deg, #f9a8d4, #fbcfe8);
          transform: translateX(-50%);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(249, 168, 212, 0.4);
          z-index: 1;
        }

        .timeline-hearts {
          position: absolute;
          left: 50%;
          top: 34px;
          bottom: 134px;
          width: 60px;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          pointer-events: none;
          z-index: 2;
        }

        .timeline-emoji {
          font-size: 0.8rem;
          animation: pulse 2.5s ease-in-out infinite;
          text-shadow: 0 0 8px rgba(249,168,212,0.8);
          filter: drop-shadow(0 0 3px rgba(249,168,212,0.5));
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        .timeline-bg-decoration {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(249,168,212,0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(244,114,182,0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(236,72,153,0.08) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .timeline-bg-decoration::before,
        .timeline-bg-decoration::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .timeline-bg-decoration::before {
          width: 300px;
          height: 300px;
          top: 10%;
          left: -100px;
          background: radial-gradient(circle, rgba(249,168,212,0.2) 0%, transparent 70%);
        }

        .timeline-bg-decoration::after {
          width: 250px;
          height: 250px;
          bottom: 20%;
          right: -80px;
          background: radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%);
          animation-delay: -4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251,207,232,0.2) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }

        .bg-circle-1 {
          width: 180px;
          height: 180px;
          top: 40%;
          left: 70%;
          animation-delay: -2s;
        }

        .bg-circle-2 {
          width: 120px;
          height: 120px;
          top: 65%;
          left: 15%;
          animation-delay: -3s;
        }

        .bg-circle-3 {
          width: 100px;
          height: 100px;
          top: 25%;
          right: 20%;
          animation-delay: -5s;
        }

        .sparkle {
          position: absolute;
          font-size: 1.2rem;
          opacity: 0.4;
          animation: sparkle 3s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        .sparkle:nth-child(1) { top: 15%; left: 10%; animation-delay: 0s; }
        .sparkle:nth-child(2) { top: 35%; right: 15%; animation-delay: 0.5s; }
        .sparkle:nth-child(3) { top: 55%; left: 8%; animation-delay: 1s; }
        .sparkle:nth-child(4) { top: 75%; right: 12%; animation-delay: 1.5s; }
        .sparkle:nth-child(5) { top: 20%; left: 85%; animation-delay: 2s; }
        .sparkle:nth-child(6) { top: 85%; left: 25%; animation-delay: 2.5s; }

        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.7; transform: scale(1.3) rotate(15deg); }
        }

        .timeline-connector {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #f9a8d4;
          border-radius: 50%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          box-shadow: 0 0 10px rgba(249,168,212,0.6);
        }

.timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 12px 0;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .timeline-item:hover {
          transform: translateX(5px);
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
          text-align: right;
        }

        .timeline-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid #fce7f3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          transition: all 0.3s;
          position: relative;
          z-index: 10;
        }

        .timeline-item:hover .timeline-dot {
          border-color: #f9a8d4;
          box-shadow: 0 0 20px rgba(249, 168, 212, 0.4);
        }

        .timeline-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-top: 8px;
        }

        .timeline-date {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 0.8rem;
          color: #be185d;
          white-space: nowrap;
        }

        .timeline-title {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.05rem;
          color: #444;
        }

        .continue-btn {
          position: fixed;
          bottom: 30px;
          left: 50%;
          background: #fce7f3;
          border: none;
          padding: 14px 32px;
          border-radius: 25px;
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.2rem;
          color: #be185d;
          cursor: pointer;
          box-shadow: 0 6px 25px rgba(236, 72, 153, 0.2);
          z-index: 100;
        }

        .event-modal {
          position: fixed;
          inset: 0;
          background: rgba(100,140,180,0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .event-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 24px;
          padding: 28px 24px;
          max-width: 440px;
          width: 90vw;
          position: relative;
          border: 1px solid rgba(255,255,255,0.5);
          box-shadow: 0 12px 40px rgba(100,150,200,0.15);
        }

        .event-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(200,220,255,0.45);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.6);
          color: #6b8cae;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .event-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .event-emoji {
          font-size: 2.5rem;
        }

        .event-header h2 {
          font-family: var(--font-caveat);
          font-size: 1.5rem;
          color: #6b8cae;
          margin: 0;
        }

        .event-date {
          font-family: var(--font-caveat);
          font-size: 1rem;
          color: #8aa8c2;
        }

        .media-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .media-main {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          justify-content: center;
        }

        .media-nav {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(200,220,255,0.35);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.6);
          font-size: 1.6rem;
          cursor: pointer;
          color: #6b8cae;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .media-display {
          width: 280px;
          height: 280px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          cursor: pointer;
          position: relative;
          border: 1px solid rgba(255,255,255,0.4);
          box-shadow: 0 4px 20px rgba(100,150,200,0.1);
          overflow: hidden;
        }

        .media-emoji {
          font-size: 4rem;
          filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));
        }

        .media-play-icon {
          position: absolute;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: #6b8cae;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .media-expand {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-size: 1.2rem;
          opacity: 0.6;
          background: rgba(255,255,255,0.7);
          padding: 4px 8px;
          border-radius: 8px;
        }

        .media-caption {
          font-family: var(--font-caveat);
          font-size: 1.15rem;
          color: #6b8cae;
          text-align: center;
          margin: 0;
          padding: 0 8px;
          font-style: italic;
        }

        .media-dots {
          display: flex;
          gap: 10px;
        }

        .media-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(200,220,255,0.5);
          border: 2px solid rgba(147,197,253,0.6);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.4rem;
          color: #8aa8c2;
        }

        .media-dot.active {
          background: rgba(147,197,253,0.8);
          border-color: rgba(147,197,253,0.9);
          box-shadow: 0 0 10px rgba(147,197,253,0.5);
        }

        .fullscreen-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .fullscreen-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          font-size: 1.4rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .fullscreen-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          max-width: 85vw;
          max-height: 85vh;
        }

        .fullscreen-media {
          width: clamp(280px, 70vw, 600px);
          height: clamp(280px, 60vh, 500px);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .fullscreen-play {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          backdrop-filter: blur(5px);
        }

        .fullscreen-caption {
          font-family: var(--font-caveat);
          font-size: 1.4rem;
          color: rgba(255,255,255,0.85);
          text-align: center;
          max-width: 500px;
          margin: 0;
        }

        .timeline-header h1 {
          font-family: 'Caveat', cursive;
          font-size: 2.8rem;
          font-weight: 700;
          color: #be185d;
          margin: 0;
          text-shadow: 
            2px 2px 4px rgba(249, 168, 212, 0.3),
            0 0 20px rgba(249, 168, 212, 0.2);
          letter-spacing: 1px;
          background: linear-gradient(135deg, #ec4899, #be185d, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 768px) {
          .timeline-header {
            margin-bottom: 18px;
            padding-top: 16px;
          }

          .timeline-header h1 {
            font-size: 2rem;
          }

          .timeline-header .emoji {
            font-size: 1.5rem;
          }

          .timeline {
            max-width: 100%;
            padding-left: 16px;
            padding-right: 16px;
          }

          .timeline-line {
            display: none;
          }

          .timeline-hearts {
            display: none;
          }

          .timeline-item {
            gap: 12px;
            padding: 10px 0;
          }

          .timeline-dot {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }

          .event-card {
            padding: 28px 20px;
          }

          .media-display {
            width: 220px;
            height: 220px;
          }

          .continue-btn {
            padding: 12px 28px;
            font-size: 1.1rem;
          }

          .timeline-date {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .timeline-page {
            padding: 12px;
          }

          .timeline-header {
            margin-bottom: 14px;
            padding-top: 12px;
            gap: 6px;
          }

          .timeline-header h1 {
            font-size: 1.5rem;
          }

          .timeline-header .emoji {
            font-size: 1.3rem;
          }

          .timeline {
            padding-bottom: 80px;
            padding-left: 8px;
            padding-right: 8px;
          }

          .timeline-item {
            gap: 10px;
            padding: 8px 0;
          }

          .timeline-dot {
            width: 34px;
            height: 34px;
            font-size: 0.95rem;
            border-width: 2px;
          }

          .timeline-content {
            padding-top: 4px;
            gap: 1px;
          }

          .timeline-title {
            font-size: 0.95rem;
          }

          .timeline-date {
            font-size: 0.7rem;
          }

          .event-card {
            padding: 20px 14px;
            max-width: 320px;
          }

          .event-card h2 {
            font-size: 1.3rem;
          }

          .media-display {
            width: 180px;
            height: 180px;
          }

          .media-nav {
            width: 36px;
            height: 36px;
            font-size: 1.3rem;
          }

          .continue-btn {
            padding: 10px 24px;
            font-size: 1rem;
            bottom: 20px;
          }

          .event-modal {
            padding: 12px;
          }

          .falling-particle {
            font-size: 1rem;
          }

          .media-emoji {
            font-size: 3rem;
          }

          .fullscreen-media {
            width: clamp(220px, 85vw, 400px);
            height: clamp(220px, 50vh, 350px);
          }
        }

        @media (max-width: 360px) {
          .timeline-page {
            padding: 8px;
          }

          .timeline-header h1 {
            font-size: 1.3rem;
          }

          .timeline-dot {
            width: 28px;
            height: 28px;
            font-size: 0.8rem;
          }

          .timeline-title {
            font-size: 0.85rem;
          }

          .event-card {
            padding: 16px 12px;
            max-width: 280px;
          }

          .media-display {
            width: 150px;
            height: 150px;
          }

          .media-emoji {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}