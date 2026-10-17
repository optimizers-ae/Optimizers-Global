import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const SESSION_KEY = 'optimizers_curtains_played';

export function useCurtains({ onComplete } = {}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const overlayRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const seamRef = useRef(null);
  const centerAccentRef = useRef(null);
  const pixelTilesRef = useRef([]);

  // Check if we should play this session
  useEffect(() => {
    // Development replay triggers: ?replay=true, ?curtains=true, or window.__replayCurtains()
    const urlParams = new URLSearchParams(window.location.search);
    const forceReplay = urlParams.has('replay') || urlParams.get('curtains') === 'true';
    const skipCurtains = urlParams.has('skip') || urlParams.get('curtains') === 'false';

    // Accessibility check: prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check session storage safely
    let hasPlayed = false;
    try {
      hasPlayed = sessionStorage.getItem(SESSION_KEY) === 'true';
    } catch (e) {
      // Storage access disabled or exception
      hasPlayed = false;
    }

    // Expose dev helper
    window.__replayCurtains = () => {
      try {
        sessionStorage.removeItem(SESSION_KEY);
      } catch (e) {}
      window.location.search = '?replay=true';
    };

    if (!skipCurtains && (forceReplay || (!hasPlayed && !prefersReducedMotion))) {
      setIsPlaying(true);
      setIsMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsPlaying(false);
      setIsMounted(false);
    }
  }, []);

  // GSAP animation sequence
  useEffect(() => {
    if (!isPlaying || !isMounted || !overlayRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Cleanup & record session
          try {
            sessionStorage.setItem(SESSION_KEY, 'true');
          } catch (e) {}

          document.body.style.overflow = '';
          setIsPlaying(false);
          setIsMounted(false);
          window.__curtainsTimeline = null;

          if (typeof onComplete === 'function') {
            onComplete();
          }

          // Broadcast custom event for other sections if needed
          window.dispatchEvent(new CustomEvent('optimizers:curtains-complete'));
        },
      });

      // Expose timeline for debugging / testing
      window.__curtainsTimeline = tl;

      // ── Phase 1: Initial Screen (0 - 300ms) ──
      // Seam glow and center marker micro-pulse
      if (centerAccentRef.current) {
        tl.fromTo(
          centerAccentRef.current,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' },
          0
        );
      }

      if (seamRef.current) {
        tl.fromTo(
          seamRef.current,
          { opacity: 0, scaleY: 0.8 },
          { opacity: 1, scaleY: 1, duration: 0.35, ease: 'power2.out' },
          0.05
        );
      }

      // ── Phase 2: Curtain Split Animation (350ms - 1200ms) ──
      // Central seam fades & expands slightly before parting
      if (seamRef.current) {
        tl.to(
          seamRef.current,
          {
            opacity: 0,
            scaleX: 2,
            duration: 0.35,
            ease: 'power2.in',
          },
          0.38
        );
      }

      if (centerAccentRef.current) {
        tl.to(
          centerAccentRef.current,
          {
            scale: 1.8,
            opacity: 0,
            duration: 0.35,
            ease: 'power2.in',
          },
          0.38
        );
      }

      // Left and right curtain panels slide smoothly outward
      if (leftCurtainRef.current && rightCurtainRef.current) {
        tl.to(
          leftCurtainRef.current,
          {
            xPercent: -100,
            duration: 1.05,
            ease: 'power3.inOut',
          },
          0.4
        );

        tl.to(
          rightCurtainRef.current,
          {
            xPercent: 100,
            duration: 1.05,
            ease: 'power3.inOut',
          },
          0.4
        );
      }

      // ── Phase 3: Pixel Dissolve & Wipe Edge Transition (500ms - 1000ms) ──
      // Subtle staggered pixel tiles along seam edge dissolve as curtains split
      const validTiles = pixelTilesRef.current.filter(Boolean);
      if (validTiles.length > 0) {
        tl.to(
          validTiles,
          {
            scale: 0,
            opacity: 0,
            x: (i) => (i % 2 === 0 ? -18 : 18),
            rotation: () => gsap.utils.random(-15, 15),
            duration: 0.45,
            stagger: {
              amount: 0.35,
              from: 'random',
            },
            ease: 'power2.inOut',
          },
          0.48
        );
      }

      // ── Phase 4: Homepage Hero Reveal & Depth Focus (950ms - 1700ms) ──
      // Trigger Hero component entrance and animate camera walk-in depth effect
      tl.call(
        () => {
          window.dispatchEvent(new CustomEvent('optimizers:curtains-reveal'));
        },
        null,
        0.95
      );

      const heroEl = document.getElementById('hero-section');
      if (heroEl) {
        tl.fromTo(
          heroEl,
          { scale: 0.98, opacity: 0.88 },
          { scale: 1.0, opacity: 1.0, duration: 0.85, ease: 'power2.out' },
          0.95
        );
      }

      // ── Phase 5: Final Overlay Dissolve & Fade (1550ms - 1900ms) ──
      if (overlayRef.current) {
        tl.to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.35,
            ease: 'power2.out',
          },
          1.55
        );
      }
    }, overlayRef);

    return () => {
      // Ensure scroll locking is never stuck
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, [isPlaying, isMounted, onComplete]);

  return {
    isPlaying,
    isMounted,
    overlayRef,
    leftCurtainRef,
    rightCurtainRef,
    seamRef,
    centerAccentRef,
    pixelTilesRef,
  };
}
