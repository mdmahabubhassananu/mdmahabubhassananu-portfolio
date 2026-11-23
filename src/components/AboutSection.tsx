import { ABOUT_NARRATIVE } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-[#E2DDD1] bg-[#F2EFE6]/45 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Margin / Editorial Index */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-wider text-[#96702E]">
              01. Profile &amp; Perspective
            </p>
            <h2
              id="about-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#151A17] text-balance sm:text-4xl"
            >
              Bridging Ethnographic Inquiry and Competitive Sport
            </h2>

            <dl className="mt-8 divide-y divide-[#E2DDD1] border-t border-b border-[#E2DDD1] text-sm">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-[#666F69]">Discipline</dt>
                <dd className="font-medium text-[#151A17] text-right">
                  Anthropology (BSS)
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-[#666F69]">Institution</dt>
                <dd className="font-medium text-[#151A17] text-right">
                  SUST, Sylhet
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-[#666F69]">Field Focus</dt>
                <dd className="font-medium text-[#151A17] text-right">
                  Gender, Agency &amp; Sport
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-[#666F69]">Athletics</dt>
                <dd className="font-medium text-[#151A17] text-right">
                  Cricket, Handball, Track
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Reading Column */}
          <div className="lg:col-span-8">
            <div className="max-w-prose space-y-5 text-base leading-[1.75] text-[#4A524D]">
              <p className="text-lg font-medium leading-relaxed text-[#151A17] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:leading-none first-letter:text-[#164230]">
                {ABOUT_NARRATIVE.lead}
              </p>

              {ABOUT_NARRATIVE.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#E2DDD1] bg-[#FAF8F3] p-6">
              <p className="text-xs font-semibold tracking-wide text-[#164230]">
                Core Thematic Direction
              </p>
              <p className="mt-2 font-serif text-lg italic leading-relaxed text-[#151A17]">
                “{ABOUT_NARRATIVE.coreInquiry}”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
