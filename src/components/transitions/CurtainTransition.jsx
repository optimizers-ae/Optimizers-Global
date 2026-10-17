import React from 'react';
import { useCurtains } from '../../hooks/useCurtains';
import '../../styles/curtain-transition.css';

// Varied pixel tile dimensions along the curtain parting seam
const TILE_DATA = [
  { w: 22, h: 26 },
  { w: 16, h: 34 },
  { w: 28, h: 20 },
  { w: 14, h: 38 },
  { w: 24, h: 28 },
  { w: 18, h: 32 },
  { w: 30, h: 24 },
  { w: 20, h: 36 },
  { w: 26, h: 22 },
  { w: 15, h: 40 },
  { w: 28, h: 26 },
  { w: 19, h: 30 },
  { w: 32, h: 24 },
  { w: 16, h: 38 },
  { w: 25, h: 28 },
  { w: 18, h: 34 },
];

export default function CurtainTransition({ onComplete }) {
  const {
    isMounted,
    overlayRef,
    leftCurtainRef,
    rightCurtainRef,
    seamRef,
    centerAccentRef,
    pixelTilesRef,
  } = useCurtains({ onComplete });

  if (!isMounted) return null;

  return (
    <aside
      ref={overlayRef}
      className="curtain-overlay"
      aria-hidden="true"
      role="presentation"
    >
      {/* ── Left Curtain Panel (covers 50% from left) ── */}
      <div
        ref={leftCurtainRef}
        className="curtain-panel curtain-panel-left flex justify-end"
      >
        {/* Subtle high-tech grid */}
        <div className="curtain-grid-bg" />

        {/* Ambient top cyan flare */}
        <div
          className="absolute -top-32 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, #00C8E8 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Directional wipe glow along parting edge */}
        <div
          className="absolute top-0 bottom-0 right-0 w-24 pointer-events-none"
          style={{
            background:
              'linear-gradient(to left, rgba(0, 200, 232, 0.16) 0%, transparent 100%)',
          }}
        />

        {/* Left pixel dissolve column along seam edge */}
        <div className="pixel-dissolve-col right-0 items-end">
          {TILE_DATA.map((tile, i) => (
            <div
              key={`tile-left-${i}`}
              ref={(el) => {
                if (el) pixelTilesRef.current[i] = el;
              }}
              className="pixel-tile"
              style={{
                width: `${tile.w}px`,
                height: `${tile.h}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Right Curtain Panel (covers 50% from right) ── */}
      <div
        ref={rightCurtainRef}
        className="curtain-panel curtain-panel-right flex justify-start"
      >
        {/* Subtle high-tech grid */}
        <div className="curtain-grid-bg" />

        {/* Ambient bottom cyan flare */}
        <div
          className="absolute -bottom-32 left-0 w-80 h-80 rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, #00C8E8 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Directional wipe glow along parting edge */}
        <div
          className="absolute top-0 bottom-0 left-0 w-24 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0, 200, 232, 0.16) 0%, transparent 100%)',
          }}
        />

        {/* Right pixel dissolve column along seam edge */}
        <div className="pixel-dissolve-col left-0 items-start">
          {TILE_DATA.map((tile, i) => (
            <div
              key={`tile-right-${i}`}
              ref={(el) => {
                if (el) pixelTilesRef.current[TILE_DATA.length + i] = el;
              }}
              className="pixel-tile"
              style={{
                width: `${tile.w}px`,
                height: `${tile.h}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Glowing Center Seam Line ── */}
      <div ref={seamRef} className="curtain-seam" />

      {/* ── Minimal Center Seam Accent (Cyan with Orange Transitional Core) ── */}
      <div
        ref={centerAccentRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center"
      >
        {/* Outer glowing cyan diamond / pulse ring */}
        <div className="w-9 h-9 rounded-full border border-[#00C8E8]/70 bg-[#020C10] flex items-center justify-center shadow-[0_0_20px_rgba(0,200,232,0.8)]">
          {/* Inner transitional warm orange core */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF7900] shadow-[0_0_10px_#FF7900]" />
        </div>
      </div>
    </aside>
  );
}
