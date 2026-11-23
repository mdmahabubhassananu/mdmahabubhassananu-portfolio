import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EducationAwardsSection } from './components/EducationAwardsSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LeadershipSection } from './components/LeadershipSection';
import { Navbar } from './components/Navbar';
import { ResearchSection } from './components/ResearchSection';
import { SkillsInterestsSection } from './components/SkillsInterestsSection';
import { SportsSection } from './components/SportsSection';
import { NAV_ITEMS, type NavItemId } from './data/portfolioData';
import { getActiveSectionId } from './utils/portfolioLogic';

export function App() {
  const [activeSection, setActiveSection] = useState<NavItemId>('home');

  const scrollToSection = useCallback((id: NavItemId) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const positions = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        return {
          id: item.id,
          top: el ? el.getBoundingClientRect().top + window.scrollY : 0,
        };
      });

      const current = getActiveSectionId(positions, window.scrollY, 150);
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#151A17]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[#164230] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main id="main-content">
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ResearchSection />
        <SportsSection />
        <LeadershipSection />
        <EducationAwardsSection />
        <SkillsInterestsSection />
        <ContactSection />
      </main>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default App;
