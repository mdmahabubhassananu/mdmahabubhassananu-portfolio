import { useState } from 'react';
import {
  BookOpen,
  Compass,
  FileSearch,
  MapPin,
  Presentation,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';
import {
  ACADEMIC_FIELDWORK,
  FEATURED_RESEARCH,
  PROPOSAL_DEFENSE,
  RESEARCH_INTERESTS,
} from '../data/portfolioData';

type ResearchDetailTab = 'all' | 'methodology' | 'findings';

export function ResearchSection() {
  const [activeTab, setActiveTab] = useState<ResearchDetailTab>('all');

  const showMethodology = activeTab === 'all' || activeTab === 'methodology';
  const showFindings = activeTab === 'all' || activeTab === 'findings';

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="border-b border-[#E2DDD1] bg-[#FAF8F3] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E2DDD1] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#96702E]">
              02. Academic &amp; Research Portfolio
            </p>
            <h2
              id="research-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#151A17] text-balance sm:text-4xl"
            >
              Sports Anthropology, Gender &amp; Qualitative Fieldwork
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#4A524D]">
            Empirical undergraduate research grounded in participant observation,
            Bangla interview transcription, and thematic analysis.
          </p>
        </div>

        {/* Featured Monograph Card */}
        <article className="mt-10 rounded-xl border border-[#E2DDD1] bg-white p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-6 border-b border-[#E2DDD1] pb-8 lg:flex-row lg:items-start">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#164230]">
                <span>{FEATURED_RESEARCH.courseCode}</span>
                <span aria-hidden="true" className="text-[#C8C1B2]">
                  ·
                </span>
                <span>{FEATURED_RESEARCH.department}</span>
                <span aria-hidden="true" className="text-[#C8C1B2]">
                  ·
                </span>
                <span className="inline-flex items-center gap-1 text-[#4A524D]">
                  <MapPin className="h-3.5 w-3.5 text-[#96702E]" aria-hidden="true" />
                  {FEATURED_RESEARCH.location}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-[#151A17] text-balance sm:text-3xl">
                {FEATURED_RESEARCH.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-[#4A524D]">
                {FEATURED_RESEARCH.summary}
              </p>
            </div>

            <div className="shrink-0 rounded-lg border border-[#E2DDD1] bg-[#FAF8F3] px-5 py-4 lg:w-64">
              <p className="text-xs font-medium text-[#666F69]">
                Analytical Framework
              </p>
              <p className="mt-1 font-serif text-lg font-semibold text-[#164230]">
                {FEATURED_RESEARCH.framework}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#4A524D]">
                Examining how female cricketers navigate institutional neglect and
                gendered constraints through everyday agency.
              </p>
            </div>
          </div>

          {/* Interactive Detail View Filter */}
          <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#4A524D]">
              <span className="font-semibold text-[#151A17]">Research Focus:</span>
              {FEATURED_RESEARCH.focusAreas.map((area, index) => (
                <span key={area} className="inline-flex items-center gap-2">
                  <span>{area}</span>
                  {index < FEATURED_RESEARCH.focusAreas.length - 1 && (
                    <span aria-hidden="true" className="text-[#C8C1B2]">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>

            <div
              role="tablist"
              aria-label="Monograph sections"
              className="inline-flex shrink-0 items-center gap-1 self-start rounded-lg bg-[#F2EFE6] p-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'all'}
                onClick={() => setActiveTab('all')}
                className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164230] ${
                  activeTab === 'all'
                    ? 'bg-white text-[#151A17] shadow-xs'
                    : 'text-[#4A524D] hover:text-[#151A17]'
                }`}
              >
                All Details
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'methodology'}
                onClick={() => setActiveTab('methodology')}
                className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164230] ${
                  activeTab === 'methodology'
                    ? 'bg-white text-[#151A17] shadow-xs'
                    : 'text-[#4A524D] hover:text-[#151A17]'
                }`}
              >
                Methodology
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'findings'}
                onClick={() => setActiveTab('findings')}
                className={`rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164230] ${
                  activeTab === 'findings'
                    ? 'bg-white text-[#151A17] shadow-xs'
                    : 'text-[#4A524D] hover:text-[#151A17]'
                }`}
              >
                Findings
              </button>
            </div>
          </div>

          {/* Methodology Infographic Grid */}
          {showMethodology && (
            <div className="mt-8 border-t border-[#E2DDD1] pt-8">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <h4 className="font-serif text-xl font-semibold text-[#151A17]">
                    Qualitative Research Methodology
                  </h4>
                  <p className="mt-1 text-sm text-[#4A524D]">
                    Multi-method field design combining interviews, group dialogue,
                    on-field observation, and ethical safeguards.
                  </p>
                </div>
                <span className="shrink-0 text-xs font-medium text-[#164230]">
                  Collection → Transcription → ATLAS.ti
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {FEATURED_RESEARCH.methodologyCards.map((item, idx) => {
                  const icons = [
                    Users,
                    FileSearch,
                    BookOpen,
                    Compass,
                    Scale,
                    FileSearch,
                    ShieldCheck,
                  ];
                  const Icon = icons[idx] ?? BookOpen;
                  const isNumeric = /^\d+$/.test(item.count);

                  return (
                    <div
                      key={item.label}
                      className="flex flex-col justify-between rounded-lg border border-[#E2DDD1] bg-[#FAF8F3] p-5"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`font-serif font-semibold text-[#164230] tabular-nums ${
                              isNumeric ? 'text-3xl' : 'text-lg'
                            }`}
                          >
                            {item.count}
                          </span>
                          <Icon
                            className="h-4 w-4 text-[#96702E]"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-3 text-sm font-semibold text-[#151A17]">
                          {item.label}
                        </p>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-[#4A524D]">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Findings Section */}
          {showFindings && (
            <div className="mt-8 border-t border-[#E2DDD1] pt-8">
              <h4 className="font-serif text-xl font-semibold text-[#151A17]">
                Core Empirical Findings
              </h4>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                {FEATURED_RESEARCH.findings.map((finding, index) => (
                  <div
                    key={finding.title}
                    className="rounded-lg border border-[#E2DDD1] bg-[#F2EFE6]/55 p-5"
                  >
                    <p className="text-xs font-semibold tabular-nums text-[#96702E]">
                      0{index + 1}. Finding
                    </p>
                    <h5 className="mt-2 font-serif text-lg font-semibold leading-snug text-[#151A17]">
                      {finding.title}
                    </h5>
                    <p className="mt-2 text-sm leading-relaxed text-[#4A524D]">
                      {finding.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Academic Fieldwork, Proposal Defense & Research Interests */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Fieldwork & Presentations */}
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-xl border border-[#E2DDD1] bg-white p-6 sm:p-7">
              <h3 className="font-serif text-xl font-semibold text-[#151A17]">
                Academic Fieldwork
              </h3>
              <p className="mt-1 text-xs text-[#666F69]">
                Department of Anthropology, Shahjalal University of Science and
                Technology (SUST)
              </p>

              <div className="mt-5 divide-y divide-[#E2DDD1]">
                {ACADEMIC_FIELDWORK.map((site) => (
                  <div key={site.id} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-base font-semibold text-[#151A17]">
                      {site.site}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#4A524D]">
                      {site.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#E2DDD1] bg-[#E9F0EC]/65 p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#164230]">
                    {PROPOSAL_DEFENSE.institution} · {PROPOSAL_DEFENSE.date}
                  </p>
                  <h3 className="mt-1.5 font-serif text-xl font-semibold text-[#151A17]">
                    {PROPOSAL_DEFENSE.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A524D]">
                    {PROPOSAL_DEFENSE.description}
                  </p>
                </div>
                <Presentation
                  className="h-5 w-5 shrink-0 text-[#164230]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Research Interests Index */}
          <div className="rounded-xl border border-[#E2DDD1] bg-white p-6 sm:p-7 lg:col-span-5">
            <h3 className="font-serif text-xl font-semibold text-[#151A17]">
              Research Interests
            </h3>
            <p className="mt-1 text-sm text-[#4A524D]">
              Primary thematic intersections for postgraduate inquiry and
              collaboration.
            </p>

            <ol className="mt-5 divide-y divide-[#E2DDD1] border-t border-b border-[#E2DDD1]">
              {RESEARCH_INTERESTS.map((interest, idx) => (
                <li
                  key={interest}
                  className="flex items-baseline gap-4 py-3 text-sm"
                >
                  <span className="w-6 shrink-0 font-medium tabular-nums text-[#96702E]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium capitalize text-[#151A17]">
                    {interest}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
