import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { MapPin } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import {
  computePortraitTilt,
  NEUTRAL_PORTRAIT_TILT,
  type PortraitTiltState,
} from '../utils/portfolioLogic';

export function InteractivePortrait() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<PortraitTiltState>(NEUTRAL_PORTRAIT_TILT);
  const [isHovered, setIsHovered] = useState(false);
  const [canHoverTilt, setCanHoverTilt] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncPreferences = () => {
      setCanHoverTilt(hoverQuery.matches && !motionQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    syncPreferences();
    hoverQuery.addEventListener('change', syncPreferences);
    motionQuery.addEventListener('change', syncPreferences);

    return () => {
      hoverQuery.removeEventListener('change', syncPreferences);
      motionQuery.removeEventListener('change', syncPreferences);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!canHoverTilt || !stageRef.current) {
      return;
    }
    const rect = stageRef.current.getBoundingClientRect();
    setTilt(computePortraitTilt(event.clientX, event.clientY, rect, 11, 10));
  };

  const handleMouseEnter = () => {
    if (!canHoverTilt) {
      return;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt(NEUTRAL_PORTRAIT_TILT);
  };

  const interactiveTransform =
    !reducedMotion && isHovered
      ? `translate3d(0, -7px, 0) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
      : undefined;

  return (
    <div
      ref={stageRef}
      data-testid="interactive-portrait-stage"
      data-hovered={isHovered ? 'true' : 'false'}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-full max-w-[330px] flex-col items-center py-4 select-none"
      style={{ perspective: '1100px' }}
    >
      {/* Continuous smooth vertical floating wrapper */}
      <div
        className="portrait-float-loop relative flex w-full flex-col items-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 3D Tilt & Ambient Sway Plane */}
        <div
          data-testid="interactive-portrait-tilt"
          className={`relative flex w-full flex-col items-center will-change-transform ${
            !isHovered && !reducedMotion ? 'portrait-ambient-sway' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: interactiveTransform,
            transition: isHovered
              ? 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1)'
              : 'transform 520ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Depth Layer 0 (Rear): Soft moving blue holographic lighting aura */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-2 left-1/2 h-72 w-72 -translate-x-1/2 sm:h-80 sm:w-80"
            style={{
              transform: `translate3d(${-tilt.shiftX * 0.9}px, ${-tilt.shiftY * 0.9}px, -28px)`,
              transition: isHovered
                ? 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1)'
                : 'transform 520ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div
              className="holo-blue-aura h-full w-full rounded-full blur-2xl"
              style={{
                background:
                  'conic-gradient(from 0deg, rgba(56, 189, 248, 0.28), rgba(14, 165, 233, 0.06), rgba(77, 196, 142, 0.22), rgba(56, 189, 248, 0.32), rgba(14, 165, 233, 0.05))',
              }}
            />
          </div>

          {/* Depth Layer 1 (Mid-Rear): Gently pulsing corner viewfinder brackets */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              transform: `translate3d(${tilt.shiftX * 0.35}px, ${tilt.shiftY * 0.35}px, 14px)`,
              transition: isHovered
                ? 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1)'
                : 'transform 520ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span className="holo-bracket-pulse absolute -top-1 left-2 h-6 w-6 rounded-tl-sm border-t-2 border-l-2 border-[#38BDF8]/75" />
            <span className="holo-bracket-pulse absolute -top-1 right-2 h-6 w-6 rounded-tr-sm border-t-2 border-r-2 border-[#38BDF8]/75" />
            <span className="holo-bracket-pulse absolute bottom-5 left-2 h-6 w-6 rounded-bl-sm border-b-2 border-l-2 border-[#4DC48E]/75" />
            <span className="holo-bracket-pulse absolute right-2 bottom-5 h-6 w-6 rounded-br-sm border-r-2 border-b-2 border-[#4DC48E]/75" />
          </div>

          {/* Depth Layer 2 (Mid-Frame): Rotating concentric holographic rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1 left-1/2 flex h-72 w-72 -translate-x-1/2 items-center justify-center sm:h-80 sm:w-80"
            style={{
              transform: `translate3d(${tilt.shiftX * 0.55}px, ${tilt.shiftY * 0.55}px, 18px)`,
              transition: isHovered
                ? 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1)'
                : 'transform 520ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Outer segmented blue-emerald SVG arc */}
            <svg
              viewBox="0 0 320 320"
              fill="none"
              className="holo-orbit-cw absolute inset-0 h-full w-full"
            >
              <circle
                cx="160"
                cy="160"
                r="152"
                stroke="rgba(56, 189, 248, 0.38)"
                strokeWidth="1.25"
                strokeDasharray="36 20 8 18"
              />
              <circle
                cx="160"
                cy="160"
                r="145"
                stroke="rgba(77, 196, 142, 0.25)"
                strokeWidth="1"
                strokeDasharray="88 46"
              />
            </svg>

            {/* Counter-rotating bronze/sky inner precision ticks */}
            <svg
              viewBox="0 0 320 320"
              fill="none"
              className="holo-orbit-ccw absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]"
            >
              <circle
                cx="160"
                cy="160"
                r="148"
                stroke="rgba(223, 196, 140, 0.3)"
                strokeWidth="1"
                strokeDasharray="3 14"
              />
            </svg>
          </div>

          {/* Depth Layer 3 (Subject Portrait Disc): Elevated forward in Z-space */}
          <div
            className="relative mt-4 flex h-64 w-64 items-center justify-center rounded-full border border-[#38BDF8]/40 bg-[#0E211C] p-2 sm:h-72 sm:w-72"
            style={{
              transform: `translate3d(${tilt.shiftX * 0.85}px, ${tilt.shiftY * 0.85}px, ${
                isHovered ? '42px' : '30px'
              })`,
              boxShadow: isHovered
                ? '0 28px 54px -12px rgba(2, 10, 12, 0.92), 0 0 36px -4px rgba(56, 189, 248, 0.36)'
                : '0 20px 42px -12px rgba(2, 10, 12, 0.85), 0 0 24px -6px rgba(56, 189, 248, 0.22)',
              transition: isHovered
                ? 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms ease-out'
                : 'transform 520ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms ease-out',
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-[#ECEEF0]">
              <img
                src={PORTFOLIO_PROFILE.portraitPath}
                alt="Portrait of Md. Mahabub Hassan in a black formal suit"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />

              {/* Subtle peripheral depth vignette without altering facial identity */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_38px_rgba(6,16,20,0.52)]"
              />

              {/* Subtle monochrome editorial/holographic film grain texture */}
              <div
                aria-hidden="true"
                data-testid="portrait-film-grain"
                className="pointer-events-none absolute inset-0 rounded-full mix-blend-overlay"
                style={{
                  opacity: 0.14,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '160px 160px',
                }}
              />

              {/* Occasional subtle blue holographic scan beam */}
              <div
                aria-hidden="true"
                className="holo-scan-sweep pointer-events-none absolute inset-x-0 top-0 h-20"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 0%, rgba(56, 189, 248, 0.14) 38%, rgba(125, 211, 252, 0.38) 52%, rgba(56, 189, 248, 0.1) 70%, transparent 100%)',
                }}
              />

              {/* Subtle directional optical light sheen following pointer */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-200"
                style={{
                  opacity: isHovered && !reducedMotion ? 0.24 : 0,
                  background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(125, 211, 252, 0.55) 0%, rgba(56, 189, 248, 0.15) 35%, transparent 70%)`,
                }}
              />
            </div>
          </div>

          {/* Depth Layer 4 (Foreground Credential Plate): Nearest Z-plane */}
          <div
            className="relative z-10 -mt-4 flex items-center gap-3 rounded-lg border border-[#38BDF8]/40 bg-[#0A1816]/95 px-4 py-2 text-xs"
            style={{
              transform: `translate3d(${tilt.shiftX * 1.15}px, ${tilt.shiftY * 1.15}px, ${
                isHovered ? '58px' : '46px'
              })`,
              boxShadow: '0 14px 28px -8px rgba(2, 10, 14, 0.85)',
              transition: isHovered
                ? 'transform 140ms cubic-bezier(0.16, 1, 0.3, 1)'
                : 'transform 520ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span className="font-semibold tracking-wide text-white whitespace-nowrap">
              ANTHROPOLOGY · SUST
            </span>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <span className="inline-flex items-center gap-1 text-[#A7C4B5] whitespace-nowrap">
              <MapPin className="h-3.5 w-3.5 text-[#DFC48C]" aria-hidden="true" />
              <span>Sylhet, Bangladesh</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
