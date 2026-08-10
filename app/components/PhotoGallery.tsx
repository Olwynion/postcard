'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  emoji: string;
}

const timelineEvents: TimelineEvent[] = [
  { id: '1', date: '2025-08-10', displayDate: '10 авг 2025', title: 'Первая встреча', emoji: '👀' },
  { id: '2', date: '2025-08-17', displayDate: '17 авг 2025', title: 'Первое предложение', emoji: '💍' },
  { id: '3', date: '2025-08-30', displayDate: '30 авг 2025', title: 'Начало отношений', emoji: '❤️' },
  { id: '4', date: '2025-09-30', displayDate: '30 сен 2025', title: 'Первый месяц', emoji: '💕' },
  { id: '5', date: '2025-10-06', displayDate: '6 окт 2025', title: 'Твой день рождения', emoji: '🎂' },
  { id: '6', date: '2025-10-11', displayDate: '11 окт 2025', title: 'Первый концерт', emoji: '🎵' },
  { id: '7', date: '2025-10-14', displayDate: '14 окт 2025', title: 'Маленькая мечта', emoji: '✨' },
  { id: '8', date: '2025-11-22', displayDate: '22 ноя 2025', title: 'Первая поездка', emoji: '✈️' },
  { id: '9', date: '2025-12-30', displayDate: '30 дек 2025 - 1 янв 2026', title: 'Новый год', emoji: '🎆' },
  { id: '10', date: '2026-01-25', displayDate: '25 янв 2026', title: 'Новогодняя Москва', emoji: '🏙️' },
  { id: '11', date: '2026-02-28', displayDate: '28 фев 2026', title: '6 месяцев', emoji: '💖' },
  { id: '12', date: '2026-02-28', displayDate: '28 фев - 12 май 2026', title: 'Микс', emoji: '📸' },
  { id: '13', date: '2026-05-12', displayDate: '12 май 2026', title: 'Мой ДР', emoji: '🎉' },
  { id: '14', date: '2026-05-30', displayDate: '30 май 2026', title: '9 месяцев', emoji: '💗' },
  { id: '15', date: '2026-06-01', displayDate: '1 июн 2026', title: 'Наше совместное лето', emoji: '☀️' },
];

export default function PhotoGallery({ onNext }: { onNext?: () => void }) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setCurrentPhotoIndex(0);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % 4);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + 4) % 4);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="timeline-page">
      <div className="timeline-header">
        <span className="emoji">📅</span>
        <h1>Наша история</h1>
      </div>

      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.id}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => handleEventClick(event)}
          >
            <div className="timeline-dot">
              <span>{event.emoji}</span>
            </div>
            <div className="timeline-content">
              <span className="timeline-date">{event.displayDate}</span>
              <span className="timeline-title">{event.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {onNext && (
        <button className="continue-btn" onClick={onNext}>
          Продолжить 💕
        </button>
      )}

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
              <button className="close-btn" onClick={handleClose}>✕</button>
              
              <div className="event-header">
                <span className="event-emoji">{selectedEvent.emoji}</span>
                <h2>{selectedEvent.title}</h2>
                <span className="event-date">{selectedEvent.displayDate}</span>
              </div>

              <div className="photo-nav-row">
                <button className="photo-nav-btn" onClick={prevPhoto}>←</button>
                <span className="photo-counter">{currentPhotoIndex + 1} / 4</span>
                <button className="photo-nav-btn" onClick={nextPhoto}>→</button>
              </div>
              
              <div className="photo-viewer">
                <div className="photo-placeholder">📷</div>
              </div>

              <div className="photo-dots">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    className={`dot ${currentPhotoIndex === i ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(i)}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .timeline-page {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          z-index: 100;
          background: linear-gradient(135deg, #fff5f7 0%, #ffeef2 50%, #fdf2f8 100%);
          overflow-y: auto;
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

        .timeline-header h1 {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 2rem;
          color: #be185d;
          margin: 0;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
          max-width: 400px;
          padding-bottom: 100px;
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
          transform: translateX(-50%);
          background: #fce7f3;
          border: none;
          padding: 14px 32px;
          border-radius: 25px;
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.2rem;
          color: #be185d;
          cursor: pointer;
          box-shadow: 0 6px 25px rgba(236, 72, 153, 0.2);
        }

        .event-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .event-card {
          background: #fff;
          border-radius: 16px;
          padding: 32px 24px;
          max-width: 360px;
          width: 100%;
          position: relative;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .close-btn {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff;
          border: none;
          color: #be185d;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          z-index: 10;
        }

        .close-btn:hover {
          background: #fce7f3;
        }

        .event-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          text-align: center;
        }

        .event-emoji {
          font-size: 2.5rem;
        }

        .event-header h2 {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.5rem;
          color: #be185d;
          margin: 0;
        }

        .event-date {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1rem;
          color: #666;
        }

        .photo-nav-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 20px;
          padding: 10px;
          background: rgba(252, 231, 243, 0.5);
          border-radius: 12px;
        }

        .photo-nav-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #fff;
          border: 4px solid #f9a8d4;
          color: #be185d;
          font-size: 1.8rem;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .photo-nav-btn:hover {
          background: #f9a8d4;
          color: #fff;
          transform: scale(1.15);
        }

        .photo-counter {
          font-family: var(--font-caveat), 'Caveat', Georgia, cursive;
          font-size: 1.4rem;
          color: #be185d;
          font-weight: 700;
          min-width: 60px;
          text-align: center;
        }

        .photo-viewer {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .photo-placeholder {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #fce7f3, #fbcfe8);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .photo-dots {
          display: flex;
          justify-content: center;
          gap: 14px;
        }

        .photo-dots .dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fff;
          border: 3px solid #f9a8d4;
          cursor: pointer;
          transition: all 0.2s;
        }

        .photo-dots .dot.active {
          background: #f9a8d4;
          transform: scale(1.4);
        }

        @media (max-width: 480px) {
          .timeline-header h1 {
            font-size: 1.6rem;
          }

          .timeline {
            padding-bottom: 80px;
          }

          .timeline-dot {
            width: 38px;
            height: 38px;
            font-size: 1rem;
          }

          .timeline-title {
            font-size: 1rem;
          }

          .event-card {
            padding: 24px 16px;
          }

          .photo-placeholder {
            width: 160px;
            height: 160px;
          }
        }
      `}</style>
    </div>
  );
}