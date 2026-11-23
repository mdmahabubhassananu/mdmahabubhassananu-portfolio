import { Award, GraduationCap, Medal, ShieldCheck } from 'lucide-react';
import {
  AWARDS_ENTRIES,
  EDUCATION_ENTRIES,
  TRAINING_ENTRIES,
} from '../data/portfolioData';

export function EducationAwardsSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-[#E2DDD1] bg-[#F2EFE6]/45 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Education Subsection */}
        <div>
          <div className="flex flex-col justify-between gap-4 border-b border-[#E2DDD1] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#96702E]">
                05. Academic Background
              </p>
              <h2
                id="education-heading"
                className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#151A17] sm:text-4xl"
              >
                Education
              </h2>
            </div>
            <p className="text-sm text-[#4A524D]">
              Formal academic training in Anthropology and Humanities
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {EDUCATION_ENTRIES.map((edu, index) => (
              <article
                key={edu.id}
                className={`flex flex-col justify-between rounded-xl border p-6 ${
                  index === 0
                    ? 'border-[#164230]/35 bg-white'
                    : 'border-[#E2DDD1] bg-[#FAF8F3]'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-semibold text-[#164230]">
                      {edu.boardOrDepartment}
                    </span>
                    <GraduationCap
                      className="h-5 w-5 shrink-0 text-[#96702E]"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-[#151A17]">
                    {edu.institution}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#4A524D]">
                    {edu.degree}
                  </p>
                </div>

                <dl className="mt-6 space-y-2 border-t border-[#E2DDD1] pt-4 text-xs">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[#666F69]">Academic Result</dt>
                    <dd className="font-semibold tabular-nums text-[#151A17]">
                      {edu.grade}
                      {edu.credits ? ` · ${edu.credits}` : ''}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[#666F69]">Timeline</dt>
                    <dd className="tabular-nums text-[#4A524D] text-right">
                      {edu.period}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>

        {/* Scholarships, Awards and Recognition */}
        <div>
          <div className="flex flex-col justify-between gap-4 border-b border-[#E2DDD1] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#96702E]">
                06. Honours &amp; Recognition
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#151A17]">
                Scholarships &amp; Awards
              </h2>
            </div>
            <p className="text-sm text-[#4A524D]">
              Merit-based departmental scholarships and university athletic
              honours
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {AWARDS_ENTRIES.map((award) => (
              <article
                key={award.id}
                className="flex items-start gap-4 rounded-xl border border-[#DFC99B] bg-[#FAF6EC] p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#DFC99B] bg-white text-[#96702E]">
                  {award.title.includes('Scholarship') ? (
                    <Award className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Medal className="h-5 w-5" aria-hidden="true" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-serif text-lg font-semibold leading-snug text-[#151A17]">
                      {award.title}
                    </h3>
                    <span className="shrink-0 text-xs font-semibold tabular-nums text-[#96702E]">
                      {award.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#4A524D]">{award.issuer}</p>
                  {award.note && (
                    <p className="mt-2 text-xs text-[#666F69]">{award.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Training & Certifications */}
        <div>
          <div className="flex flex-col justify-between gap-4 border-b border-[#E2DDD1] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#96702E]">
                07. Workshops &amp; Athletics Training
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#151A17]">
                Training &amp; Certifications
              </h2>
            </div>
          </div>

          <div className="mt-8 divide-y divide-[#E2DDD1] rounded-xl border border-[#E2DDD1] bg-white">
            {TRAINING_ENTRIES.map((training) => (
              <article
                key={training.id}
                className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-12 sm:items-start"
              >
                <div className="sm:col-span-3">
                  <p className="text-xs font-semibold tabular-nums text-[#164230]">
                    {training.date}
                  </p>
                  <p className="mt-1 text-xs text-[#666F69]">
                    {training.organizer}
                  </p>
                </div>

                <div className="sm:col-span-9">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl font-semibold text-[#151A17]">
                      {training.title}
                    </h3>
                    <ShieldCheck
                      className="h-4 w-4 shrink-0 text-[#164230] mt-1"
                      aria-hidden="true"
                    />
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[#4A524D]">
                    {training.details.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
