import test from 'node:test';
import assert from 'node:assert/strict';
import { ANNUAL_SPORTS_CHAMPION_GALLERY, SPORTS_ENTRIES } from '../data/portfolioData';
import {
  buildMailtoHref,
  computePortraitTilt,
  filterSportsEntries,
  formatInquiryPlainText,
  getActiveSectionId,
  NEUTRAL_PORTRAIT_TILT,
  reduceViewportEntrance,
  stepGalleryIndex,
  validateContactDraft,
} from './portfolioLogic';

test('filterSportsEntries filters accurately across all, cricket, and university', () => {
  const all = filterSportsEntries(SPORTS_ENTRIES, 'all');
  const cricket = filterSportsEntries(SPORTS_ENTRIES, 'cricket');
  const university = filterSportsEntries(SPORTS_ENTRIES, 'university');

  assert.equal(all.length, SPORTS_ENTRIES.length);
  assert.ok(cricket.length > 0);
  assert.ok(university.length > 0);
  assert.equal(cricket.length + university.length, all.length);
  assert.ok(cricket.every((item) => item.category === 'cricket'));
  assert.ok(university.every((item) => item.category === 'university'));
});

test('validateContactDraft rejects empty or malformed inputs', () => {
  const emptyErrors = validateContactDraft({
    name: ' ',
    email: '',
    organization: '',
    inquiryType: 'Academic Collaboration',
    message: '',
  });
  assert.ok(emptyErrors.name);
  assert.ok(emptyErrors.email);
  assert.ok(emptyErrors.message);

  const invalidEmailErrors = validateContactDraft({
    name: 'Dr. Rahman',
    email: 'not-an-email',
    organization: 'University',
    inquiryType: 'Academic Collaboration',
    message: 'Interested in discussing your sports anthropology monograph.',
  });
  assert.equal(invalidEmailErrors.name, undefined);
  assert.ok(invalidEmailErrors.email);
  assert.equal(invalidEmailErrors.message, undefined);
});

test('validateContactDraft accepts valid drafts and builds clean mailto href', () => {
  const draft = {
    name: 'Dr. Ayesha Karim',
    email: 'ayesha@example.edu',
    organization: 'Department of Sociology',
    inquiryType: 'Research Collaboration',
    message: 'We would like to invite you to share your ANP 470 monograph findings.',
  };

  const errors = validateContactDraft(draft);
  assert.deepEqual(errors, {});

  const href = buildMailtoHref('mahabubhassananu@gmail.com', draft);
  assert.ok(href.startsWith('mailto:mahabubhassananu@gmail.com?'));
  assert.ok(href.includes('Research%20Collaboration'));
  assert.ok(href.includes('Dr.%20Ayesha%20Karim'));
  assert.ok(!href.includes('+'));

  const plain = formatInquiryPlainText(draft);
  assert.ok(plain.includes('Affiliation: Department of Sociology'));
});

test('getActiveSectionId resolves current section based on scroll position', () => {
  const positions = [
    { id: 'home' as const, top: 0 },
    { id: 'about' as const, top: 760 },
    { id: 'research' as const, top: 1480 },
    { id: 'sports' as const, top: 2600 },
    { id: 'contact' as const, top: 5200 },
  ];

  assert.equal(getActiveSectionId(positions, 0), 'home');
  assert.equal(getActiveSectionId(positions, 650), 'about');
  assert.equal(getActiveSectionId(positions, 1400), 'research');
  assert.equal(getActiveSectionId(positions, 2500), 'sports');
  assert.equal(getActiveSectionId(positions, 6000), 'contact');
});

test('computePortraitTilt computes symmetric clamped 3D angles and glare', () => {
  const rect = { left: 100, top: 100, width: 300, height: 300 };

  // Center point yields neutral 0 tilt
  assert.deepEqual(computePortraitTilt(250, 250, rect, 10, 8), {
    rotateX: 0,
    rotateY: 0,
    shiftX: 0,
    shiftY: 0,
    glareX: 50,
    glareY: 50,
  });

  // Top-right corner tilts +Y and +X
  assert.deepEqual(computePortraitTilt(400, 100, rect, 10, 8), {
    rotateX: 10,
    rotateY: 10,
    shiftX: 8,
    shiftY: -8,
    glareX: 100,
    glareY: 0,
  });

  // Out-of-bounds coordinates clamp cleanly
  assert.deepEqual(computePortraitTilt(-50, 900, rect, 10, 8), {
    rotateX: -10,
    rotateY: -10,
    shiftX: -8,
    shiftY: 8,
    glareX: 0,
    glareY: 100,
  });

  // Zero-dimension rect returns neutral fallback
  assert.deepEqual(computePortraitTilt(10, 10, { left: 0, top: 0, width: 0, height: 0 }), NEUTRAL_PORTRAIT_TILT);
});

test('stepGalleryIndex wraps forward and backward across gallery length', () => {
  assert.equal(stepGalleryIndex(0, 1, 7), 1);
  assert.equal(stepGalleryIndex(6, 1, 7), 0);
  assert.equal(stepGalleryIndex(0, -1, 7), 6);
  assert.equal(stepGalleryIndex(2, -5, 7), 4);
  assert.equal(stepGalleryIndex(3, 1, 0), 0);
});

test('ANNUAL_SPORTS_CHAMPION_GALLERY contains 7 distinct deduplicated photo entries', () => {
  assert.equal(ANNUAL_SPORTS_CHAMPION_GALLERY.length, 7);
  const uniqueSrcs = new Set(ANNUAL_SPORTS_CHAMPION_GALLERY.map((item) => item.src));
  const uniqueTypes = new Set(ANNUAL_SPORTS_CHAMPION_GALLERY.map((item) => item.typeLabel));
  assert.equal(uniqueSrcs.size, 7);
  assert.equal(uniqueTypes.size, 7);
});

test('reduceViewportEntrance latches hasEntered once visible and updates isVisible', () => {
  const initial = { hasEntered: false, isVisible: false };
  assert.deepEqual(reduceViewportEntrance(initial, false), {
    hasEntered: false,
    isVisible: false,
  });

  const entered = reduceViewportEntrance(initial, true);
  assert.deepEqual(entered, {
    hasEntered: true,
    isVisible: true,
  });

  const exited = reduceViewportEntrance(entered, false);
  assert.deepEqual(exited, {
    hasEntered: true,
    isVisible: false,
  });
});


