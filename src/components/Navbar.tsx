import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PORTFOLIO_PROFILE, type NavItemId } from '../data/portfolioData';

interface NavbarProps {
  activeSection: NavItemId;
  onNavigate: (id: NavItemId) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryLinks = NAV_ITEMS.filter((item) => item.id !== 'contact');

  const handleLinkClick = (id: NavItemId) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08120E]/95 text-[#FAF8F3] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-serif text-lg font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DFC48C]"
        >
          {PORTFOLIO_PROFILE.name}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium"
        >
          {primaryLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DFC48C] ${
                  isActive
                    ? 'text-[#DFC48C] font-semibold'
                    : 'text-[#C8D4CD] hover:text-white'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#DFC48C] transition-opacity duration-150 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            aria-current={activeSection === 'contact' ? 'location' : undefined}
            className={`hidden sm:inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC48C] ${
              activeSection === 'contact'
                ? 'bg-[#DFC48C] text-[#08120E]'
                : 'bg-[#1D5A40] text-white hover:bg-[#257050]'
            }`}
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFC48C] lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#08120E] px-4 py-4 sm:px-6 lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex min-h-[44px] items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#164230] font-semibold text-[#DFC48C]'
                      : 'text-[#C8D4CD] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-medium text-[#DFC48C]">Current</span>
                  )}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href={PORTFOLIO_PROFILE.cvDownloadPath}
                download={PORTFOLIO_PROFILE.cvFileName}
                className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#1D5A40] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#257050]"
              >
                Download CV (PDF)
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
