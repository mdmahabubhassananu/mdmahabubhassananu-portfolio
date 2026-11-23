import { LEADERSHIP_ENTRIES } from '../data/portfolioData';

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="border-b border-[#E2DDD1] bg-[#FAF8F3] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Summary */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-wider text-[#96702E]">
              04. Leadership &amp; Service
            </p>
            <h2
              id="leadership-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#151A17] text-balance sm:text-4xl"
            >
              Student Governance &amp; Community Organization
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4A524D] sm:text-base">
              Active leadership across departmental societies, university
              sports administration, student associations, and cultural
              initiatives at SUST.
            </p>
          </div>

          {/* Right Chronological Timeline */}
          <div className="lg:col-span-8">
            <ol className="relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-[#D8D1C3]">
              {LEADERSHIP_ENTRIES.map((entry, idx) => (
                <li key={entry.id} className="relative pl-10">
                  <span
                    aria-hidden="true"
                    className={`absolute top-2.5 left-1.5 flex h-3 w-3 items-center justify-center rounded-full border ${
                      idx === 0
                        ? 'border-[#164230] bg-[#164230]'
                        : 'border-[#96702E] bg-[#FAF8F3]'
                    }`}
                  />

                  <div className="rounded-xl border border-[#E2DDD1] bg-white p-5 sm:p-6">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                      <h3 className="font-serif text-xl font-semibold text-[#151A17]">
                        {entry.role}
                      </h3>
                      <span className="text-xs font-semibold tabular-nums text-[#164230] shrink-0">
                        {entry.period}
                      </span>
                    </div>

                    <p className="mt-1.5 text-sm font-medium text-[#4A524D]">
                      {entry.organization}
                    </p>

                    {entry.note && (
                      <p className="mt-3 border-t border-[#E2DDD1] pt-3 text-sm text-[#4A524D]">
                        {entry.note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
