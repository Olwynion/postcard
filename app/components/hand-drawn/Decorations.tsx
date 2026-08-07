export const HandFlower = ({ size = 48, color = '#e879a9' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <defs>
      <filter id="pencil" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <path d="M52 42 Q65 30 68 45 Q72 38 76 52 Q72 58 65 58" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M48 42 Q35 30 32 45 Q28 38 24 52 Q28 58 35 58" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M50 38 Q52 28 60 32 Q54 22 48 30 Q42 22 38 30 Q48 28 50 38" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M50 38 Q54 25 62 30 Q56 20 50 28 Q44 20 38 30 Q46 25 50 38" stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.9" />
    <circle cx="50" cy="42" r="11" fill="#fcd34d" opacity="0.95" />
    <circle cx="47" cy="40" r="2.5" fill="#f59e0b" opacity="0.8" />
    <circle cx="53" cy="44" r="2" fill="#f59e0b" opacity="0.8" />
    <circle cx="44" cy="43" r="1.5" fill="#f59e0b" opacity="0.8" />
    <path d="M50 54 C51 68 49 78 50 90" stroke="#65a30d" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M48 64 Q40 60 36 66" stroke="#65a30d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.85" />
  </svg>
);

export const HandTulip = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <defs>
      <filter id="pencil2" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
    <path d="M52 48 Q60 32 52 18 Q48 8 50 12 Q44 4 52 16 Q60 8 54 20 Q64 28 56 38 Q52 30 52 48" 
      stroke={color} strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M48 48 Q40 36 36 28 Q30 20 34 26 Q26 18 40 24 Q48 16 52 30 Q48 38 48 48" 
      stroke={color} strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M50 50 L50 92" stroke="#65a30d" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M50 68 Q40 62 36 68" stroke="#65a30d" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
  </svg>
);

