import type { NavItemId, SportsEntry } from '../data/portfolioData';

export type SportsFilter = 'all' | 'cricket' | 'university';

export interface ContactDraft {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
}

export interface ContactValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface SectionPosition {
  id: NavItemId;
  top: number;
}

export function filterSportsEntries(
  entries: SportsEntry[],
  filter: SportsFilter,
): SportsEntry[] {
  if (filter === 'all') {
    return entries;
  }
  return entries.filter((entry) => entry.category === filter);
}

export function validateContactDraft(draft: ContactDraft): ContactValidationErrors {
  const errors: ContactValidationErrors = {};
  const trimmedName = draft.name.trim();
  const trimmedEmail = draft.email.trim();
  const trimmedMessage = draft.message.trim();

  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  }

  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!trimmedMessage) {
    errors.message = 'Please write a brief message regarding your inquiry.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Please include at least 10 characters in your message.';
  }

  return errors;
}

export function formatInquiryPlainText(draft: ContactDraft): string {
  const lines = [
    `Subject: [${draft.inquiryType}] Inquiry from ${draft.name.trim()}`,
    `From: ${draft.name.trim()} (${draft.email.trim()})`,
  ];

  if (draft.organization.trim()) {
    lines.push(`Affiliation: ${draft.organization.trim()}`);
  }

  lines.push('', draft.message.trim());
  return lines.join('\n');
}

export function buildMailtoHref(recipientEmail: string, draft: ContactDraft): string {
  const subject = `[${draft.inquiryType}] Inquiry from ${draft.name.trim()}`;
  const bodyLines = [
    `Hello Md. Mahabub Hassan,`,
    '',
    draft.message.trim(),
    '',
    '---',
    `Name: ${draft.name.trim()}`,
    `Reply Email: ${draft.email.trim()}`,
  ];

  if (draft.organization.trim()) {
    bodyLines.push(`Organization / Affiliation: ${draft.organization.trim()}`);
  }

  const params = new URLSearchParams({
    subject,
    body: bodyLines.join('\n'),
  });

  return `mailto:${recipientEmail}?${params.toString().replace(/\+/g, '%20')}`;
}

export function getActiveSectionId(
  positions: SectionPosition[],
  scrollY: number,
  offset = 140,
): NavItemId {
  if (positions.length === 0) {
    return 'home';
  }

  const sorted = [...positions].sort((a, b) => a.top - b.top);
  const triggerPoint = scrollY + offset;
  let activeId: NavItemId = sorted[0].id;

  for (const item of sorted) {
    if (item.top <= triggerPoint) {
      activeId = item.id;
    } else {
      break;
    }
  }

  return activeId;
}

export interface PortraitRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface PortraitTiltState {
  rotateX: number;
  rotateY: number;
  shiftX: number;
  shiftY: number;
  glareX: number;
  glareY: number;
}

export const NEUTRAL_PORTRAIT_TILT: PortraitTiltState = {
  rotateX: 0,
  rotateY: 0,
  shiftX: 0,
  shiftY: 0,
  glareX: 50,
  glareY: 50,
};

function clampNumber(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function computePortraitTilt(
  clientX: number,
  clientY: number,
  rect: PortraitRect,
  maxTiltDeg = 11,
  maxShiftPx = 10,
): PortraitTiltState {
  if (rect.width <= 0 || rect.height <= 0) {
    return NEUTRAL_PORTRAIT_TILT;
  }

  const ratioX = clampNumber((clientX - rect.left) / rect.width, 0, 1);
  const ratioY = clampNumber((clientY - rect.top) / rect.height, 0, 1);

  const normX = (ratioX - 0.5) * 2;
  const normY = (ratioY - 0.5) * 2;

  return {
    rotateX: Number((-normY * maxTiltDeg).toFixed(2)),
    rotateY: Number((normX * maxTiltDeg).toFixed(2)),
    shiftX: Number((normX * maxShiftPx).toFixed(2)),
    shiftY: Number((normY * maxShiftPx).toFixed(2)),
    glareX: Number((ratioX * 100).toFixed(1)),
    glareY: Number((ratioY * 100).toFixed(1)),
  };
}

export function stepGalleryIndex(current: number, delta: number, total: number): number {
  if (total <= 0) {
    return 0;
  }
  const normalizedCurrent = ((Math.trunc(current) % total) + total) % total;
  return (((normalizedCurrent + Math.trunc(delta)) % total) + total) % total;
}

export interface SportsViewportState {
  hasEntered: boolean;
  isVisible: boolean;
}

export function reduceViewportEntrance(
  prev: SportsViewportState,
  isIntersecting: boolean,
): SportsViewportState {
  return {
    hasEntered: prev.hasEntered || isIntersecting,
    isVisible: isIntersecting,
  };
}



