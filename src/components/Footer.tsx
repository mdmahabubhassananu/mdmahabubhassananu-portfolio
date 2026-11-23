import { NAV_ITEMS, PORTFOLIO_PROFILE, type NavItemId } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (id: NavItemId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#E2DDD1] bg-[#F2EFE6] py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="font-serif text-lg font-semibold text-[#151A17]">
            {PORTFOLIO_PROFILE.name}
          </p>
          <p className="mt-1 text-xs text-[#4A524D]">
            Anthropology Graduate (SUST) · Sports Researcher · Competitive
            Cricketer · {PORTFOLIO_PROFILE.contact.location}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#4A524D]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
              className="transition-colors hover:text-[#164230]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PORTFOLIO_PROFILE.cvDownloadPath}
            download={PORTFOLIO_PROFILE.cvFileName}
            className="font-semibold text-[#164230] underline decoration-[#164230]/35 underline-offset-4 hover:text-[#0F3022]"
          >
            Download CV
          </a>
        </nav>
      </div>
    </footer>
  );
}