export const HandCherry = ({ size = 48, color = '#f9a8d4' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M38 30 Q42 16 54 10" stroke="#92400e" strokeWidth="2.8" fill="none" strokeLinecap="round" />
    <path d="M52 28 Q56 18 52 8" stroke="#92400e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <ellipse cx="34" cy="56" rx="19" ry="18" fill={color} opacity="0.92" />
    <ellipse cx="31" cy="52" rx="5" ry="4" fill="white" opacity="0.35" />
    <ellipse cx="62" cy="50" rx="16" ry="15" fill={color} opacity="0.88" />
    <ellipse cx="59" cy="46" rx="4" ry="3" fill="white" opacity="0.35" />
  </svg>
);

export const HandLeaf = ({ size = 48, color = '#4ade80' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 12 Q72 25 74 48 Q78 68 68 82 Q60 92 52 90 Q44 92 36 84 Q22 70 24 50 Q25 32 38 18 Q44 10 50 12" 
      fill={color} opacity="0.88" />
    <path d="M50 16 Q52 38 50 58 Q48 75 50 88" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
    <path d="M48 38 Q38 34 30 40" stroke="#22c55e" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M52 52 Q62 48 70 54" stroke="#22c55e" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M48 66 Q40 64 32 70" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const HandClover = ({ size = 48, color = '#22c55e' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="50" cy="30" rx="17" ry="16" fill={color} opacity="0.9" />
    <ellipse cx="33" cy="50" rx="16" ry="15" fill={color} opacity="0.88" />
    <ellipse cx="67" cy="50" rx="16" ry="15" fill={color} opacity="0.88" />
    <ellipse cx="38" cy="27" rx="4" ry="3" fill="white" opacity="0.3" />
    <path d="M50 68 L50 95" stroke="#15803d" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M52 80 Q62 74 70 80" stroke="#15803d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
  </svg>
);

export const HandPalm = ({ size = 48, color = '#65a30d' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M52 90 L50 52" stroke="#78350f" strokeWidth="5.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M50 52 Q54 35 48 16 Q45 6 42 14 Q38 4 46 12 Q44 4 54 24 Q50 6 60 22 Q65 6 64 20 Q72 12 66 30 Q78 22 70 40 Q80 36 72 50 Q78 50 62 54 Q66 58 50 52" 
      stroke={color} strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.9" />
  </svg>
);

export const HandLeafOrange = ({ size = 48, color = '#f97316' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 10 Q76 22 78 48 Q82 70 70 84 Q62 94 52 92 Q42 94 32 86 Q18 72 22 50 Q26 28 40 14 Q46 8 50 10" 
      fill={color} opacity="0.9" />
    <path d="M50 14 Q52 38 48 62 Q46 78 50 90" stroke="#c2410c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
    <path d="M46 38 Q36 34 28 42" stroke="#c2410c" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M54 55 Q66 50 74 56" stroke="#c2410c" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
  </svg>
);

export const HandMaple = ({ size = 48, color = '#ea580c' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 6 L56 24 L70 20 L64 36 L78 32 L68 48 L86 56 L72 60 L78 78 L60 70 L50 90 L40 70 L22 78 L28 60 L14 56 L32 48 L22 32 L36 36 L30 20 L44 24 Z" 
      fill={color} opacity="0.9" />
    <path d="M50 28 Q52 48 50 68 Q48 82 50 94" stroke="#9a3412" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
  </svg>
);

export const HandMapleSmall = ({ size = 48, color = '#dc2626' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M52 12 L58 28 L72 24 L66 40 L80 36 L70 52 L88 60 L74 64 L80 82 L62 74 L52 95 L42 74 L24 82 L30 64 L16 60 L34 52 L24 36 L38 40 L32 24 L48 28 Z" 
      fill={color} opacity="0.9" />
  </svg>
);

export const HandSnowflake = ({ size = 48, color = '#7dd3fc' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M52 10 L50 90" stroke={color} strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
    <path d="M12 52 L88 50" stroke={color} strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
    <path d="M18 22 L82 78" stroke={color} strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
    <path d="M82 22 L18 78" stroke={color} strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
    <path d="M52 20 L46 30 L52 38 L58 30 Z" stroke={color} strokeWidth="2" fill={color} opacity="0.8" />
    <path d="M52 62 L46 72 L52 80 L58 72 Z" stroke={color} strokeWidth="2" fill={color} opacity="0.8" />
    <circle cx="50" cy="50" r="8" fill={color} opacity="0.95" />
  </svg>
);

export const HandStar = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M52 10 L60 40 L92 38 L68 60 L76 92 L50 74 L24 92 L32 60 L8 38 L40 40 Z" 
      fill={color} opacity="0.92" />
    <path d="M50 20 L56 42 L80 40 L62 58 L68 84 L50 70 L32 84 L38 58 L20 40 L44 42 Z" 
      fill="#fcd34d" opacity="0.5" />
    <circle cx="40" cy="40" r="4" fill="white" opacity="0.35" />
  </svg>
);

export const HandSnowflakeSimple = ({ size = 48, color = '#bae6fd' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 10 L50 90" stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
    <path d="M10 50 L90 50" stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
    <path d="M18 18 L82 82" stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
    <path d="M82 18 L18 82" stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
    <circle cx="50" cy="50" r="7" fill={color} opacity="0.95" />
  </svg>
);

export const HandHeart = ({ size = 48, color = '#ec4899' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 88 Q16 58 8 38 Q2 20 20 14 Q34 8 46 24 Q50 14 54 24 Q66 8 80 14 Q98 20 92 38 Q82 58 50 88" 
      fill={color} opacity="0.92" />
    <ellipse cx="28" cy="32" rx="10" ry="8" fill="white" opacity="0.28" />
  </svg>
);

export const HandSun = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <circle cx="52" cy="52" r="22" fill={color} opacity="0.95" />
    <circle cx="46" cy="46" r="5" fill="white" opacity="0.3" />
    <line x1="52" y1="6" x2="50" y2="22" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <line x1="52" y1="82" x2="50" y2="96" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <line x1="6" y1="52" x2="22" y2="50" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <line x1="78" y1="52" x2="94" y2="50" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <line x1="16" y1="18" x2="26" y2="28" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <line x1="74" y1="74" x2="84" y2="84" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <line x1="84" y1="18" x2="74" y2="28" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <line x1="26" y1="74" x2="16" y2="84" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
  </svg>
);

export const HandDaisy = ({ size = 48, color = '#fef3c7' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse key={i} cx="50" cy="26" rx="11" ry="20" fill={color} opacity="0.9" transform={`rotate(${angle} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="16" fill="#f59e0b" opacity="0.95" />
    <circle cx="46" cy="46" r="4" fill="#fbbf24" opacity="0.5" />
  </svg>
);

export const HandRose = ({ size = 48, color = '#be185d' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 35 Q64 28 60 42 Q70 36 74 48 Q76 60 64 62 Q54 68 50 64" fill={color} opacity="0.9" />
    <path d="M48 40 Q36 34 32 42 Q26 36 32 28 Q24 22 36 26 Q30 16 44 24 Q38 10 52 22 Q58 14 64 28 Q76 22 72 40 Q82 38 76 54 Q86 54 72 66 Q80 72 62 74 Q68 86 50 80 Q58 96 40 84 Q48 98 30 82 Q38 94 24 78 Q32 90 18 72 Q28 84 18 65 Q30 74 26 58 Q34 66 30 50 Q40 58 36 44 Q48 52 42 38 Q54 46 50 35" 
      fill={color} opacity="0.9" />
    <path d="M46 78 L46 95" stroke="#65a30d" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M44 86 Q36 82 32 90" stroke="#65a30d" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8" />
  </svg>
);

export const HandSunflower = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
      <ellipse key={i} cx="50" cy="20" rx="11" ry="22" fill={color} opacity="0.9" transform={`rotate(${angle} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="18" fill="#78350f" opacity="0.95" />
    <circle cx="46" cy="46" r="3" fill="#92400e" opacity="0.7" />
    <circle cx="54" cy="50" r="2.5" fill="#92400e" opacity="0.7" />
    <circle cx="50" cy="56" r="2" fill="#92400e" opacity="0.7" />
  </svg>
);

export const HandCamera = ({ size = 48, color = '#6b7280' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <rect x="10" y="30" width="80" height="50" rx="6" fill={color} opacity="0.95" />
    <rect x="40" y="18" width="20" height="14" rx="4" fill={color} opacity="0.9" />
    <circle cx="50" cy="55" r="20" fill="#374151" opacity="0.95" />
    <circle cx="50" cy="55" r="14" fill="#1f2937" />
    <circle cx="50" cy="55" r="7" fill="#60a5fa" opacity="0.9" />
    <circle cx="48" cy="53" r="2.5" fill="white" opacity="0.4" />
    <circle cx="78" cy="42" r="6" fill="#fbbf24" opacity="0.95" />
  </svg>
);

export const HandButterfly = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <ellipse cx="28" cy="38" rx="24" ry="20" fill={color} opacity="0.9" />
    <ellipse cx="72" cy="38" rx="24" ry="20" fill={color} opacity="0.88" />
    <ellipse cx="30" cy="66" rx="16" ry="14" fill={color} opacity="0.88" />
    <ellipse cx="70" cy="66" rx="16" ry="14" fill={color} opacity="0.85" />
    <ellipse cx="50" cy="52" rx="5" ry="28" fill="#4b5563" opacity="0.9" />
    <path d="M48 26 Q44 14 40 6" stroke="#4b5563" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M52 26 Q56 14 60 6" stroke="#4b5563" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <circle cx="22" cy="35" r="5" fill="white" opacity="0.3" />
    <circle cx="68" cy="35" r="5" fill="white" opacity="0.3" />
  </svg>
);

export const HandSparkle = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 6 L56 44 L94 50 L56 56 L50 94 L44 56 L6 50 L44 44 Z" fill={color} opacity="0.95" />
    <path d="M50 20 L54 44 L78 50 L54 56 L50 80 L46 56 L22 50 L46 44 Z" fill="#fcd34d" opacity="0.6" />
  </svg>
);

export const HandNote = ({ size = 48, color = '#fef08a' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M20 10 L65 10 L80 30 L80 90 L20 90 Z" fill={color} opacity="0.95" stroke="#eab308" strokeWidth="2" />
    <path d="M65 10 L65 30 L80 30" fill={color} opacity="0.9" />
    <line x1="30" y1="45" x2="70" y2="45" stroke="#ca8a04" strokeWidth="2" opacity="0.4" />
    <line x1="30" y1="58" x2="65" y2="58" stroke="#ca8a04" strokeWidth="2" opacity="0.4" />
    <line x1="30" y1="71" x2="55" y2="71" stroke="#ca8a04" strokeWidth="2" opacity="0.4" />
  </svg>
);

export const HandEnvelope = ({ size = 48, color = '#fed7aa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <rect x="10" y="25" width="80" height="55" rx="4" fill={color} opacity="0.95" stroke="#f97316" strokeWidth="2" />
    <path d="M10 28 L50 58 L90 28" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.8" />
    <path d="M10 78 L35 55" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M90 78 L65 55" stroke="#f97316" strokeWidth="2" fill="none" opacity="0.6" />
  </svg>
);

export const HandBalloon = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="50" cy="40" rx="28" ry="35" fill={color} opacity="0.92" />
    <ellipse cx="40" cy="30" rx="8" ry="10" fill="white" opacity="0.25" />
    <path d="M50 75 L45 85 L55 85 Z" fill={color} opacity="0.9" />
    <path d="M50 85 Q48 95 52 95 Q50 95 50 100" stroke="#92400e" strokeWidth="1.5" fill="none" />
  </svg>
);

export const HandCake = ({ size = 48, color = '#fecaca' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <rect x="20" y="55" width="60" height="35" rx="4" fill={color} opacity="0.95" />
    <rect x="15" y="45" width="70" height="15" rx="3" fill="#fef2f2" opacity="0.95" />
    <ellipse cx="50" cy="45" rx="35" ry="6" fill="#fecaca" opacity="0.8" />
    <path d="M50 35 L50 20" stroke="#fbbf24" strokeWidth="2" />
    <ellipse cx="50" cy="18" rx="3" ry="5" fill="#f97316" opacity="0.9" />
  </svg>
);

export const HandGift = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <rect x="15" y="40" width="70" height="50" rx="3" fill={color} opacity="0.92" />
    <rect x="15" y="30" width="70" height="15" rx="3" fill="#c4b5fd" opacity="0.9" />
    <rect x="45" y="30" width="10" height="60" fill="#fbbf24" opacity="0.8" />
    <path d="M40 30 Q50 20 50 30 Q50 20 60 30" stroke="#fbbf24" strokeWidth="4" fill="none" opacity="0.8" />
    <path d="M35 30 Q45 15 50 30" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.7" />
    <path d="M65 30 Q55 15 50 30" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.7" />
  </svg>
);

export const HandRibbon = ({ size = 48, color = '#fb7185' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="50" cy="35" rx="30" ry="25" fill={color} opacity="0.9" />
    <ellipse cx="30" cy="70" rx="12" ry="20" fill={color} opacity="0.85" transform="rotate(-30 30 70)" />
    <ellipse cx="70" cy="70" rx="12" ry="20" fill={color} opacity="0.85" transform="rotate(30 70 70)" />
    <ellipse cx="40" cy="30" rx="8" ry="6" fill="white" opacity="0.3" />
  </svg>
);

export const HandMoon = ({ size = 48, color = '#fef08a' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M60 15 Q30 25 30 50 Q30 75 60 85 Q40 80 35 55 Q35 30 55 20 Q50 18 60 15" fill={color} opacity="0.95" />
    <circle cx="45" cy="35" r="2" fill="white" opacity="0.4" />
    <circle cx="40" cy="55" r="1.5" fill="white" opacity="0.3" />
    <circle cx="50" cy="70" r="1" fill="white" opacity="0.3" />
  </svg>
);

export const HandCloud = ({ size = 48, color = '#e5e7eb' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="35" cy="55" rx="22" ry="18" fill={color} opacity="0.9" />
    <ellipse cx="55" cy="45" rx="25" ry="22" fill={color} opacity="0.92" />
    <ellipse cx="72" cy="55" rx="18" ry="15" fill={color} opacity="0.88" />
    <ellipse cx="55" cy="60" rx="30" ry="15" fill={color} opacity="0.85" />
  </svg>
);

export const HandRainbow = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 100 60" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M5 55 Q50 0 95 55" stroke="#ef4444" strokeWidth="8" fill="none" opacity="0.9" />
    <path d="M12 55 Q50 10 88 55" stroke="#f97316" strokeWidth="6" fill="none" opacity="0.85" />
    <path d="M18 55 Q50 18 82 55" stroke="#fbbf24" strokeWidth="5" fill="none" opacity="0.85" />
    <path d="M24 55 Q50 26 76 55" stroke="#4ade80" strokeWidth="4" fill="none" opacity="0.85" />
    <path d="M30 55 Q50 32 70 55" stroke="#60a5fa" strokeWidth="3" fill="none" opacity="0.9" />
    <path d="M35 55 Q50 40 65 55" stroke="#a78bfa" strokeWidth="2" fill="none" opacity="0.95" />
  </svg>
);

export const HandMusic = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <ellipse cx="25" cy="75" rx="15" ry="12" fill={color} opacity="0.9" />
    <ellipse cx="75" cy="70" rx="15" ry="12" fill={color} opacity="0.88" />
    <path d="M40 75 L40 20 L85 35 L85 70" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.9" />
    <ellipse cx="25" cy="75" rx="15" ry="12" fill="white" opacity="0.15" />
  </svg>
);

export const HandCoffee = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M20 35 L25 85 Q50 90 75 85 L80 35 Z" fill={color} opacity="0.92" />
    <ellipse cx="50" cy="35" rx="30" ry="8" fill="#c4b5fd" opacity="0.9" />
    <path d="M80 45 Q95 45 95 60 Q95 75 80 75" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
    <path d="M35 20 Q38 10 35 5" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M50 18 Q53 8 50 3" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M65 20 Q68 10 65 5" stroke="#9ca3af" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const HandKissingLips = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M28 45 Q35 32 50 30 Q65 32 72 45 Q65 55 50 52 Q35 55 28 45" fill={color} opacity="0.92" />
    <path d="M22 50 Q30 65 50 70 Q70 65 78 50 Q72 62 50 68 Q28 62 22 50" fill="#db2777" opacity="0.85" />
    <path d="M50 52 L50 68" stroke="#be185d" strokeWidth="2" opacity="0.5" />
    <ellipse cx="35" cy="40" rx="8" ry="5" fill="white" opacity="0.25" />
    <path d="M30 38 Q34 42 38 38" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
  </svg>
);

export const HandHug = ({ size = 48, color = '#fb923c' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="30" cy="55" rx="18" ry="25" fill={color} opacity="0.88" />
    <ellipse cx="70" cy="55" rx="18" ry="25" fill={color} opacity="0.85" />
    <ellipse cx="50" cy="52" rx="15" ry="22" fill="#fed7aa" opacity="0.9" />
    <path d="M50 30 Q48 20 50 15 Q52 20 50 30" stroke="#92400e" strokeWidth="2" fill="none" opacity="0.7" />
    <circle cx="44" cy="42" r="3" fill="#78350f" opacity="0.6" />
    <circle cx="56" cy="42" r="3" fill="#78350f" opacity="0.6" />
    <path d="M44 52 Q50 58 56 52" stroke="#78350f" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M28 52 Q32 60 36 52" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
    <path d="M64 52 Q68 60 72 52" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
  </svg>
);

export const HandRing = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <ellipse cx="50" cy="60" rx="28" ry="22" fill="none" stroke={color} strokeWidth="6" opacity="0.9" />
    <ellipse cx="50" cy="60" rx="28" ry="22" fill="none" stroke="#fef3c7" strokeWidth="2" opacity="0.4" />
    <path d="M42 45 L50 22 L58 45" fill="#60a5fa" opacity="0.95" />
    <path d="M45 22 L50 12 L55 22" fill="#93c5fd" opacity="0.8" />
    <circle cx="50" cy="42" r="4" fill={color} opacity="0.9" />
    <circle cx="42" cy="48" r="2" fill={color} opacity="0.5" />
    <circle cx="58" cy="48" r="2" fill={color} opacity="0.5" />
  </svg>
);

export const HandCupidArrow = ({ size = 48, color = '#ec4899' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M10 90 L70 30" stroke="#78350f" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
    <path d="M70 30 L78 22 M70 30 L62 22 M70 30 L80 32 M70 30 L72 40" stroke="#78350f" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    <path d="M68 28 Q80 18 88 28 Q80 38 68 28" fill={color} opacity="0.92" />
    <path d="M72 24 Q80 16 86 24" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M85 24 Q92 18 95 24" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
  </svg>
);

export const HandLoveLetter = ({ size = 48, color = '#fecdd3' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M15 20 L85 20 L85 80 L15 80 Z" fill={color} opacity="0.95" stroke="#fda4af" strokeWidth="2" />
    <path d="M15 20 L50 50 L85 20" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.8" />
    <path d="M15 80 L35 55" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M85 80 L65 55" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M40 45 Q46 38 52 48 Q58 38 64 48" stroke="#e11d48" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M52 48 L52 58 L48 62 Q52 65 56 62 L52 58" fill="#e11d48" opacity="0.8" />
  </svg>
);

export const HandRedRose = ({ size = 48, color = '#dc2626' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 22 Q62 16 60 30 Q68 24 72 36 Q74 48 64 50 Q54 56 50 52" fill={color} opacity="0.92" />
    <path d="M48 26 Q36 20 32 28 Q26 22 32 14 Q24 8 36 12 Q30 2 44 10 Q38 0 52 12 Q58 4 64 18 Q76 12 72 30 Q82 28 76 44 Q86 44 72 56 Q80 62 62 64 Q68 76 50 70 Q58 86 40 74 Q48 88 30 72 Q38 84 24 66 Q32 78 22 60 Q32 68 28 52 Q36 60 32 44 Q42 52 36 38 Q48 46 42 32 Q54 40 50 22" 
      fill={color} opacity="0.95" />
    <path d="M46 72 L46 94" stroke="#15803d" strokeWidth="4.5" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M44 82 Q36 78 32 86" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.8" />
    <path d="M46 70 Q40 62 36 66" stroke="#15803d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
  </svg>
);

export const HandBird = ({ size = 48, color = '#60a5fa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="55" cy="50" rx="28" ry="22" fill={color} opacity="0.9" />
    <circle cx="78" cy="42" r="16" fill={color} opacity="0.92" />
    <path d="M92 42 L100 38 L92 46 Z" fill="#f97316" opacity="0.95" />
    <circle cx="84" cy="40" r="3" fill="#1e3a8a" opacity="0.9" />
    <circle cx="85" cy="39" r="1" fill="white" opacity="0.6" />
    <path d="M30 55 Q15 50 20 65 Q15 60 25 70 Q20 75 30 80 Q25 85 35 85" fill={color} opacity="0.8" />
    <path d="M55 30 Q50 20 55 15 Q60 20 55 30" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.7" />
  </svg>
);

export const HandHeartBreak = ({ size = 48, color = '#ec4899' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 88 Q16 58 8 38 Q2 20 20 14 Q34 8 46 24 L50 30 L54 24 Q66 8 80 14 Q98 20 92 38 Q84 58 50 88" 
      fill={color} opacity="0.92" />
    <path d="M48 38 L52 32 M46 52 L54 46 M44 66 L56 60 M42 80 L58 74" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
    <ellipse cx="28" cy="32" rx="10" ry="8" fill="white" opacity="0.2" />
  </svg>
);

export const HandSparkHeart = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 88 Q16 58 8 38 Q2 20 20 14 Q34 8 46 24 Q50 14 54 24 Q66 8 80 14 Q98 20 92 38 Q82 58 50 88" 
      fill={color} opacity="0.92" />
    <path d="M80 8 L82 18 L92 20 L82 22 L80 32 L78 22 L68 20 L78 18 Z" fill="#fbbf24" opacity="0.9" />
    <path d="M85 40 L86 48 L94 50 L86 52 L85 60 L84 52 L76 50 L84 48 Z" fill="#fcd34d" opacity="0.85" />
    <path d="M20 70 L22 78 L30 80 L22 82 L20 90 L18 82 L10 80 L18 78 Z" fill="#fcd34d" opacity="0.8" />
    <ellipse cx="28" cy="32" rx="10" ry="8" fill="white" opacity="0.25" />
  </svg>
);

export const HandCouple = ({ size = 48, color = '#f9a8d4' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="35" cy="35" rx="14" ry="16" fill="#fcd34d" opacity="0.9" />
    <ellipse cx="65" cy="35" rx="14" ry="16" fill="#fbbf24" opacity="0.9" />
    <circle cx="30" cy="32" r="2" fill="#78350f" opacity="0.7" />
    <circle cx="40" cy="32" r="2" fill="#78350f" opacity="0.7" />
    <circle cx="60" cy="32" r="2" fill="#78350f" opacity="0.7" />
    <circle cx="70" cy="32" r="2" fill="#78350f" opacity="0.7" />
    <path d="M32 42 Q35 46 38 42" stroke="#78350f" strokeWidth="1.5" fill="none" opacity="0.6" />
    <path d="M62 42 Q65 46 68 42" stroke="#78350f" strokeWidth="1.5" fill="none" opacity="0.6" />
    <path d="M38 52 Q50 48 62 52 L65 95 L35 95 Z" fill={color} opacity="0.85" />
    <path d="M35 95 Q50 85 65 95" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M30 60 Q25 70 30 75" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
    <path d="M70 60 Q75 70 70 75" stroke={color} strokeWidth="3" fill="none" opacity="0.5" />
  </svg>
);

export const HandWedding = ({ size = 48, color = '#fef3c7' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 5 L48 15 L38 15 L46 22 L44 32 L50 26 L56 32 L54 22 L62 15 L52 15 Z" fill="#fbbf24" opacity="0.95" />
    <path d="M30 40 Q50 30 70 40 L75 90 L25 90 Z" fill={color} opacity="0.9" stroke="#f59e0b" strokeWidth="2" />
    <path d="M50 45 L50 75" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
    <path d="M35 55 L65 55" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" />
    <path d="M38 70 L62 70" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4" />
    <circle cx="50" cy="50" r="4" fill="#fcd34d" opacity="0.8" />
  </svg>
);

export const HandKiss = ({ size = 48, color = '#fda4af' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <ellipse cx="32" cy="55" rx="20" ry="25" fill={color} opacity="0.88" />
    <ellipse cx="68" cy="55" rx="20" ry="25" fill="#fcd34d" opacity="0.88" />
    <path d="M32 48 Q42 42 52 48 Q62 42 68 48" fill="#e11d48" opacity="0.9" />
    <path d="M32 54 Q42 60 52 54 Q62 60 68 54" fill="#e11d48" opacity="0.85" />
    <circle cx="26" cy="48" r="2" fill="#881337" opacity="0.6" />
    <circle cx="74" cy="48" r="2" fill="#92400e" opacity="0.6" />
    <path d="M50 70 Q52 85 50 95 Q48 85 50 70" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M26 38 Q22 32 26 28" stroke="#fda4af" strokeWidth="1.5" fill="none" opacity="0.5" />
    <path d="M74 38 Q78 32 74 28" stroke="#fcd34d" strokeWidth="1.5" fill="none" opacity="0.5" />
  </svg>
);

export const HandInfinity = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M30 50 Q20 35 30 35 Q45 35 50 50 Q55 65 70 65 Q80 65 70 50 Q60 35 50 50 Q40 65 30 65 Q20 65 30 50" 
      stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M30 50 Q20 35 30 35 Q45 35 50 50 Q55 65 70 65 Q80 65 70 50 Q60 35 50 50 Q40 65 30 65 Q20 65 30 50" 
      stroke="#c4b5fd" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export const HandArrowRight = ({ size = 48, color = '#6b7280' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M20 50 L70 50" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <path d="M60 35 L78 50 L60 65" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <path d="M20 46 Q25 50 20 54" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
  </svg>
);

export const HandArrowLeft = ({ size = 48, color = '#6b7280' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M80 50 L30 50" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <path d="M40 35 L22 50 L40 65" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <path d="M80 46 Q75 50 80 54" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
  </svg>
);

export const HandSpeechBubble = ({ size = 48, color = '#fef3c7' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M15 20 Q15 15 20 15 L80 15 Q85 15 85 20 L85 55 Q85 60 80 60 L40 60 L30 75 L32 60 L20 60 Q15 60 15 55 Z" 
      fill={color} opacity="0.95" stroke="#fcd34d" strokeWidth="2" />
    <circle cx="32" cy="38" r="4" fill="#f59e0b" opacity="0.8" />
    <circle cx="50" cy="38" r="4" fill="#f59e0b" opacity="0.8" />
    <circle cx="68" cy="38" r="4" fill="#f59e0b" opacity="0.8" />
  </svg>
);

export const HandCat = ({ size = 48, color = '#f97316' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <ellipse cx="50" cy="60" rx="30" ry="25" fill={color} opacity="0.9" />
    <path d="M20 45 L28 60 L20 55 Z" fill={color} opacity="0.95" />
    <path d="M80 45 L72 60 L80 55 Z" fill={color} opacity="0.95" />
    <circle cx="40" cy="52" r="4" fill="#1e293b" opacity="0.9" />
    <circle cx="60" cy="52" r="4" fill="#1e293b" opacity="0.9" />
    <circle cx="41" cy="51" r="1.5" fill="white" opacity="0.6" />
    <circle cx="61" cy="51" r="1.5" fill="white" opacity="0.6" />
    <ellipse cx="50" cy="62" rx="4" ry="3" fill="#f472b6" opacity="0.9" />
    <path d="M50 65 L50 70 Q46 72 42 70" stroke="#f472b6" strokeWidth="1.5" fill="none" opacity="0.7" />
    <path d="M50 65 L50 70 Q54 72 58 70" stroke="#f472b6" strokeWidth="1.5" fill="none" opacity="0.7" />
    <path d="M20 60 Q10 55 5 60 Q10 65 20 62" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M80 60 Q90 55 95 60 Q90 65 80 62" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M75 75 Q85 80 80 88 Q90 85 85 92" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
  </svg>
);

export const HandDog = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="50" cy="55" rx="28" ry="22" fill={color} opacity="0.9" />
    <ellipse cx="25" cy="45" rx="12" ry="18" fill="#c4b5fd" opacity="0.85" />
    <ellipse cx="75" cy="45" rx="12" ry="18" fill="#c4b5fd" opacity="0.85" />
    <circle cx="40" cy="50" r="4" fill="#1e293b" opacity="0.9" />
    <circle cx="60" cy="50" r="4" fill="#1e293b" opacity="0.9" />
    <circle cx="41" cy="49" r="1.5" fill="white" opacity="0.6" />
    <circle cx="61" cy="49" r="1.5" fill="white" opacity="0.6" />
    <ellipse cx="50" cy="60" rx="8" ry="6" fill="#1e293b" opacity="0.85" />
    <ellipse cx="50" cy="62" rx="5" ry="3" fill="#f472b6" opacity="0.8" />
    <path d="M50 68 Q50 80 45 90 Q50 88 55 90 Q50 80 50 68" fill={color} opacity="0.9" />
  </svg>
);

export const HandPaw = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="50" cy="65" rx="25" ry="20" fill={color} opacity="0.9" />
    <ellipse cx="28" cy="38" rx="10" ry="12" fill={color} opacity="0.88" />
    <ellipse cx="50" cy="30" rx="10" ry="12" fill={color} opacity="0.88" />
    <ellipse cx="72" cy="38" rx="10" ry="12" fill={color} opacity="0.88" />
    <ellipse cx="40" cy="60" rx="5" ry="6" fill="white" opacity="0.25" />
  </svg>
);

export const HandLock = ({ size = 48, color = '#60a5fa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <rect x="22" y="50" width="56" height="40" rx="4" fill={color} opacity="0.92" />
    <path d="M35 50 L35 35 Q35 20 50 20 Q65 20 65 35 L65 50" stroke={color} strokeWidth="6" fill="none" opacity="0.9" />
    <path d="M42 50 L42 38 Q42 28 50 28 Q58 28 58 38 L58 50" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6" />
    <circle cx="50" cy="68" r="6" fill="#1e3a8a" opacity="0.8" />
    <path d="M50 68 L50 80" stroke="#1e3a8a" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
  </svg>
);

export const HandFire = ({ size = 48, color = '#f97316' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 5 Q65 25 60 45 Q75 35 75 55 Q85 50 80 70 Q92 65 82 85 Q85 95 70 95 Q75 85 65 85 Q65 75 50 75 Q35 75 35 85 Q25 85 30 95 Q15 95 18 85 Q8 65 20 70 Q15 50 25 55 Q25 35 40 45 Q35 25 50 5" 
      fill={color} opacity="0.92" />
    <path d="M50 25 Q58 38 55 52 Q65 45 62 60 Q70 56 66 72 Q75 70 68 82 Q72 88 62 88 Q65 80 58 80 Q58 72 50 72 Q42 72 42 80 Q35 80 38 88 Q28 88 32 82 Q25 70 35 72 Q31 56 40 60 Q37 45 50 25" 
      fill="#fbbf24" opacity="0.85" />
    <path d="M50 45 Q54 55 52 65 Q58 60 56 72 Q62 70 58 80 Q62 82 56 82 Q58 76 52 76 Q52 68 50 68 Q48 68 48 76 Q42 76 44 82 Q38 82 42 80 Q38 70 44 72 Q42 60 50 45" 
      fill="#fef3c7" opacity="0.9" />
  </svg>
);

export const HandRain = ({ size = 48, color = '#7dd3fc' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="35" cy="35" rx="22" ry="18" fill="#e5e7eb" opacity="0.9" />
    <ellipse cx="55" cy="30" rx="25" ry="20" fill="#e5e7eb" opacity="0.92" />
    <ellipse cx="72" cy="35" rx="18" ry="15" fill="#e5e7eb" opacity="0.88" />
    <path d="M30 55 Q32 65 30 75" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
    <path d="M45 58 Q47 70 45 82" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    <path d="M60 55 Q62 68 60 78" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
    <path d="M75 52 Q77 62 75 72" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.75" />
  </svg>
);

export const HandCloudy = ({ size = 48, color = '#d1d5db' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="30" cy="45" rx="22" ry="18" fill={color} opacity="0.9" />
    <ellipse cx="50" cy="40" rx="25" ry="20" fill="#e5e7eb" opacity="0.92" />
    <ellipse cx="70" cy="45" rx="20" ry="16" fill={color} opacity="0.88" />
    <ellipse cx="50" cy="55" rx="32" ry="14" fill={color} opacity="0.85" />
    <ellipse cx="40" cy="38" rx="8" ry="6" fill="white" opacity="0.4" />
    <circle cx="55" cy="48" r="6" fill="#fbbf24" opacity="0.95" />
  </svg>
);

export const HandSunset = ({ size = 48, color = '#fb923c' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <rect x="0" y="60" width="100" height="40" fill="#86efac" opacity="0.8" />
    <path d="M0 60 Q25 50 50 60 Q75 70 100 60 L100 65 Q75 75 50 65 Q25 55 0 65 Z" fill={color} opacity="0.7" />
    <circle cx="75" cy="40" r="18" fill="#fef08a" opacity="0.95" />
    <path d="M75 20 L73 30 L63 30 L71 36 L69 46 L75 40 L81 46 L79 36 L87 30 L77 30 Z" fill="#fbbf24" opacity="0.8" />
    <path d="M20 70 L25 60 L30 70" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M40 72 L48 58 L56 72" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M65 70 L72 55 L79 70" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.6" />
  </svg>
);

export const HandHeartWand = ({ size = 48, color = '#ec4899' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 12 L48 30 L50 40 L52 30 Z" stroke="#78350f" strokeWidth="3" fill="none" opacity="0.8" />
    <path d="M48 40 L50 70 L52 40" stroke="#78350f" strokeWidth="3" fill="none" opacity="0.8" />
    <path d="M35 82 Q15 55 10 35 Q4 15 22 10 Q36 4 45 18 Q50 5 55 18 Q64 4 78 10 Q96 15 90 35 Q85 55 65 82 Q55 95 50 95 Q45 95 35 82" 
      fill={color} opacity="0.92" />
    <path d="M40 30 L44 35 L40 40 M60 30 L56 35 L60 40 M30 50 L35 55 L30 60 M70 50 L65 55 L70 60 M50 75 L50 82" 
      stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <ellipse cx="25" cy="28" rx="8" ry="6" fill="white" opacity="0.2" />
  </svg>
);

export const HandMagic = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 5 L53 45 L92 50 L53 55 L50 95 L47 55 L8 50 L47 45 Z" fill={color} opacity="0.9" />
    <path d="M50 15 L52 45 L80 50 L52 55 L50 85 L48 55 L20 50 L48 45 Z" fill="#c4b5fd" opacity="0.6" />
    <circle cx="50" cy="50" r="8" fill="#fef3c7" opacity="0.9" />
    <circle cx="30" cy="25" r="4" fill={color} opacity="0.8" />
    <circle cx="75" cy="20" r="3" fill={color} opacity="0.7" />
    <circle cx="78" cy="72" r="4" fill={color} opacity="0.8" />
    <circle cx="22" cy="75" r="3" fill={color} opacity="0.7" />
    <circle cx="18" cy="50" r="2" fill={color} opacity="0.6" />
    <circle cx="82" cy="50" r="2" fill={color} opacity="0.6" />
  </svg>
);

export const HandPhoto = ({ size = 48, color = '#fef3c7' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <rect x="12" y="20" width="76" height="65" rx="3" fill={color} opacity="0.95" stroke="#fcd34d" strokeWidth="2" />
    <circle cx="35" cy="42" r="10" fill="#f97316" opacity="0.8" />
    <path d="M15 70 L40 50 L55 62 L75 42 L85 52 L85 75 L15 75 Z" fill="#86efac" opacity="0.8" />
    <path d="M30 78 L35 72 L42 80 L50 70 L58 80 L65 72 L70 78" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.7" />
    <circle cx="70" cy="32" r="6" fill="#fbbf24" opacity="0.9" />
  </svg>
);

export const HandFrame = ({ size = 48, color = '#d4a574' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <rect x="10" y="15" width="80" height="70" rx="2" fill={color} opacity="0.95" stroke="#92400e" strokeWidth="3" />
    <rect x="18" y="23" width="64" height="54" fill="#fef3c7" opacity="0.9" />
    <circle cx="35" cy="40" r="8" fill="#fbbf24" opacity="0.7" />
    <path d="M20 70 L35 50 L50 62 L65 45 L80 60 L80 75 L20 75 Z" fill="#86efac" opacity="0.8" />
    <path d="M10 90 L30 70 L40 82 L50 70 L60 82 L70 70 L90 90" stroke={color} strokeWidth="4" fill="none" opacity="0.6" />
  </svg>
);

export const HandGiftHeart = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <rect x="15" y="45" width="70" height="45" rx="3" fill={color} opacity="0.9" />
    <rect x="15" y="35" width="70" height="15" rx="3" fill="#f9a8d4" opacity="0.88" />
    <rect x="45" y="35" width="10" height="55" fill="#fbbf24" opacity="0.8" />
    <path d="M40 35 Q50 22 50 35 Q50 22 60 35" stroke="#fbbf24" strokeWidth="5" fill="none" opacity="0.85" />
    <path d="M50 75 Q40 55 50 45 Q60 55 50 75" fill="#e11d48" opacity="0.95" />
    <ellipse cx="46" cy="50" rx="5" ry="4" fill="white" opacity="0.25" />
  </svg>
);

export const HandBalloonHeart = ({ size = 48, color = '#fb7185' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="50" cy="38" rx="26" ry="32" fill={color} opacity="0.9" />
    <path d="M50 70 L44 80 L56 80 Z" fill={color} opacity="0.9" />
    <path d="M44 80 Q42 90 50 95" stroke="#92400e" strokeWidth="1.5" fill="none" />
    <path d="M56 80 Q58 90 50 95" stroke="#92400e" strokeWidth="1.5" fill="none" />
    <path d="M42 55 Q35 40 42 30 Q48 40 42 55" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M58 55 Q65 40 58 30 Q52 40 58 55" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M50 82 L50 95" stroke="#92400e" strokeWidth="1.5" fill="none" />
  </svg>
);

export const HandDiamond = ({ size = 48, color = '#60a5fa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 10 L85 40 L50 90 L15 40 Z" fill={color} opacity="0.9" stroke="#3b82f6" strokeWidth="2" />
    <path d="M50 10 L15 40 L50 50 L85 40 Z" fill="#93c5fd" opacity="0.85" />
    <path d="M15 40 L50 50 L50 90 Z" fill="#2563eb" opacity="0.8" />
    <path d="M85 40 L50 50 L50 90 Z" fill="#1d4ed8" opacity="0.75" />
    <path d="M50 10 L50 50" stroke="#bfdbfe" strokeWidth="1.5" opacity="0.6" />
    <path d="M15 40 L85 40" stroke="#bfdbfe" strokeWidth="1" opacity="0.4" />
    <circle cx="35" cy="35" r="4" fill="white" opacity="0.4" />
  </svg>
);

export const HandHouseHeart = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 12 L85 45 L85 88 L15 88 L15 45 Z" fill={color} opacity="0.9" stroke="#db2777" strokeWidth="2" />
    <path d="M50 12 L85 45 L50 38 L15 45 Z" fill="#fb7185" opacity="0.85" />
    <path d="M40 55 L40 88 L60 88 L60 55 L55 45 L45 45 Z" fill="#fef3c7" opacity="0.9" />
    <path d="M50 88 Q40 65 50 52 Q60 65 50 88" fill="#ec4899" opacity="0.95" />
    <ellipse cx="45" cy="60" rx="4" ry="3" fill="white" opacity="0.25" />
    <circle cx="30" cy="35" r="3" fill="white" opacity="0.3" />
    <circle cx="70" cy="35" r="3" fill="white" opacity="0.3" />
  </svg>
);

export const HandThought = ({ size = 48, color = '#f9a8d4' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M20 35 Q20 20 35 20 L75 20 Q90 20 90 35 L90 55 Q90 70 75 70 L45 70 L35 85 L40 70 L35 70 Q20 70 20 55 Z" 
      fill={color} opacity="0.92" stroke="#f472b6" strokeWidth="2" />
    <circle cx="35" cy="38" r="4" fill="#db2777" opacity="0.8" />
    <circle cx="50" cy="40" r="4" fill="#db2777" opacity="0.8" />
    <circle cx="65" cy="38" r="4" fill="#db2777" opacity="0.8" />
    <circle cx="15" cy="82" r="5" fill={color} opacity="0.7" stroke="#f472b6" strokeWidth="1.5" />
    <circle cx="8" cy="92" r="3" fill={color} opacity="0.6" stroke="#f472b6" strokeWidth="1" />
  </svg>
);

export const HandShootingStar = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M75 20 Q55 35 30 90" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.85" />
    <path d="M30 90 L20 85 M30 90 L25 95 M30 90 L35 95" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    <path d="M25 15 L32 25 L40 18 L35 28 L45 25 L38 32 L50 35 L38 38 L45 45 L35 42 L40 52 L32 45 L25 55 L30 42 L22 38 L28 35 L18 32 L28 28 L25 18 L32 25 Z" 
      fill={color} opacity="0.95" />
    <path d="M28 20 L33 25 L40 20 L35 27 L42 25 L36 30 L42 35 L36 33 L38 40 L33 35 L28 38 L32 32 L25 28 L30 32 L22 28 L28 25 Z" 
      fill="#fef3c7" opacity="0.6" />
    <circle cx="70" cy="40" r="2" fill={color} opacity="0.6" />
    <circle cx="85" cy="55" r="1.5" fill={color} opacity="0.5" />
    <circle cx="60" cy="30" r="1.5" fill={color} opacity="0.5" />
  </svg>
);

export const HandLeaves = ({ size = 48, color = '#22c55e' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M30 85 Q20 70 25 55 Q15 45 30 35 Q25 20 40 15 Q50 8 55 20 Q65 15 75 30 Q90 35 85 55 Q95 65 80 75 Q85 90 60 90 Q45 95 30 85" 
      fill={color} opacity="0.9" />
    <path d="M55 85 Q60 65 55 45 Q50 25 55 15" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
    <path d="M52 50 Q42 46 32 52" stroke="#15803d" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M58 65 Q70 60 78 68" stroke="#15803d" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
    <path d="M52 78 Q45 76 38 82" stroke="#15803d" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const HandBell = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 10 L50 20" stroke="#78350f" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
    <ellipse cx="50" cy="18" rx="8" ry="6" fill={color} opacity="0.95" />
    <path d="M25 55 Q25 30 50 25 Q75 30 75 55 L80 55 Q85 55 85 65 L85 70 Q85 75 80 78 L20 78 Q15 75 15 70 L15 65 Q15 55 20 55 Z" 
      fill={color} opacity="0.9" stroke="#f59e0b" strokeWidth="2" />
    <ellipse cx="50" cy="78" rx="15" ry="6" fill="#fcd34d" opacity="0.95" />
    <path d="M45 78 L45 92 Q50 98 55 92 L55 78" fill={color} opacity="0.95" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="50" cy="96" r="4" fill="#fcd34d" opacity="0.9" />
    <circle cx="35" cy="45" r="4" fill="white" opacity="0.25" />
  </svg>
);

export const HandBook = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M15 20 L15 85 Q50 75 50 85 L50 20 Q32 28 15 20" fill={color} opacity="0.9" stroke="#7c3aed" strokeWidth="2" />
    <path d="M85 20 L85 85 Q50 75 50 85 L50 20 Q68 28 85 20" fill="#c4b5fd" opacity="0.88" stroke="#7c3aed" strokeWidth="2" />
    <line x1="50" y1="20" x2="50" y2="85" stroke="#7c3aed" strokeWidth="2" opacity="0.6" />
    <path d="M25 35 L42 32" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5" />
    <path d="M25 45 L40 42" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5" />
    <path d="M25 55 L38 52" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5" />
    <path d="M58 35 L75 32" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5" />
    <path d="M58 45 L73 42" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5" />
    <path d="M58 55 L72 52" stroke="#7c3aed" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export const HandPhone = ({ size = 48, color = '#22c55e' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M25 15 L25 85 Q50 95 75 85 L75 15 Q50 5 25 15" fill={color} opacity="0.9" stroke="#16a34a" strokeWidth="2" />
    <rect x="30" y="25" width="40" height="55" rx="2" fill="#1f2937" opacity="0.9" />
    <circle cx="50" cy="12" r="3" fill="#16a34a" opacity="0.8" />
    <path d="M40 30 L60 30 L60 50 L40 50 Z" fill={color} opacity="0.4" />
    <circle cx="50" cy="70" r="6" fill={color} opacity="0.85" />
    <circle cx="50" cy="70" r="3" fill="white" opacity="0.3" />
  </svg>
);

export const HandHome = ({ size = 48, color = '#f59e0b' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 12 L88 48 L88 88 L12 88 L12 48 Z" fill={color} opacity="0.9" stroke="#d97706" strokeWidth="2" />
    <path d="M50 12 L88 48 L50 40 L12 48 Z" fill="#fbbf24" opacity="0.85" />
    <rect x="35" y="55" width="30" height="33" fill="#fef3c7" opacity="0.9" stroke="#d97706" strokeWidth="1.5" />
    <circle cx="58" cy="72" r="3" fill="#d97706" opacity="0.8" />
    <rect x="42" y="42" width="16" height="16" fill="#fef3c7" opacity="0.8" stroke="#d97706" strokeWidth="1.5" />
    <line x1="50" y1="42" x2="50" y2="58" stroke="#d97706" strokeWidth="1" opacity="0.5" />
    <line x1="42" y1="50" x2="58" y2="50" stroke="#d97706" strokeWidth="1" opacity="0.5" />
  </svg>
);

export const HandGiftBox = ({ size = 48, color = '#ec4899' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <rect x="15" y="40" width="70" height="50" rx="4" fill={color} opacity="0.92" stroke="#db2777" strokeWidth="2" />
    <rect x="15" y="30" width="70" height="15" rx="4" fill="#f9a8d4" opacity="0.9" stroke="#db2777" strokeWidth="2" />
    <rect x="45" y="30" width="10" height="60" fill="#fbbf24" opacity="0.85" />
    <path d="M35 30 Q50 15 50 30 Q50 15 65 30" stroke="#fbbf24" strokeWidth="5" fill="none" opacity="0.9" />
    <path d="M30 30 Q40 12 50 30" stroke="#fbbf24" strokeWidth="4" fill="none" opacity="0.8" />
    <path d="M70 30 Q60 12 50 30" stroke="#fbbf24" strokeWidth="4" fill="none" opacity="0.8" />
  </svg>
);

export const HandCalendar = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <rect x="10" y="25" width="80" height="65" rx="4" fill={color} opacity="0.9" stroke="#db2777" strokeWidth="2" />
    <rect x="10" y="25" width="80" height="18" rx="4" fill="#f9a8d4" opacity="0.95" />
    <path d="M10 35 Q50 28 90 35 L90 25 L10 25 Z" fill="#fce7f3" opacity="0.8" />
    <line x1="25" y1="20" x2="25" y2="35" stroke="#db2777" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    <line x1="75" y1="20" x2="75" y2="35" stroke="#db2777" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    <rect x="20" y="48" width="15" height="15" rx="2" fill="white" opacity="0.8" />
    <rect x="42" y="48" width="15" height="15" rx="2" fill="white" opacity="0.8" />
    <rect x="65" y="48" width="15" height="15" rx="2" fill="white" opacity="0.8" />
    <rect x="20" y="70" width="15" height="15" rx="2" fill="white" opacity="0.8" />
    <rect x="42" y="70" width="15" height="15" rx="2" fill="white" opacity="0.8" />
    <rect x="65" y="70" width="15" height="15" rx="2" fill="white" opacity="0.8" />
    <path d="M20 60 L35 60 M20 75 L30 75" stroke="#fbcfe8" strokeWidth="1" opacity="0.6" />
    <path d="M42 60 L57 60" stroke="#fbcfe8" strokeWidth="1" opacity="0.6" />
    <path d="M65 60 L80 60" stroke="#fbcfe8" strokeWidth="1" opacity="0.6" />
  </svg>
);

export const HandEnvelopeHeart = ({ size = 48, color = '#fecdd3' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <rect x="10" y="25" width="80" height="55" rx="4" fill={color} opacity="0.95" stroke="#fda4af" strokeWidth="2" />
    <path d="M10 28 L50 58 L90 28" stroke="#fda4af" strokeWidth="2.5" fill="none" opacity="0.8" />
    <path d="M10 75 L35 52" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M90 75 L65 52" stroke="#fda4af" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M50 40 Q40 32 50 26 Q60 32 50 40" fill="#ec4899" opacity="0.95" />
    <path d="M50 40 L50 52 L44 56 Q50 60 56 56 L50 52" fill="#ec4899" opacity="0.9" />
    <circle cx="30" cy="45" r="3" fill="#fda4af" opacity="0.5" />
    <circle cx="70" cy="45" r="3" fill="#fda4af" opacity="0.5" />
  </svg>
);

export const HandTrophy = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M35 15 L35 35 Q20 35 20 50 Q20 65 35 65 L35 75 L65 75 L65 65 Q80 65 80 50 Q80 35 65 35 L65 15 Z" 
      fill={color} opacity="0.9" stroke="#f59e0b" strokeWidth="2" />
    <path d="M35 25 L65 25 L65 35 L35 35 Z" fill="#fcd34d" opacity="0.85" />
    <path d="M45 75 L45 90 L55 90 L55 75" fill="#d97706" opacity="0.9" />
    <rect x="40" y="88" width="20" height="6" rx="2" fill="#d97706" opacity="0.95" />
    <path d="M20 40 Q10 40 10 50 Q10 60 20 60 L35 55" stroke={color} strokeWidth="4" fill="none" opacity="0.8" />
    <path d="M80 40 Q90 40 90 50 Q90 60 80 60 L65 55" stroke={color} strokeWidth="4" fill="none" opacity="0.8" />
    <circle cx="50" cy="45" r="8" fill="#fef3c7" opacity="0.8" />
    <path d="M46 45 L50 40 L54 45 L50 50 Z" fill="#f59e0b" opacity="0.7" />
  </svg>
);

export const HandCrown = ({ size = 48, color = '#fbbf24' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M15 75 L15 45 L35 60 L50 30 L65 60 L85 45 L85 75 Z" fill={color} opacity="0.92" stroke="#f59e0b" strokeWidth="2" />
    <path d="M15 75 L85 75 L85 85 L15 85 Z" fill="#fcd34d" opacity="0.9" />
    <circle cx="50" cy="35" r="5" fill="#ef4444" opacity="0.9" />
    <circle cx="25" cy="52" r="4" fill="#ec4899" opacity="0.85" />
    <circle cx="75" cy="52" r="4" fill="#ec4899" opacity="0.85" />
    <circle cx="50" cy="80" r="4" fill="#fcd34d" opacity="0.6" />
    <circle cx="35" cy="80" r="3" fill="#fcd34d" opacity="0.5" />
    <circle cx="65" cy="80" r="3" fill="#fcd34d" opacity="0.5" />
  </svg>
);

export const HandGraduationCap = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M10 45 L50 30 L90 45 L50 60 Z" fill={color} opacity="0.9" stroke="#7c3aed" strokeWidth="2" />
    <path d="M50 30 L50 75" stroke="#7c3aed" strokeWidth="3" opacity="0.8" />
    <path d="M35 75 Q35 70 50 70 Q65 70 65 75 L70 75 Q70 90 50 90 Q30 90 30 75 Z" fill={color} opacity="0.85" />
    <path d="M50 70 L50 55 Q45 50 50 45" stroke="#7c3aed" strokeWidth="2" fill="none" opacity="0.6" />
    <circle cx="88" cy="50" r="6" fill="#fbbf24" opacity="0.9" />
    <path d="M88 44 L88 38" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
    <path d="M82 50 L76 50" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
    <circle cx="30" cy="38" r="3" fill="white" opacity="0.4" />
  </svg>
);

export const HandHandshake = ({ size = 48, color = '#f59e0b' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <ellipse cx="30" cy="55" rx="22" ry="18" fill={color} opacity="0.88" />
    <ellipse cx="70" cy="55" rx="22" ry="18" fill="#c4b5fd" opacity="0.88" />
    <path d="M30 45 L45 50 L50 45 L55 50 L70 45" stroke="#7c3aed" strokeWidth="3" fill="none" opacity="0.8" />
    <path d="M30 55 Q35 65 40 55 Q45 65 50 55 Q55 65 60 55 Q65 65 70 55" stroke="#d97706" strokeWidth="2" fill="none" opacity="0.7" />
    <circle cx="35" cy="48" r="2" fill="#78350f" opacity="0.6" />
    <circle cx="65" cy="48" r="2" fill="#78350f" opacity="0.6" />
  </svg>
);

export const HandKey = ({ size = 48, color = '#60a5fa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <circle cx="30" cy="35" r="18" fill="none" stroke={color} strokeWidth="5" opacity="0.9" />
    <circle cx="30" cy="35" r="10" fill={color} opacity="0.4" />
    <path d="M45 45 L85 85" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <path d="M65 65 L75 55" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
    <path d="M75 75 L82 68" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
    <circle cx="85" cy="85" r="5" fill={color} opacity="0.9" />
  </svg>
);

export const HandUmbrella = ({ size = 48, color = '#7dd3fc' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <path d="M50 15 Q10 20 10 50 Q10 80 50 80 Q90 80 90 50 Q90 20 50 15" fill={color} opacity="0.9" />
    <path d="M50 15 L50 85" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
    <path d="M50 85 Q50 95 40 95" stroke="#3b82f6" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8" />
    <path d="M25 40 Q35 45 45 40" stroke="#bae6fd" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M55 40 Q65 45 75 40" stroke="#bae6fd" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M30 55 Q40 60 50 55" stroke="#bae6fd" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M50 55 Q60 60 70 55" stroke="#bae6fd" strokeWidth="2" fill="none" opacity="0.5" />
    <circle cx="25" cy="70" r="3" fill="#60a5fa" opacity="0.6" />
    <circle cx="75" cy="70" r="3" fill="#60a5fa" opacity="0.6" />
    <circle cx="50" cy="75" r="3" fill="#60a5fa" opacity="0.6" />
  </svg>
);

export const HandPillow = ({ size = 48, color = '#f9a8d4' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <ellipse cx="50" cy="50" rx="38" ry="28" fill={color} opacity="0.9" stroke="#f472b6" strokeWidth="2" />
    <path d="M20 45 Q20 35 30 35 Q40 30 50 35 Q60 30 70 35 Q80 35 80 45" fill="#fce7f3" opacity="0.7" />
    <path d="M20 55 Q20 65 30 65 Q40 70 50 65 Q60 70 70 65 Q80 65 80 55" fill="#fce7f3" opacity="0.7" />
    <ellipse cx="35" cy="45" rx="8" ry="6" fill="white" opacity="0.3" />
    <path d="M45 50 Q50 55 55 50" stroke="#f472b6" strokeWidth="1.5" fill="none" opacity="0.4" />
  </svg>
);

export const HandTeddyBear = ({ size = 48, color = '#a78bfa' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil2)' }}>
    <circle cx="28" cy="28" r="12" fill={color} opacity="0.9" />
    <circle cx="72" cy="28" r="12" fill={color} opacity="0.9" />
    <ellipse cx="50" cy="55" rx="30" ry="32" fill={color} opacity="0.88" />
    <ellipse cx="50" cy="82" rx="18" ry="10" fill={color} opacity="0.85" />
    <ellipse cx="35" cy="88" rx="8" ry="6" fill="#c4b5fd" opacity="0.8" />
    <ellipse cx="65" cy="88" rx="8" ry="6" fill="#c4b5fd" opacity="0.8" />
    <circle cx="40" cy="48" r="4" fill="#1f2937" opacity="0.9" />
    <circle cx="60" cy="48" r="4" fill="#1f2937" opacity="0.9" />
    <circle cx="41" cy="47" r="1.5" fill="white" opacity="0.6" />
    <circle cx="61" cy="47" r="1.5" fill="white" opacity="0.6" />
    <ellipse cx="50" cy="58" rx="5" ry="4" fill="#f472b6" opacity="0.9" />
    <path d="M45 65 Q50 70 55 65" stroke="#7c3aed" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
    <path d="M30 32 Q35 28 38 32" stroke="#c4b5fd" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M62 32 Q65 28 70 32" stroke="#c4b5fd" strokeWidth="2" fill="none" opacity="0.5" />
  </svg>
);

export const HandBouquet = ({ size = 48, color = '#f472b6' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: 'inline-block', filter: 'url(#pencil)' }}>
    <path d="M50 75 L50 95" stroke="#65a30d" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
    <path d="M35 80 Q30 88 35 95" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    <path d="M65 80 Q70 88 65 95" stroke="#65a30d" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
    <ellipse cx="35" cy="40" rx="16" ry="18" fill="#ec4899" opacity="0.9" />
    <ellipse cx="65" cy="40" rx="16" ry="18" fill="#f9a8d4" opacity="0.88" />
    <ellipse cx="50" cy="30" rx="18" ry="20" fill={color} opacity="0.92" />
    <path d="M50 22 Q62 16 60 28 Q68 24 72 32 Q74 44 64 46 Q54 52 50 48" fill="#fb7185" opacity="0.9" />
    <ellipse cx="30" cy="35" rx="4" ry="3" fill="white" opacity="0.3" />
    <ellipse cx="60" cy="35" rx="4" ry="3" fill="white" opacity="0.3" />
    <ellipse cx="45" cy="25" rx="5" ry="4" fill="white" opacity="0.25" />
    <path d="M25 55 Q18 65 22 75" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M75 55 Q82 65 78 75" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M40 60 Q32 70 36 80" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M60 60 Q68 70 64 80" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M30 45 Q22 38 28 28" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M70 45 Q78 38 72 28" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.6" />
  </svg>
);