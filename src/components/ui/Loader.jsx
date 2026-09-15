import React, { useState, useEffect } from 'react';

/**
 * Realistic 3D Rocket Launch Preloader & Theatrical Curtain Lift Reveal
 * Features:
 * - Single-session playback (only runs on first page visit per session)
 * - Photorealistic 3D vector rocket with dual-tone rim lighting (Cyan left, Orange right)
 * - Luminous cyan cockpit porthole with glass glare reflection
 * - Aerodynamic side booster nacelles with incandescent underbelly glow
 * - Volumetric billowing launch smoke clouds with internal fire illumination
 * - Smooth stage curtain roll-up reveal at 100%
 */
const Loader = ({ onComplete }) => {
  const [shouldShow, setShouldShow] = useState(() => {
    // Only show on first visit in the current browser session
    try {
      return !sessionStorage.getItem('optimizers_preloader_seen');
    } catch {
      return true;
    }
  });

  const [progress, setProgress] = useState(0);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!shouldShow) {
      if (onComplete) onComplete();
      return;
    }

    // Dynamic launch progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLaunching(true);

          try {
            sessionStorage.setItem('optimizers_preloader_seen', 'true');
          } catch (e) {
            // Ignore storage errors in restricted contexts
          }

          // Curtain roll-up and blastoff duration
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 1100);
          return 100;
        }
        const step = prev < 45 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + step, 100);
      });
    }, 75);

    return () => clearInterval(interval);
  }, [shouldShow, onComplete]);

  if (!shouldShow || isDone) return null;

  return (
    <div
      aria-label="Loading Website"
      className={`fixed inset-0 z-[999999] bg-[#07090e] flex flex-col items-center justify-between select-none overflow-hidden transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isLaunching ? '-translate-y-full shadow-[0_30px_90px_rgba(0,0,0,0.95)]' : 'translate-y-0'
      }`}
    >
      {/* Deep Space Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#101b2d_0%,#080b12_55%,#040508_100%)] pointer-events-none" />

      {/* Atmospheric Starfield Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-40 animate-pulse"
            style={{
              top: `${(i * 19) % 95}%`,
              left: `${(i * 31) % 95}%`,
              width: `${(i % 3) + 1.2}px`,
              height: `${(i % 3) + 1.2}px`,
              animationDelay: `${(i % 6) * 0.3}s`,
              animationDuration: `${(i % 4) + 1.6}s`,
            }}
          />
        ))}
      </div>

      {/* Top Spacer */}
      <div className="w-full h-10" />

      {/* Central Launch Stage */}
      <div className="relative z-20 flex flex-col items-center justify-center my-auto w-full max-w-lg px-4">
        
        {/* Rocket Container with Launch Shudder and Blastoff */}
        <div
          className={`relative flex flex-col items-center transition-all duration-1000 ease-in ${
            isLaunching
              ? '-translate-y-[160vh] scale-90 opacity-95'
              : 'animate-rocket-rumble'
          }`}
        >
          {/* Photorealistic 3D Spacecraft Vector */}
          <svg
            className="w-36 h-56 sm:w-44 sm:h-72 drop-shadow-[0_20px_45px_rgba(61,173,236,0.4)]"
            viewBox="0 0 240 340"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Cylindrical 3D Fuselage Shading (Metallic titanium with cyan & orange rim lights) */}
              <linearGradient id="fuselage3D" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a5f" />      {/* Cyan ambient rim on left */}
                <stop offset="12%" stopColor="#2c3e50" />
                <stop offset="28%" stopColor="#8da0b6" />
                <stop offset="46%" stopColor="#ffffff" />     {/* Center specular highlight */}
                <stop offset="68%" stopColor="#d1dbe5" />
                <stop offset="85%" stopColor="#452a1e" />     {/* Warm ambient on right */}
                <stop offset="100%" stopColor="#e26d22" />    {/* Orange rim on right */}
              </linearGradient>

              {/* Nose Cone Tip Highlight */}
              <linearGradient id="noseTip3D" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a5f" />
                <stop offset="40%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#b4c4d5" />
                <stop offset="100%" stopColor="#b84508" />
              </linearGradient>

              {/* Left Booster Pod Shading */}
              <linearGradient id="boosterLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3DADEC" />
                <stop offset="25%" stopColor="#33475b" />
                <stop offset="75%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#1a2530" />
              </linearGradient>

              {/* Right Booster Pod Shading */}
              <linearGradient id="boosterRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a2530" />
                <stop offset="40%" stopColor="#64748b" />
                <stop offset="80%" stopColor="#4a2a1c" />
                <stop offset="100%" stopColor="#e26d22" />
              </linearGradient>

              {/* Incandescent Engine Heat Glow */}
              <radialGradient id="engineHeat" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#ffaa00" />
                <stop offset="80%" stopColor="#e26d22" />
                <stop offset="100%" stopColor="#301507" />
              </radialGradient>

              {/* Glowing Cockpit Glass Lens */}
              <radialGradient id="cockpitCore" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#6ee7b7" />
                <stop offset="60%" stopColor="#3DADEC" />
                <stop offset="90%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#082f49" />
              </radialGradient>
            </defs>

            {/* Left Aerodynamic Booster Nacelle */}
            <path
              d="M 64 150 C 52 180 38 230 34 265 C 48 260 68 245 74 225 L 76 155 Z"
              fill="url(#boosterLeft)"
              stroke="#253545"
              strokeWidth="1.2"
            />
            {/* Left Booster Orange Intake Under-fin */}
            <path
              d="M 34 265 C 30 280 48 285 62 270 C 52 270 40 268 34 265 Z"
              fill="#e26d22"
              filter="drop-shadow(0 0 8px #e26d22)"
            />

            {/* Right Aerodynamic Booster Nacelle */}
            <path
              d="M 176 150 C 188 180 202 230 206 265 C 192 260 172 245 166 225 L 164 155 Z"
              fill="url(#boosterRight)"
              stroke="#3a271d"
              strokeWidth="1.2"
            />
            {/* Right Booster Orange Intake Under-fin */}
            <path
              d="M 206 265 C 210 280 192 285 178 270 C 188 270 200 268 206 265 Z"
              fill="#e26d22"
              filter="drop-shadow(0 0 8px #e26d22)"
            />

            {/* Main Center Fuselage Body */}
            <path
              d="M 120 18 C 88 65 76 150 76 255 L 164 255 C 164 150 152 65 120 18 Z"
              fill="url(#fuselage3D)"
              stroke="#334155"
              strokeWidth="1.5"
            />

            {/* Nosecone Specular Curve */}
            <path
              d="M 120 18 C 104 55 96 95 92 125 L 148 125 C 144 95 136 55 120 18 Z"
              fill="url(#noseTip3D)"
              opacity="0.9"
            />

            {/* Vertical Specular Center Seam */}
            <line
              x1="120"
              y1="35"
              x2="120"
              y2="255"
              stroke="#ffffff"
              strokeWidth="2"
              strokeOpacity="0.55"
            />

            {/* Glowing Cockpit Porthole Rim & Radiant Glass */}
            <circle
              cx="120"
              cy="115"
              r="26"
              fill="#0a131f"
              stroke="#334155"
              strokeWidth="4"
            />
            <circle
              cx="120"
              cy="115"
              r="21"
              fill="url(#cockpitCore)"
              className="animate-pulse"
              filter="drop-shadow(0 0 16px #3DADEC)"
            />
            {/* Glass Glare Highlight */}
            <ellipse
              cx="113"
              cy="108"
              rx="7"
              ry="4"
              fill="#ffffff"
              opacity="0.85"
              transform="rotate(-30 113 108)"
            />

            {/* Mid-Fuselage Titanium Structural Seam */}
            <path
              d="M 82 195 L 158 195"
              stroke="#1a2634"
              strokeWidth="2.5"
            />
            <rect
              x="110"
              y="193"
              width="20"
              height="4.5"
              rx="2.25"
              fill="#e26d22"
            />

            {/* Bottom Engine Bell Nozzle */}
            <path
              d="M 94 255 L 146 255 L 136 280 L 104 280 Z"
              fill="#0d1117"
              stroke="#e26d22"
              strokeWidth="2.5"
            />
            {/* Blazing Engine Nozzle Core Lip */}
            <ellipse
              cx="120"
              cy="280"
              rx="16"
              ry="5"
              fill="url(#engineHeat)"
              filter="drop-shadow(0 0 12px #ffaa00)"
            />
          </svg>

          {/* Piercing Hypersonic Engine Flame Blast */}
          <div className="relative -mt-3 flex flex-col items-center pointer-events-none">
            {/* Outer Radiant Golden-Orange Plasma Plume */}
            <div className="w-16 sm:w-20 h-32 sm:h-44 bg-gradient-to-b from-[#ffffff] via-[#ffaa00] via-35% via-[#e26d22] to-transparent rounded-b-full blur-[1px] animate-flame-pulse shadow-[0_0_60px_rgba(226,109,34,0.95)]" />
            {/* Inner White-Hot Shock Jet */}
            <div className="absolute top-0 w-7 sm:w-8 h-20 sm:h-28 bg-gradient-to-b from-white via-[#8fe0ff] to-transparent rounded-b-full animate-flame-inner shadow-[0_0_30px_#ffffff]" />
          </div>
        </div>

        {/* Voluminous Launch Pad Billowing Smoke Clouds */}
        <div className="relative -mt-20 sm:-mt-24 w-full flex items-center justify-center pointer-events-none z-10">
          
          {/* Intense Internal Fire Glow */}
          <div className="absolute w-52 sm:w-72 h-32 bg-[#e26d22] rounded-full blur-3xl opacity-80 animate-pulse" />
          <div className="absolute w-72 sm:w-96 h-36 bg-[#3DADEC] rounded-full blur-3xl opacity-35" />

          {/* 3D Billowing Cumulus Smoke Puff Layers */}
          <div className="relative w-80 sm:w-[420px] h-32 flex items-center justify-center">
            {/* Left Deep Smoke Puff */}
            <div className="absolute left-0 bottom-0 w-44 sm:w-52 h-28 sm:h-32 bg-gradient-to-t from-[#090d14] via-[#2d1e18] to-[#e26d22]/60 rounded-full blur-md animate-smoke-1 opacity-95 shadow-2xl" />
            
            {/* Right Deep Smoke Puff */}
            <div className="absolute right-0 bottom-0 w-44 sm:w-52 h-28 sm:h-32 bg-gradient-to-t from-[#090d14] via-[#2d1e18] to-[#e26d22]/60 rounded-full blur-md animate-smoke-2 opacity-95 shadow-2xl" />
            
            {/* Center Thick Launch Cushion */}
            <div className="absolute bottom-1 w-52 sm:w-64 h-24 sm:h-28 bg-gradient-to-t from-[#101722] via-[#ff9900]/50 to-white/70 rounded-full blur-lg animate-pulse opacity-90" />
          </div>
        </div>

        {/* Dynamic Progress Bar & Telemetry */}
        <div className="relative z-30 mt-6 flex flex-col items-center gap-3 w-full">
          {/* Percentage */}
          <div className="font-mono text-3xl sm:text-4xl font-black text-white tracking-widest flex items-baseline drop-shadow-lg">
            <span>{progress}</span>
            <span className="text-sm text-[#3DADEC] ml-1.5 font-bold">%</span>
          </div>

          {/* Glowing Dual-Tone Progress Bar */}
          <div className="w-64 sm:w-80 h-2 bg-[#121722] rounded-full overflow-hidden border border-slate-800 p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#3DADEC] via-[#ffaa00] to-[#e26d22] rounded-full transition-all duration-100 ease-out shadow-[0_0_15px_rgba(61,173,236,0.85)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status Label */}
          <span className="text-xs tracking-widest font-semibold uppercase text-slate-400 font-mono">
            {progress < 35
              ? 'IGNITING PROPULSION ENGINES...'
              : progress < 75
              ? 'OPTIMIZING GLOBAL MESH...'
              : progress < 100
              ? 'MAXIMUM THRUST ACHIEVED...'
              : 'LAUNCHING OPTIMIZERS PLATFORM...'}
          </span>
        </div>

      </div>

      {/* Bottom Glowing Stage Curtain Laser Trim */}
      <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-[#3DADEC] via-50% via-[#e26d22] to-transparent shadow-[0_0_25px_#3DADEC] relative z-30" />
    </div>
  );
};

export default Loader;
