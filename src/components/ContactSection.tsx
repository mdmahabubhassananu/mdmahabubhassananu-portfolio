import { useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import {
  buildMailtoHref,
  formatInquiryPlainText,
  validateContactDraft,
  type ContactDraft,
  type ContactValidationErrors,
} from '../utils/portfolioLogic';

const INITIAL_DRAFT: ContactDraft = {
  name: '',
  email: '',
  organization: '',
  inquiryType: 'Postgraduate / Scholarship',
  message: '',
};

const INQUIRY_OPTIONS = [
  'Postgraduate / Scholarship',
  'Research Collaboration',
  'Sports Development',
  'Cricket / Athletic Opportunity',
  'General Inquiry',
];

async function copyTextWithFallback(value: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Fall through to legacy textarea copy fallback
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

export function ContactSection() {
  const [draft, setDraft] = useState<ContactDraft>(INITIAL_DRAFT);
  const [errors, setErrors] = useState<ContactValidationErrors>({});
  const [emailCopied, setEmailCopied] = useState(false);
  const [draftCopied, setDraftCopied] = useState(false);
  const [composerFeedback, setComposerFeedback] = useState<{
    tone: 'success' | 'warning';
    text: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    const ok = await copyTextWithFallback(PORTFOLIO_PROFILE.contact.email);
    setEmailCopied(ok);
    if (ok) {
      window.setTimeout(() => setEmailCopied(false), 2500);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactDraft(draft);
    setErrors(validationErrors);
    setComposerFeedback(null);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const mailtoHref = buildMailtoHref(PORTFOLIO_PROFILE.contact.email, draft);
    window.location.href = mailtoHref;
    setComposerFeedback({
      tone: 'success',
      text: 'Your email application has been triggered with this draft pre-filled. You can also copy the message text below if you use webmail.',
    });
  };

  const handleCopyDraft = async () => {
    const validationErrors = validateContactDraft(draft);
    setErrors(validationErrors);
    setComposerFeedback(null);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const plainText = formatInquiryPlainText(draft);
    const ok = await copyTextWithFallback(plainText);
    if (ok) {
      setDraftCopied(true);
      setComposerFeedback({
        tone: 'success',
        text: `Inquiry draft copied to clipboard. Paste it into an email addressed to ${PORTFOLIO_PROFILE.contact.email}.`,
      });
      window.setTimeout(() => setDraftCopied(false), 3000);
    } else {
      setComposerFeedback({
        tone: 'warning',
        text: 'Clipboard access was blocked by the browser. Please use the Open in Email Client button instead.',
      });
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#FAF8F3] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider text-[#96702E]">
              09. Correspondence &amp; Networking
            </p>
            <h2
              id="contact-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#151A17] sm:text-4xl"
            >
              Get in Touch
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4A524D] sm:text-base">
              Open to postgraduate scholarship correspondence, qualitative
              research collaborations, sports development initiatives, and
              competitive cricket engagements.
            </p>

            {/* Primary Direct Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PORTFOLIO_PROFILE.contact.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#164230] px-5 py-2.5 text-sm font-semibold text-[#FAF8F3] transition-colors hover:bg-[#0F3022] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164230]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Email Me</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#D4CEC0] bg-[#F2EFE6] px-4 py-2.5 text-sm font-medium text-[#151A17] transition-colors hover:bg-[#EAE4D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164230]"
              >
                {emailCopied ? (
                  <>
                    <Check className="h-4 w-4 text-[#164230]" aria-hidden="true" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[#4A524D]" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Structured Contact Directory */}
            <dl className="mt-8 divide-y divide-[#E2DDD1] border-t border-b border-[#E2DDD1] text-sm">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 py-3.5">
                <dt className="inline-flex items-center gap-2 text-[#666F69]">
                  <MapPin className="h-4 w-4 text-[#164230]" aria-hidden="true" />
                  <span>Location</span>
                </dt>
                <dd className="font-medium text-[#151A17] text-right">
                  {PORTFOLIO_PROFILE.contact.location}
                </dd>
              </div>

              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 py-3.5">
                <dt className="inline-flex items-center gap-2 text-[#666F69]">
                  <Mail className="h-4 w-4 text-[#164230]" aria-hidden="true" />
                  <span>Email</span>
                </dt>
                <dd className="min-w-0 break-all text-right">
                  <a
                    href={`mailto:${PORTFOLIO_PROFILE.contact.email}`}
                    className="font-medium text-[#164230] underline decoration-[#164230]/35 underline-offset-4 hover:text-[#0F3022]"
                  >
                    {PORTFOLIO_PROFILE.contact.email}
                  </a>
                </dd>
              </div>

              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 py-3.5">
                <dt className="inline-flex items-center gap-2 text-[#666F69]">
                  <Phone className="h-4 w-4 text-[#164230]" aria-hidden="true" />
                  <span>Phone</span>
                </dt>
                <dd className="text-right">
                  <a
                    href={PORTFOLIO_PROFILE.contact.phoneHref}
                    className="font-medium tabular-nums text-[#151A17] underline decoration-[#D4CEC0] underline-offset-4 hover:text-[#164230]"
                  >
                    {PORTFOLIO_PROFILE.contact.phoneDisplay}
                  </a>
                </dd>
              </div>

              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 py-3.5">
                <dt className="text-[#666F69]">LinkedIn</dt>
                <dd className="min-w-0 break-all text-right">
                  <a
                    href={PORTFOLIO_PROFILE.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#164230] underline decoration-[#164230]/35 underline-offset-4 hover:text-[#0F3022]"
                  >
                    <span>{PORTFOLIO_PROFILE.contact.linkedinLabel}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </dd>
              </div>

              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 py-3.5">
                <dt className="text-[#666F69]">ORCID</dt>
                <dd className="text-right">
                  <a
                    href={PORTFOLIO_PROFILE.contact.orcidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium tabular-nums text-[#164230] underline decoration-[#164230]/35 underline-offset-4 hover:text-[#0F3022]"
                  >
                    <span>{PORTFOLIO_PROFILE.contact.orcidId}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Honest Email Inquiry Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#E2DDD1] bg-white p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#151A17]">
                Compose an Email Inquiry
              </h3>
              <p className="mt-1.5 text-sm text-[#4A524D]">
                Prepare a structured inquiry below to open directly in your
                default email client or copy to clipboard for webmail.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#151A17]"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={draft.name}
                      onChange={(e) => {
                        setDraft((prev) => ({ ...prev, name: e.target.value }));
                        if (errors.name) {
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      placeholder="Dr. Ayesha Karim"
                      className="mt-1.5 w-full rounded-md border border-[#D4CEC0] bg-[#FAF8F3] px-3.5 py-2.5 text-sm text-[#151A17] placeholder:text-[#868E88] focus:border-[#164230] focus:bg-white focus:outline-none"
                    />
                    {errors.name && (
                      <p
                        id="contact-name-error"
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-[#991B1B]"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#151A17]"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={draft.email}
                      onChange={(e) => {
                        setDraft((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      placeholder="name@institution.edu"
                      className="mt-1.5 w-full rounded-md border border-[#D4CEC0] bg-[#FAF8F3] px-3.5 py-2.5 text-sm text-[#151A17] placeholder:text-[#868E88] focus:border-[#164230] focus:bg-white focus:outline-none"
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-[#991B1B]"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-organization"
                      className="block text-xs font-semibold text-[#151A17]"
                    >
                      University / Organization (Optional)
                    </label>
                    <input
                      id="contact-organization"
                      name="organization"
                      type="text"
                      value={draft.organization}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          organization: e.target.value,
                        }))
                      }
                      placeholder="Department, Club, or Programme"
                      className="mt-1.5 w-full rounded-md border border-[#D4CEC0] bg-[#FAF8F3] px-3.5 py-2.5 text-sm text-[#151A17] placeholder:text-[#868E88] focus:border-[#164230] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-inquiry-type"
                      className="block text-xs font-semibold text-[#151A17]"
                    >
                      Inquiry Area
                    </label>
                    <select
                      id="contact-inquiry-type"
                      name="inquiryType"
                      value={draft.inquiryType}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          inquiryType: e.target.value,
                        }))
                      }
                      className="mt-1.5 w-full rounded-md border border-[#D4CEC0] bg-[#FAF8F3] px-3.5 py-2.5 text-sm text-[#151A17] focus:border-[#164230] focus:bg-white focus:outline-none"
                    >
                      {INQUIRY_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#151A17]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={draft.message}
                    onChange={(e) => {
                      setDraft((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) {
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    placeholder="Share details regarding research collaboration, scholarship inquiries, or sports programmes..."
                    className="mt-1.5 w-full rounded-md border border-[#D4CEC0] bg-[#FAF8F3] px-3.5 py-2.5 text-sm text-[#151A17] placeholder:text-[#868E88] focus:border-[#164230] focus:bg-white focus:outline-none"
                  />
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      role="alert"
                      className="mt-1.5 text-xs font-medium text-[#991B1B]"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#164230] px-5 py-2.5 text-sm font-semibold text-[#FAF8F3] transition-colors hover:bg-[#0F3022] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164230]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Open in Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#D4CEC0] bg-[#F2EFE6] px-4 py-2.5 text-sm font-medium text-[#151A17] transition-colors hover:bg-[#EAE4D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164230]"
                  >
                    {draftCopied ? (
                      <>
                        <Check className="h-4 w-4 text-[#164230]" aria-hidden="true" />
                        <span>Draft Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-[#4A524D]" aria-hidden="true" />
                        <span>Copy Inquiry Draft</span>
                      </>
                    )}
                  </button>
                </div>

                {composerFeedback && (
                  <p
                    role="status"
                    className={`rounded-lg border px-4 py-3 text-xs leading-relaxed ${
                      composerFeedback.tone === 'warning'
                        ? 'border-[#DFC99B] bg-[#FAF6EC] text-[#7A5922]'
                        : 'border-[#164230]/25 bg-[#E9F0EC] text-[#164230]'
                    }`}
                  >
                    {composerFeedback.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
