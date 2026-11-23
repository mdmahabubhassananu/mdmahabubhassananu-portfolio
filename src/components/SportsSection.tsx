import { useEffect, useRef, useState } from 'react';
import {
  Award,
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Medal,
  Shield,
  Trophy,
  X,
} from 'lucide-react';
import {
  ANNUAL_SPORTS_CHAMPION_GALLERY,
  SPORTS_ENTRIES,
} from '../data/portfolioData';
import {
  filterSportsEntries,
  reduceViewportEntrance,
  stepGalleryIndex,
  type SportsFilter,
  type SportsViewportState,
} from '../utils/portfolioLogic';

export function SportsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [viewportState, setViewportState] = useState<SportsViewportState>({
    hasEntered: false,
    isVisible: false,
  });
  const [filter, setFilter] = useState<SportsFilter>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const visibleEntries = filterSportsEntries(SPORTS_ENTRIES, filter);
  const cricketCount = filterSportsEntries(SPORTS_ENTRIES, 'cricket').length;
  const universityCount = filterSportsEntries(SPORTS_ENTRIES, 'university').length;

  const totalPhotos = ANNUAL_SPORTS_CHAMPION_GALLERY.length;
  const activePhoto = ANNUAL_SPORTS_CHAMPION_GALLERY[activePhotoIndex];

  const handleStepPhoto = (delta: number) => {
    setActivePhotoIndex((prev) => stepGalleryIndex(prev, delta, totalPhotos));
  };

  const scrollToSpotlight = () => {
    const el = document.getElementById('champion-spotlight');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setViewportState({ hasEntered: true, isVisible: true });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setViewportState((prev) =>
            reduceViewportEntrance(prev, entry.isIntersecting),
          );
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxOpen(false);
      } else if (event.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => stepGalleryIndex(prev, -1, totalPhotos));
      } else if (event.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => stepGalleryIndex(prev, 1, totalPhotos));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, totalPhotos]);

  const getEntryIcon = (id: string) => {
    if (id.includes('interdept') || id.includes('athletics-2024')) {
      return Trophy;
    }
    if (id.includes('athletics-2023')) {
      return Medal;
    }
    if (id.includes('captain') || id.includes('khulna') || id.includes('mohammadpur')) {
      return Shield;
    }
    return Award;
  };

  return (
    <section
      ref={sectionRef}
      id="sports"
      aria-labelledby="sports-heading"
      data-sports-entered={viewportState.hasEntered ? 'true' : 'false'}
      data-sports-visible={viewportState.isVisible ? 'true' : 'false'}
      className="relative overflow-hidden border-b border-[#0F3022] bg-[#164230] py-16 text-[#FAF8F3] sm:py-24"
    >
      {/* Viewport-triggered SVG architectural stadium oval, mown-turf pitch texture & ball-in-flight path */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 82% 18%, rgba(223, 196, 140, 0.09) 0%, transparent 48%), radial-gradient(circle at 12% 85%, rgba(77, 196, 142, 0.11) 0%, transparent 52%)',
          }}
        />
        <svg
          data-testid="sports-backdrop-svg"
          viewBox="0 0 1440 820"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-[0.22]"
        >
          <defs>
            {/* Animated SVG Cricket Pitch Mown-Turf Stripe Pattern */}
            <pattern
              id="svg-pitch-turf"
              width="92"
              height="92"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(8)"
            >
              <rect x="0" y="0" width="46" height="92" fill="#FAF8F3" fillOpacity="0.09" />
              <rect x="46" y="0" width="46" height="92" fill="#4DC48E" fillOpacity="0.045" />
              <line
                x1="46"
                y1="0"
                x2="46"
                y2="92"
                stroke="#DFC48C"
                strokeWidth="0.45"
                strokeOpacity="0.22"
              />
            </pattern>

            <linearGradient
              id="cricket-trail-grad"
              x1="130"
              y1="570"
              x2="1295"
              y2="190"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#4DC48E" stopOpacity="0.16" />
              <stop offset="52%" stopColor="#DFC48C" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0.96" />
            </linearGradient>

            <linearGradient
              id="pitch-corridor-grad"
              x1="120"
              y1="576"
              x2="1295"
              y2="210"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#DFC48C" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#FAF8F3" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#DFC48C" stopOpacity="0.24" />
            </linearGradient>
          </defs>

          {/* Animated SVG Mown-Turf Pitch Texture */}
          <g data-testid="sports-pitch-texture" className="sports-pitch-shimmer">
            <rect x="-80" y="-40" width="1600" height="900" fill="url(#svg-pitch-turf)" />
          </g>

          {/* Outer stadium boundary rings */}
          <ellipse
            cx="1180"
            cy="220"
            rx="460"
            ry="290"
            stroke="#DFC48C"
            strokeWidth="1"
            strokeDasharray="12 10"
            className="sports-oval-drift"
          />
          <ellipse
            cx="1180"
            cy="220"
            rx="400"
            ry="245"
            stroke="#FAF8F3"
            strokeWidth="0.75"
            strokeOpacity="0.75"
          />
          <ellipse
            cx="1180"
            cy="220"
            rx="340"
            ry="200"
            stroke="#FAF8F3"
            strokeWidth="0.75"
            strokeOpacity="0.65"
          />

          {/* Subtle pitch alignment corridor linking bowler crease to batting crease */}
          <line
            x1="286"
            y1="560"
            x2="1245"
            y2="205"
            pathLength={1000}
            stroke="url(#pitch-corridor-grad)"
            strokeWidth="1"
            className="sports-crease-draw sports-crease-delay-1"
          />

          {/* Bowler end popping & bowling crease box (draws in on viewport entry) */}
          <rect
            x="92"
            y="530"
            width="210"
            height="92"
            rx="2"
            pathLength={1000}
            stroke="#DFC48C"
            strokeWidth="1"
            className="sports-crease-draw"
          />
          <line
            x1="122"
            y1="530"
            x2="122"
            y2="622"
            pathLength={1000}
            stroke="#FAF8F3"
            strokeWidth="0.8"
            className="sports-crease-draw sports-crease-delay-1"
          />
          <line
            x1="272"
            y1="530"
            x2="272"
            y2="622"
            pathLength={1000}
            stroke="#FAF8F3"
            strokeWidth="0.8"
            className="sports-crease-draw sports-crease-delay-1"
          />

          {/* Far batting crease & architectural 3-stump minimal accent (draws in on viewport entry) */}
          <line
            x1="1250"
            y1="175"
            x2="1335"
            y2="208"
            pathLength={1000}
            stroke="#DFC48C"
            strokeWidth="1"
            className="sports-crease-draw sports-crease-delay-1"
          />
          <path
            d="M 1282 184 L 1282 146 M 1293 188 L 1293 150 M 1304 192 L 1304 154 M 1280 146 L 1306 154"
            pathLength={1000}
            stroke="#FAF8F3"
            strokeWidth="1"
            strokeLinecap="round"
            className="sports-crease-draw sports-crease-delay-2"
          />

          {/* Subtle static trajectory guide path fading in with viewport trigger */}
          <path
            d="M 130 570 Q 430 455 675 565 Q 920 375 1295 190"
            stroke="#DFC48C"
            strokeWidth="0.9"
            strokeDasharray="4 9"
            className={`transition-opacity duration-1000 ${
              viewportState.hasEntered ? 'opacity-35' : 'opacity-0'
            }`}
          />

          {/* Animated SVG cricket ball delivery trail */}
          <path
            data-testid="sports-cricket-trail"
            d="M 130 570 Q 430 455 675 565 Q 920 375 1295 190"
            pathLength={1000}
            stroke="url(#cricket-trail-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="165 1200"
            className="sports-ball-trail"
          />

          {/* Soft golden halo around leading cricket ball */}
          <path
            d="M 130 570 Q 430 455 675 565 Q 920 375 1295 190"
            pathLength={1000}
            stroke="#DFC48C"
            strokeOpacity="0.45"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray="0 162 2 1200"
            className="sports-ball-aura"
          />

          {/* Leading ball seam head locked to front of trail */}
          <path
            data-testid="sports-cricket-ball-head"
            d="M 130 570 Q 430 455 675 565 Q 920 375 1295 190"
            pathLength={1000}
            stroke="#FAF8F3"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeDasharray="0 162 3 1200"
            className="sports-ball-head"
          />

          {/* Dual concentric pitch bounce ripples */}
          <circle
            cx="675"
            cy="565"
            r="14"
            stroke="#DFC48C"
            strokeWidth="1.25"
            className="sports-impact-ripple"
          />
          <circle
            cx="675"
            cy="565"
            r="22"
            stroke="#FAF8F3"
            strokeOpacity="0.7"
            strokeWidth="0.9"
            className="sports-impact-ripple-outer"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#DFC48C]">
              03. Competitive Athletics &amp; Cricket
            </p>
            <h2
              id="sports-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl"
            >
              Sports Career &amp; Athletic Leadership
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#D7E2DC] sm:text-base">
              Over a decade of competitive cricket across BCB national age-group
              tournaments, Dhaka First Division League, district representation,
              and university captaincy alongside athletics and handball at SUST.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter sports records"
            className="flex flex-wrap items-center gap-1 self-start rounded-lg bg-[#0F3022] p-1 max-w-full sm:flex-nowrap lg:shrink-0"
          >
            <button
              type="button"
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
              className={`rounded-md px-3 py-2 text-xs font-semibold tabular-nums whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-3.5 ${
                filter === 'all'
                  ? 'bg-[#FAF8F3] text-[#151A17]'
                  : 'text-[#D7E2DC] hover:text-white'
              }`}
            >
              All Records ({SPORTS_ENTRIES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('cricket')}
              aria-pressed={filter === 'cricket'}
              className={`rounded-md px-3 py-2 text-xs font-semibold tabular-nums whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-3.5 ${
                filter === 'cricket'
                  ? 'bg-[#FAF8F3] text-[#151A17]'
                  : 'text-[#D7E2DC] hover:text-white'
              }`}
            >
              Cricket Career ({cricketCount})
            </button>
            <button
              type="button"
              onClick={() => setFilter('university')}
              aria-pressed={filter === 'university'}
              className={`rounded-md px-3 py-2 text-xs font-semibold tabular-nums whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-3.5 ${
                filter === 'university'
                  ? 'bg-[#FAF8F3] text-[#151A17]'
                  : 'text-[#D7E2DC] hover:text-white'
              }`}
            >
              University Sports ({universityCount})
            </button>
          </div>
        </div>

        {/* Sports Timeline Cards Grid */}
        <div
          data-testid="sports-entries-grid"
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {visibleEntries.map((entry) => {
            const Icon = getEntryIcon(entry.id);
            const categoryLabel =
              entry.category === 'cricket' ? 'Competitive Cricket' : 'University Sports';

            return (
              <article
                key={entry.id}
                className="flex flex-col justify-between rounded-xl border border-white/15 bg-[#0F3022]/75 p-6 transition-colors duration-150 hover:border-[#DFC48C]/45"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#DFC48C]">
                      <span>{categoryLabel}</span>
                      <span aria-hidden="true" className="text-white/30">
                        ·
                      </span>
                      <span className="tabular-nums text-[#E9F0EC]">
                        {entry.period}
                      </span>
                    </div>
                    <Icon
                      className="h-5 w-5 shrink-0 text-[#DFC48C]"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-3 font-serif text-xl font-semibold text-white">
                    {entry.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#D7E2DC]">
                    {entry.organization}
                  </p>

                  {entry.details.map((detail) => (
                    <p
                      key={detail}
                      className="mt-3 text-sm leading-relaxed text-[#C2D1C9]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>

                {entry.subPeriods && entry.subPeriods.length > 0 && (
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="text-xs font-medium text-[#DFC48C]">
                      Tournament Age Categories
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed tabular-nums text-[#E9F0EC]">
                      {entry.subPeriods.join(' · ')}
                    </p>
                  </div>
                )}

                {entry.id === 'sust-athletics-2024' && (
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <span className="text-xs font-medium text-[#DFC48C]">
                      Javelin · Discus · Shot Put (1st Place)
                    </span>
                    <button
                      type="button"
                      onClick={scrollToSpotlight}
                      className="inline-flex items-center gap-1.5 rounded-md border border-[#DFC48C]/40 bg-[#164230]/80 px-3 py-1.5 text-xs font-semibold text-[#FAF8F3] transition-colors hover:border-[#DFC48C] hover:bg-[#164230] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <Camera className="h-3.5 w-3.5 text-[#DFC48C]" aria-hidden="true" />
                      <span>Champion Photos ({totalPhotos})</span>
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* 2024 Annual Sports Competition — Single-Frame Champion Spotlight */}
        <div
          id="champion-spotlight"
          data-testid="champion-spotlight"
          className="mt-12 rounded-2xl border border-white/15 bg-[#0F3022]/85 p-5 sm:p-8"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#DFC48C]">
                SUST Annual Sports Competition · 2024 Champion Archive
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">
                Individual Champion (Men) — Athletics Spotlight
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#C2D1C9]">
                First Place gold medals in Javelin Throw, Discus Throw, and Shot Put. Browse one
                distinct photograph type at a time across the ceremony, podium, crest, and fellow
                champions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-start lg:shrink-0 lg:self-end">
              <span
                data-testid="champion-photo-counter"
                className="mr-1 text-xs font-semibold tabular-nums text-[#DFC48C]"
              >
                {String(activePhotoIndex + 1).padStart(2, '0')} /{' '}
                {String(totalPhotos).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={() => handleStepPhoto(-1)}
                aria-label="Previous champion photo"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#0B2219] text-[#E9F0EC] transition-colors hover:border-[#DFC48C]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => handleStepPhoto(1)}
                aria-label="Next champion photo"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#0B2219] text-[#E9F0EC] transition-colors hover:border-[#DFC48C]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label={`Expand ${activePhoto.title}`}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#DFC48C]/40 bg-[#0B2219] px-3 text-xs font-semibold text-[#FAF8F3] transition-colors hover:border-[#DFC48C] hover:bg-[#164230] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Maximize2 className="h-3.5 w-3.5 text-[#DFC48C]" aria-hidden="true" />
                <span>Expand</span>
              </button>
            </div>
          </div>

          {/* Active Single-Photo Exhibition Stage */}
          <div className="mt-6">
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#0B2219]">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label={`Open full view of ${activePhoto.title}`}
                className="group relative block h-[300px] w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-[420px] lg:h-[480px]"
              >
                <img
                  key={activePhoto.id}
                  data-testid="champion-active-photo"
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.01] sm:p-4"
                />
                <span className="pointer-events-none absolute top-3 left-3 rounded-md border border-[#DFC48C]/40 bg-[#0B2219]/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#DFC48C]">
                  {activePhoto.typeLabel}
                </span>
              </button>

              <div className="flex flex-col justify-between gap-2 border-t border-white/10 bg-[#0D271D] px-4 py-4 sm:flex-row sm:items-center sm:px-6">
                <div>
                  <h4
                    data-testid="champion-active-title"
                    className="font-serif text-lg font-semibold text-white"
                  >
                    {activePhoto.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#C2D1C9]">
                    {activePhoto.caption}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-medium text-[#DFC48C] sm:text-right">
                  Individual Champion · 2024
                </span>
              </div>
            </div>

            {/* Distinct Photo Types Selector Strip */}
            <div
              role="tablist"
              aria-label="Select SUST Annual Sports Competition 2024 photo type"
              className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7"
            >
              {ANNUAL_SPORTS_CHAMPION_GALLERY.map((item, idx) => {
                const isActive = idx === activePhotoIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`group flex flex-col overflow-hidden rounded-lg border text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isActive
                        ? 'border-[#DFC48C] bg-[#164230] ring-1 ring-[#DFC48C]/70'
                        : 'border-white/10 bg-[#0B2219]/75 hover:border-white/30'
                    }`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#081A13]">
                      <img
                        src={item.src}
                        alt={item.typeLabel}
                        className={`h-full w-full object-cover object-top transition-opacity duration-150 ${
                          isActive ? 'opacity-100' : 'opacity-75 group-hover:opacity-100'
                        }`}
                      />
                    </div>
                    <div className="px-2 py-2">
                      <p
                        className={`truncate text-[11px] font-semibold ${
                          isActive ? 'text-[#DFC48C]' : 'text-[#D7E2DC]'
                        }`}
                      >
                        {item.typeLabel}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="champion-lightbox-title"
          data-testid="champion-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071610]/92 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0B2219] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tabular-nums text-[#DFC48C]">
                  {String(activePhotoIndex + 1).padStart(2, '0')} /{' '}
                  {String(totalPhotos).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
                <span className="text-xs font-semibold text-[#E9F0EC]">
                  {activePhoto.typeLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close photo lightbox"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-[#0F3022] text-[#E9F0EC] transition-colors hover:border-[#DFC48C]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#071610] p-3 sm:p-6">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[65vh] w-auto max-w-full rounded object-contain"
              />
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-white/10 bg-[#0F3022] px-4 py-4 sm:flex-row sm:items-center sm:px-6">
              <div>
                <h4
                  id="champion-lightbox-title"
                  className="font-serif text-lg font-semibold text-white"
                >
                  {activePhoto.title}
                </h4>
                <p className="mt-1 text-sm text-[#C2D1C9]">{activePhoto.caption}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => handleStepPhoto(-1)}
                  aria-label="Previous photo in lightbox"
                  className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-[#0B2219] px-3 py-2 text-xs font-semibold text-[#E9F0EC] transition-colors hover:border-[#DFC48C]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Prev</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleStepPhoto(1)}
                  aria-label="Next photo in lightbox"
                  className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-[#0B2219] px-3 py-2 text-xs font-semibold text-[#E9F0EC] transition-colors hover:border-[#DFC48C]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
