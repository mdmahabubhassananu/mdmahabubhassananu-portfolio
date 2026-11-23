import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Compass,
  Download,
  FlaskConical,
  Mail,
  Shield,
  Trophy,
  User,
  Users,
} from 'lucide-react';
import {
  HERO_QUAD_CARDS,
  HERO_TOUR_NODES,
  PORTFOLIO_PROFILE,
  type NavItemId,
} from '../data/portfolioData';
import { InteractivePortrait } from './InteractivePortrait';

interface HeroSectionProps {
  onNavigate: (id: NavItemId) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const quadIcons = {
    'quad-leadership': Users,
    'quad-honours': Trophy,
    'quad-sports': Shield,
    'quad-research': BookOpen,
  } as const;

  const tourIcons = {
    about: User,
    research: FlaskConical,
    sports: Trophy,
    leadership: Award,
    contact: Mail,
  } as const;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-[#193328] bg-[#08120E] text-[#FAF8F3]"
    >
      {/* Atmospheric Cricket Stadium & Dusk Floodlight Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src="/src/assets/images/cricket_stadium_bg_1795470758476.jpg"
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-50"
        />
        {/* Left-heavy dark obsidian-forest readability scrim + stadium emerald tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(8, 18, 14, 0.94) 0%, rgba(8, 18, 14, 0.80) 45%, rgba(8, 18, 14, 0.42) 74%, rgba(8, 18, 14, 0.72) 100%), linear-gradient(to bottom, rgba(8, 18, 14, 0.65) 0%, transparent 22%, transparent 78%, rgba(8, 18, 14, 0.96) 100%)',
          }}
        />
        {/* Subtle floodlight & emerald turf radial atmosphere behind the portrait stage */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 66% 48%, rgba(34, 108, 77, 0.24) 0%, rgba(56, 189, 248, 0.06) 36%, transparent 68%)',
          }}
        />
        {/* Architectural cricket oval boundary & crease geometry */}
        <svg
          viewBox="0 0 1440 760"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full opacity-25"
        >
          <ellipse
            cx="940"
            cy="430"
            rx="540"
            ry="300"
            stroke="rgba(77, 196, 142, 0.28)"
            strokeWidth="1"
            strokeDasharray="10 12"
          />
          <ellipse
            cx="940"
            cy="430"
            rx="340"
            ry="190"
            stroke="rgba(223, 196, 140, 0.2)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="610"
            x2="1440"
            y2="495"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Intro, Name, Headline, CTAs & 2x2 Highlights */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <p className="text-xs font-medium tracking-wide text-[#A7C4B5] lg:whitespace-nowrap">
              {PORTFOLIO_PROFILE.introLine}
            </p>

            <h1
              id="hero-heading"
              className="mt-4 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.1rem]"
            >
              <span className="block text-white">Hello, I&apos;m</span>
              <span className="relative mt-1 inline-block text-[#4DC48E]">
                {PORTFOLIO_PROFILE.name}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 14"
                  fill="none"
                  className="mt-1.5 h-3 w-full max-w-[340px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10.5C82 3.2 214 2.4 318 8.5"
                    stroke="#4DC48E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base font-semibold leading-snug text-[#DFC48C] sm:text-lg">
              {PORTFOLIO_PROFILE.headline}
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#C4D1CA] sm:text-[0.95rem]">
              {PORTFOLIO_PROFILE.heroDescription}
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('research');
                }}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md bg-[#1F6A4A] px-4 py-2.5 text-[13px] font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#27805A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC48C] sm:px-4.5"
              >
                <span>View My Research</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#sports"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('sports');
                }}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3.5 py-2.5 text-[13px] font-medium text-[#FAF8F3] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#DFC48C]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC48C]"
              >
                <span>Explore My Sports Journey</span>
              </a>

              <a
                href={PORTFOLIO_PROFILE.cvDownloadPath}
                download={PORTFOLIO_PROFILE.cvFileName}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-md border border-[#DFC48C]/35 bg-[#DFC48C]/10 px-3.5 py-2.5 text-[13px] font-medium text-[#DFC48C] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#DFC48C]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC48C]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>

            {/* 2x2 Quick-Summary Highlight Cards (Clickable Section Links) */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HERO_QUAD_CARDS.map((card) => {
                const Icon = quadIcons[card.id as keyof typeof quadIcons] ?? BookOpen;
                return (
                  <a
                    key={card.id}
                    href={`#${card.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(card.target);
                    }}
                    className="group flex items-start gap-3.5 rounded-xl border border-white/12 bg-[#0E1E18]/90 p-3.5 transition-colors duration-150 hover:border-[#4DC48E]/50 hover:bg-[#132920] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC48C]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#4DC48E]/25 bg-[#164230]/75 text-[#4DC48E] transition-colors group-hover:border-[#4DC48E]/50">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">
                        {card.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-[#A7B8AF]">
                        {card.subtitle}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Scholarly Links Row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#A7C4B5]">
              <a
                href={PORTFOLIO_PROFILE.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[#DFC48C] underline decoration-[#DFC48C]/35 underline-offset-4 transition-colors hover:text-white"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <span aria-hidden="true" className="text-white/25">
                /
              </span>

              <a
                href={PORTFOLIO_PROFILE.contact.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium tabular-nums text-[#DFC48C] underline decoration-[#DFC48C]/35 underline-offset-4 transition-colors hover:text-white"
              >
                <span>ORCID ({PORTFOLIO_PROFILE.contact.orcidId})</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Center Column: Guided Speech Callout + 2.5D Interactive Portrait */}
          <div className="order-1 flex flex-col items-center lg:order-2 lg:col-span-4">
            {/* Greeting Speech Callout */}
            <div className="relative mb-4 w-full max-w-[300px] rounded-xl border border-[#4DC48E]/30 bg-[#0D1E18]/95 px-4 py-3.5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#4DC48E]/30 bg-[#164230]/80 text-[#4DC48E]">
                  <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div className="text-xs leading-relaxed text-[#D7E4DD]">
                  <p>
                    <span className="block font-semibold text-white">
                      Welcome! I&apos;m Md. Mahabub Hassan
                    </span>
                    Explore my academic journey, anthropological research, sporting
                    career, and perspectives on the intersection of sport, culture,
                    and society.
                  </p>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('about');
                    }}
                    className="mt-1.5 inline-flex items-center gap-1 font-semibold text-[#4DC48E] transition-colors hover:text-[#DFC48C]"
                  >
                    <span>Start Portfolio Tour</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
              {/* Subtle Speech Pointer */}
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b border-[#4DC48E]/30 bg-[#0D1E18]"
              />
            </div>

            {/* 2.5D Holographic Interactive Portrait */}
            <InteractivePortrait />
          </div>

          {/* Right Column: Vertical Interactive Portfolio Rail */}
          <nav
            aria-label="Hero portfolio tour"
            className="order-3 hidden lg:col-span-2 lg:block"
          >
            <ol className="relative space-y-5 before:absolute before:top-4 before:bottom-4 before:left-[17px] before:w-px before:bg-white/15">
              {HERO_TOUR_NODES.map((node) => {
                const Icon = tourIcons[node.id as keyof typeof tourIcons] ?? Compass;
                return (
                  <li key={node.id} className="relative">
                    <a
                      href={`#${node.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(node.id);
                      }}
                      className="group flex items-center gap-3 rounded-lg py-1 pr-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC48C]"
                    >
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#4DC48E]/40 bg-[#0D1E18] text-[#4DC48E] transition-colors group-hover:border-[#DFC48C] group-hover:bg-[#164230] group-hover:text-[#DFC48C]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-white transition-colors group-hover:text-[#DFC48C]">
                          {node.label}
                        </span>
                        <span className="block text-xs text-[#9BB0A5]">
                          {node.caption}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
