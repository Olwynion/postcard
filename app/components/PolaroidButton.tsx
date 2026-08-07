'use client';

interface PolaroidButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function PolaroidButton({ icon, label, isActive, onClick }: PolaroidButtonProps) {
  return (
    <button
      className={`polaroid-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="polaroid-frame">
        <div className="polaroid-content">
          <span className="polaroid-icon">{icon}</span>
        </div>
      </div>
      <span className="polaroid-label">{label}</span>

      <style jsx>{`
        .polaroid-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .polaroid-button:nth-child(1) { animation-delay: 0.3s; }
        .polaroid-button:nth-child(2) { animation-delay: 0.4s; }
        .polaroid-button:nth-child(3) { animation-delay: 0.5s; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .polaroid-frame {
          width: clamp(80px, 20vw, 110px);
          height: clamp(95px, 24vw, 130px);
          background: #fff;
          padding: 10px 10px 35px 10px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transform: rotate(0deg);
          transition: all 0.3s ease;
        }

        .active .polaroid-frame {
          transform: rotate(-2deg);
          box-shadow: 0 12px 35px rgba(0,0,0,0.15);
        }

        .polaroid-button:not(.active):hover .polaroid-frame {
          transform: rotate(2deg) translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .polaroid-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fef9f3, #fdf2f8);
          border-radius: 2px;
        }

        .polaroid-icon {
          font-size: clamp(28px, 8vw, 42px);
        }

        .polaroid-label {
          font-family: 'Georgia', serif;
          font-style: italic;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          color: #6b5b4f;
          letter-spacing: 0.05em;
          transition: color 0.3s ease;
        }

        .active .polaroid-label {
          color: #d4849c;
          font-weight: 500;
        }
      `}</style>
    </button>
  );
}