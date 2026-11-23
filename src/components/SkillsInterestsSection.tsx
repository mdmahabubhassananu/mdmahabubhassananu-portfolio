import { Camera, Compass, Globe2 } from 'lucide-react';
import {
  LANGUAGES,
  PERSONAL_INTERESTS,
  SKILL_CATEGORIES,
} from '../data/portfolioData';

export function SkillsInterestsSection() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="border-b border-[#E2DDD1] bg-[#FAF8F3] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E2DDD1] pb-6">
          <p className="text-xs font-semibold tracking-wider text-[#96702E]">
            08. Capabilities &amp; Languages
          </p>
          <h2
            id="skills-heading"
            className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#151A17] sm:text-4xl"
          >
            Skills, Competencies &amp; Interests
          </h2>
        </div>

        {/* 4-Category Skills Grid (No Artificial Bars or Pills) */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-[#E2DDD1] bg-white p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-[#151A17]">
                {category.title}
              </h3>
              <ul className="mt-4 divide-y divide-[#EFECE4] border-t border-[#EFECE4] text-sm text-[#4A524D]">
                {category.items.map((item) => (
                  <li key={item} className="py-2.5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages & Personal Interests Row */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Languages */}
          <div className="rounded-xl border border-[#E2DDD1] bg-[#F2EFE6]/65 p-6 lg:col-span-5">
            <div className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-[#164230]" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold text-[#151A17]">
                Languages
              </h3>
            </div>

            <dl className="mt-4 divide-y divide-[#E2DDD1] border-t border-b border-[#E2DDD1] text-sm">
              {LANGUAGES.map((entry) => (
                <div
                  key={entry.language}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <dt className="font-medium text-[#151A17]">
                    {entry.language}
                  </dt>
                  <dd className="text-[#4A524D]">{entry.level}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Personal Interests */}
          <div className="rounded-xl border border-[#E2DDD1] bg-white p-6 lg:col-span-7">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#96702E]" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-[#151A17]">
                  Sporting &amp; Creative Interests
                </h3>
              </div>
              <Camera className="h-4 w-4 text-[#666F69]" aria-hidden="true" />
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#4A524D]">
              Alongside qualitative research and competitive cricket, Md. Mahabub
              Hassan engages in visual storytelling and athletic pursuits across
              diverse fields.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[#E2DDD1] pt-5 sm:grid-cols-3">
              {PERSONAL_INTERESTS.map((interest, idx) => (
                <div
                  key={interest}
                  className="flex items-baseline gap-2.5 text-sm font-medium text-[#151A17]"
                >
                  <span className="text-xs font-semibold tabular-nums text-[#96702E]">
                    0{idx + 1}
                  </span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
