export type NavItemId =
  | 'home'
  | 'about'
  | 'research'
  | 'sports'
  | 'leadership'
  | 'education'
  | 'contact';

export interface NavItem {
  id: NavItemId;
  label: string;
}

export interface ResearchMethodCard {
  count: string;
  label: string;
  detail: string;
}

export interface SportsEntry {
  id: string;
  category: 'cricket' | 'university';
  role: string;
  organization: string;
  period: string;
  highlight?: string;
  details: string[];
  subPeriods?: string[];
}

export interface ChampionGalleryItem {
  id: string;
  typeLabel: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
}

export interface LeadershipEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  note?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  boardOrDepartment: string;
  period: string;
  grade: string;
  credits?: string;
}

export interface AwardEntry {
  id: string;
  title: string;
  issuer: string;
  year: string;
  note?: string;
}

export interface TrainingEntry {
  id: string;
  title: string;
  organizer: string;
  date: string;
  details: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  items: string[];
}

export interface LanguageProficiency {
  language: string;
  level: string;
}

export const PORTFOLIO_PROFILE = {
  name: 'Md. Mahabub Hassan',
  shortName: 'Mahabub Hassan',
  introLine: 'Anthropology Graduate · Sports Research Enthusiast · Professional Cricketer',
  headline: 'Exploring the Human Side of Sport, Society and Performance.',
  heroDescription:
    'An Anthropology graduate from Shahjalal University of Science and Technology with research interests in sports, gender, social inequality, and the sociocultural dimensions of athletic practices. Combining academic research with years of competitive cricket and sports leadership.',
  portraitPath: '/assets/aistudio/file_0000000075c08210942b1d13a89b15d9_327bb7db.png',
  cvDownloadPath: '/assets/aistudio/Md_Mahabub_Hassan_CV_Revised_v2_7778dea6.pdf',
  cvFileName: 'Md_Mahabub_Hassan_CV.pdf',
  contact: {
    location: 'Sylhet, Bangladesh',
    email: 'mahabubhassananu@gmail.com',
    phoneDisplay: '+880 1994 687957',
    phoneHref: 'tel:+8801994687957',
    linkedinUrl: 'https://linkedin.com/in/mahabubhassananu',
    linkedinLabel: 'linkedin.com/in/mahabubhassananu',
    orcidUrl: 'https://orcid.org/0009-0007-4266-9721',
    orcidId: '0009-0007-4266-9721',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'sports', label: 'Sports' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_ANCHOR_STATS = [
  {
    value: 'BSS Anthropology',
    label: 'Shahjalal University of Science and Technology (SUST)',
  },
  {
    value: 'ANP 470 Monograph',
    label: 'Gender norms & agency among female cricketers in Jhenaidah',
  },
  {
    value: 'Dhaka 1st Division',
    label: 'Mohammadpur Cricket Club · BCB Khulna Division & SUST Captain',
  },
  {
    value: '2026 Sports Scholar',
    label: 'Office of Physical Education, SUST · Athletics Champion 2024',
  },
];

export interface HeroQuadCard {
  id: string;
  target: NavItemId;
  title: string;
  subtitle: string;
}

export const HERO_QUAD_CARDS: HeroQuadCard[] = [
  {
    id: 'quad-leadership',
    target: 'leadership',
    title: 'Leadership',
    subtitle: 'Vice President, Mangrove Assoc. & Sports Sec., SUST',
  },
  {
    id: 'quad-honours',
    target: 'education',
    title: 'Honours & Awards',
    subtitle: '2026 SUST Sports Scholar · Athletics Champion',
  },
  {
    id: 'quad-sports',
    target: 'sports',
    title: 'Cricket & Sports',
    subtitle: 'SUST Captain · Dhaka 1st Division & BCB Khulna',
  },
  {
    id: 'quad-research',
    target: 'research',
    title: 'Research',
    subtitle: 'ANP 470 Monograph · Gender & Agency in Cricket',
  },
];

export interface HeroTourNode {
  id: NavItemId;
  label: string;
  caption: string;
}

export const HERO_TOUR_NODES: HeroTourNode[] = [
  { id: 'about', label: 'About Me', caption: 'Background & profile' },
  { id: 'research', label: 'Research', caption: 'ANP 470 monograph' },
  { id: 'sports', label: 'Sports Career', caption: 'Cricket & athletics' },
  { id: 'leadership', label: 'Leadership', caption: 'Campus governance' },
  { id: 'contact', label: "Let's Connect", caption: 'Start a conversation' },
];

export const ABOUT_NARRATIVE = {
  lead:
    'Md. Mahabub Hassan graduated in Anthropology from Shahjalal University of Science and Technology (SUST), building an interdisciplinary profile that bridges ethnographic inquiry with competitive sport.',
  paragraphs: [
    "His undergraduate monograph examined how gender norms, embodied expectations, and institutional neglect shape rural girls' access to cricket in Jhenaidah, Bangladesh—and how female athletes exercise everyday agency to remain in the game.",
    'Through his degree and departmental fieldwork, he gained practical grounding in qualitative methodology: conducting in-depth and key informant interviews, facilitating focus group discussions, carrying out participant observation at practices and matches, and coding Bangla transcripts through thematic analysis.',
    'Beyond academic research, sport has been a central, formative discipline throughout his life—spanning national age-group representation for Khulna Division, Dhaka First Division League cricket with Mohammadpur Cricket Club, district cricket in Jhenaidah, and university captaincy, athletics, and handball at SUST.',
  ],
  coreInquiry:
    'His broader research agenda explores how sport shapes personal and collective identity, mediates gender relations, reflects social inequality, and contributes to community development and social change.',
};

export const FEATURED_RESEARCH = {
  courseCode: 'ANP 470 · Undergraduate Research Monograph',
  department: 'Department of Anthropology, SUST',
  location: 'Jhenaidah, Bangladesh',
  title:
    'Negotiating Barriers: Understanding Agency and Socio-Cultural Constraints Among Female Cricketers in Jhenaidah, Bangladesh',
  framework: 'Agency Theory',
  summary:
    "An ethnographic qualitative study examining how gendered sporting norms, embodied restrictions, and uneven institutional support affect rural girls' participation in cricket—and how female players sustain participation through everyday negotiation.",
  focusAreas: [
    'Gender norms in cricket',
    'Embodied constraints',
    'Institutional neglect',
    'Female participation in sports',
    'Individual agency and everyday negotiation',
  ],
  methodologyCards: [
    {
      count: '14',
      label: 'In-Depth Interviews',
      detail: 'Primary qualitative interviews exploring lived sporting experiences and constraints.',
    },
    {
      count: '03',
      label: 'Key Informant Interviews',
      detail: 'Contextual perspectives from knowledgeable local figures involved in cricket.',
    },
    {
      count: '02',
      label: 'Focus Group Discussions',
      detail: 'Collective conversations examining shared social norms and peer dynamics.',
    },
    {
      count: 'Field',
      label: 'Participant Observation',
      detail: 'Direct observation conducted on-site during cricket practices and matches.',
    },
    {
      count: 'Braun & Clarke',
      label: 'Thematic Analysis',
      detail: 'Systematic thematic coding of verbatim Bangla interview transcripts.',
    },
    {
      count: 'ATLAS.ti',
      label: 'Qualitative Software',
      detail: 'Structured qualitative data coding, organization, and theme synthesis.',
    },
    {
      count: 'Ethics',
      label: 'Informed & Parental Consent',
      detail: 'Obtained informed consent from all participants, with parental consent for minors.',
    },
  ] as ResearchMethodCard[],
  findings: [
    {
      title: 'Cricket is socially coded as a male sport',
      description:
        'Local sporting spaces, expectations around bodily comportment, and public perception frame cricket primarily as a masculine domain.',
    },
    {
      title: 'Families act as both barriers and sources of support',
      description:
        'Household expectations can restrict mobility and practice time, yet selective family encouragement often enables continued participation.',
    },
    {
      title: 'Players sustain participation through everyday negotiation',
      description:
        'Rather than passively accepting exclusion, female cricketers navigate social scrutiny, schedules, and limited facilities through practical daily agency.',
    },
  ],
};

export const ACADEMIC_FIELDWORK = [
  {
    id: 'rohingya-camp',
    site: "Rohingya refugee camp, Cox's Bazar",
    affiliation: 'Department of Anthropology, SUST',
    description:
      'Academic fieldwork experience conducted as part of undergraduate anthropological training.',
  },
  {
    id: 'chakma-community',
    site: 'Chakma community, Golachipara, Chittagong Hill Tracts',
    affiliation: 'Department of Anthropology, SUST',
    description:
      'Ethnographic fieldwork exposure engaging with indigenous community life and sociocultural context.',
  },
];

export const PROPOSAL_DEFENSE = {
  title: 'Proposal Defense and Presentations',
  institution: 'Department of Anthropology, SUST',
  date: 'December 2025',
  description:
    'Presented the undergraduate research proposal (ANP 470) and delivered departmental seminar and paper presentations.',
};

export const RESEARCH_INTERESTS = [
  'Anthropology of sports',
  'Sports sociology',
  'Sports development',
  'Gender and sports',
  'Sports participation',
  'Social inequality',
  'Agency',
  'Sociocultural dimensions of athletic practices',
];

export const SPORTS_ENTRIES: SportsEntry[] = [
  {
    id: 'sust-captain',
    category: 'cricket',
    role: 'Captain — SUST University Cricket Team',
    organization: 'Shahjalal University of Science and Technology (SUST)',
    period: '2022 – Present',
    details: [
      'Leading the university cricket squad in inter-university competitions and team preparation.',
    ],
  },
  {
    id: 'sust-interdept',
    category: 'university',
    role: 'Champion — Inter-Department Cricket Tournament',
    organization: 'Department of Anthropology, SUST',
    period: '2023, 2024, 2025',
    details: [
      'Three-time champion representing the Department of Anthropology across consecutive university tournaments.',
    ],
  },
  {
    id: 'sust-athletics-2024',
    category: 'university',
    role: 'Champion — SUST Annual Sports Competition (Athletics)',
    organization: 'Shahjalal University of Science and Technology (SUST)',
    period: '2024',
    details: [
      'Awarded Individual Champion (Men) after winning First Place gold medals in Javelin Throw, Discus Throw, and Shot Put.',
    ],
  },
  {
    id: 'sust-athletics-2023',
    category: 'university',
    role: 'Third Place — SUST Annual Sports Competition (Athletics)',
    organization: 'Shahjalal University of Science and Technology (SUST)',
    period: '2023',
    details: ['Podium finish in university annual athletics competition.'],
  },
  {
    id: 'sust-handball',
    category: 'university',
    role: 'Player — SUST University Handball Team',
    organization: 'Shahjalal University of Science and Technology (SUST)',
    period: '2022, 2023',
    details: ['Represented the university varsity handball squad across two seasons.'],
  },
  {
    id: 'jhenaidah-district',
    category: 'cricket',
    role: 'Player — Jhenaidah District Cricket Team',
    organization: 'Jhenaidah District',
    period: '2020',
    details: ['Selected to represent Jhenaidah District in competitive senior district cricket.'],
  },
  {
    id: 'mohammadpur-cc',
    category: 'cricket',
    role: 'Player — Mohammadpur Cricket Club',
    organization: 'Dhaka First Division Cricket League (CCDM, Bangladesh Cricket Board)',
    period: '2019 – 2020 season',
    details: [
      'Competed in the Dhaka First Division Cricket League under the Cricket Committee of Dhaka Metropolis, Bangladesh Cricket Board.',
    ],
  },
  {
    id: 'khulna-division',
    category: 'cricket',
    role: 'Player — Khulna Division',
    organization: 'National Cricket Tournaments of the Bangladesh Cricket Board',
    period: '2013 – 2018',
    subPeriods: [
      'Under-14 (2013–14)',
      'Under-16 (2014–15, 2015–16)',
      'Under-18 (2016–17, 2017–18)',
    ],
    details: [
      'Represented Khulna Division across five consecutive national age-group tournament cycles organized by the Bangladesh Cricket Board.',
    ],
  },
];

export const ANNUAL_SPORTS_CHAMPION_GALLERY: ChampionGalleryItem[] = [
  {
    id: 'award-ceremony',
    typeLabel: 'Award Ceremony',
    title: 'Stage Medal Presentation',
    caption:
      'Receiving the gold medal and Individual Champion honours from university officials on stage at the SUST Annual Sports Competition.',
    src: '/assets/aistudio/1795472433360_c2f3e883.jpg',
    alt: 'Md. Mahabub Hassan shaking hands with university officials on stage while wearing a gold medal at the SUST Annual Sports Competition',
  },
  {
    id: 'victory-podium',
    typeLabel: 'Victory Podium',
    title: 'First Place on the Podium',
    caption:
      'Standing atop the 1st Place (১ম) podium position flanked by the 2nd and 3rd place finishers on the SUST central ground.',
    src: '/assets/aistudio/1795472433386_ead9cfd7.jpg',
    alt: 'Md. Mahabub Hassan standing on the top 1st place podium block between second and third place athletes at SUST',
  },
  {
    id: 'champion-portrait',
    typeLabel: 'Champion Portrait',
    title: 'Individual Champion Crest & Triple Gold',
    caption:
      'Holding the Individual Champion (Men) crest while wearing all three First Place gold medals earned across the throwing events.',
    src: '/assets/aistudio/1795472433319_8cb9084c.jpg',
    alt: 'Portrait of Md. Mahabub Hassan wearing three gold medals and holding the Individual Champion crest at SUST',
  },
  {
    id: 'crest-medals',
    typeLabel: 'Crest & Medals',
    title: 'Triple Gold Medals & Champion Crest',
    caption:
      'The SUST Annual Sports Competition Individual Champion crest alongside First Place gold medals in Javelin Throw, Discus Throw, and Shot Put.',
    src: '/assets/aistudio/1795472433278_b340006e.jpg',
    alt: 'Individual Champion crest and three First Place gold medals for Javelin Throw, Discus Throw, and Shot Put arranged on the turf',
  },
  {
    id: 'champions-together',
    typeLabel: 'Champions Duo',
    title: "Men's & Women's Individual Champions",
    caption:
      "Pictured alongside the Women's Individual Champion, both holding their SUST Annual Sports Competition champion crests and medals.",
    src: '/assets/aistudio/1795472433330_76b9652a.jpg',
    alt: "Md. Mahabub Hassan and the Women's Individual Champion holding their SUST Individual Champion crests and medals together",
  },
  {
    id: 'fellow-medalist',
    typeLabel: 'Fellow Medalists',
    title: 'Alongside Fellow Athletics Medalist',
    caption:
      'Post-ceremony portrait with a fellow multiple-medal winner on the SUST athletics field after the prize distribution.',
    src: '/assets/aistudio/1795472433338_683f41af.jpg',
    alt: 'Md. Mahabub Hassan standing beside a fellow multi-medal athlete on the SUST sports field',
  },
  {
    id: 'medalists-lineup',
    typeLabel: 'Group Lineup',
    title: 'Annual Sports Medalists on the Field',
    caption:
      'Full lineup of athletics medalists and individual champions gathered on the university ground following the closing ceremony.',
    src: '/assets/aistudio/1795472433263_f680f39b.jpg',
    alt: 'Group photograph of SUST Annual Sports Competition medalists and champions lined up on the field',
  },
];

export const LEADERSHIP_ENTRIES: LeadershipEntry[] = [
  {
    id: 'mangrove-vp',
    role: 'Vice President',
    organization: 'Mangrove Association, SUST',
    period: '2025 – November 2026',
  },
  {
    id: 'asl-convenor',
    role: 'Convenor — ASL 2025',
    organization: '26th Batch, Department of Anthropology, SUST',
    period: '2025',
  },
  {
    id: 'anp-sports-sec',
    role: 'Sports Secretary',
    organization: 'Anthropology Society, Department of Anthropology, SUST',
    period: 'September 2024 – September 2025',
    note: 'Received a Certificate of Appreciation for volunteer service in this role.',
  },
  {
    id: 'sports-sust-exec',
    role: 'Executive Member',
    organization: 'Sports SUST',
    period: '2022',
  },
  {
    id: 'chokh-film',
    role: 'General Member',
    organization: 'Chokh Film Society, SUST',
    period: '2022',
  },
  {
    id: 'mangrove-member',
    role: 'General Member',
    organization: 'Mangrove Association, SUST',
    period: '2021 – 2025',
  },
];

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    id: 'sust-bss',
    institution: 'Shahjalal University of Science and Technology (SUST)',
    degree: 'Bachelor of Social Science (BSS), Anthropology',
    boardOrDepartment: 'Sylhet, Bangladesh',
    period: 'Passing year 2024 (examination held in 2025)',
    grade: 'CGPA 3.12 / 4.00',
    credits: '141 credits',
  },
  {
    id: 'kanchannager-hsc',
    institution: 'Kanchannager Model School and College',
    degree: 'Higher Secondary Certificate (HSC), Humanities',
    boardOrDepartment: 'Jessore Board',
    period: '2019',
    grade: 'GPA 3.58 / 5.00',
  },
  {
    id: 'wazir-ali-ssc',
    institution: 'Jhenaidah Wazir Ali School and College',
    degree: 'Secondary School Certificate (SSC), Humanities',
    boardOrDepartment: 'Jessore Board',
    period: '2017',
    grade: 'GPA 3.45 / 5.00',
  },
];

export const AWARDS_ENTRIES: AwardEntry[] = [
  {
    id: 'sust-sports-scholarship',
    title: 'Sports Scholarship',
    issuer: 'Office of Physical Education, SUST',
    year: '2026',
  },
  {
    id: 'athletics-champion-2024',
    title: 'Champion, SUST Annual Sports Competition (Athletics)',
    issuer: 'Shahjalal University of Science and Technology (SUST)',
    year: '2024',
  },
  {
    id: 'athletics-third-2023',
    title: 'Third Place, SUST Annual Sports Competition (Athletics)',
    issuer: 'Shahjalal University of Science and Technology (SUST)',
    year: '2023',
  },
  {
    id: 'peter-hoare-scholarship',
    title: 'Peter Hoare and Mushtaq Rahman Scholarship',
    issuer: 'Department of Anthropology, SUST',
    year: '2022',
    note: 'Awarded in the first year, first semester.',
  },
];

export const TRAINING_ENTRIES: TrainingEntry[] = [
  {
    id: 'symbolic-marathon',
    title: '5 km Symbolic Marathon',
    organizer: 'Sylhet District Administration',
    date: '18 July 2025',
    details: ['Participated in the event marking the July–August mass uprising.'],
  },
  {
    id: 'visual-anthropology-workshop',
    title: 'Workshop on Visual Anthropology (one day)',
    organizer: 'Department of Anthropology, SUST',
    date: '10 February 2025',
    details: ['Departmental workshop focused on visual ethnographic methods.'],
  },
  {
    id: 'bksp-tip',
    title: 'Talent Identification Programme (Cricket)',
    organizer: 'Bangladesh Institute of Sports (BKSP)',
    date: '2013',
    details: [
      'Dhaka (16 Aug – 14 Oct 2013, two-month training programme) and Chattogram (12 Mar – 10 Apr 2013).',
      'Awarded Grade B+ in both programme assessments, the highest grade awarded.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'research',
    title: 'Research & Qualitative Methods',
    items: [
      'In-depth interviews',
      'Key informant interviews',
      'Focus group discussions',
      'Participant observation',
      'Field notes',
      'Thematic analysis',
      'Proposal and monograph writing',
      'Research ethics',
    ],
  },
  {
    id: 'software',
    title: 'Analysis & Productivity Software',
    items: ['ATLAS.ti', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
  },
  {
    id: 'media',
    title: 'Visual & Media Storytelling',
    items: ['Photography', 'Videography', 'Travel storytelling'],
  },
  {
    id: 'professional',
    title: 'Leadership & Professional Practice',
    items: [
      'Team leadership',
      'Event management',
      'Public speaking',
      'Presentation',
      'Teamwork under pressure',
    ],
  },
];

export const LANGUAGES: LanguageProficiency[] = [
  { language: 'Bangla', level: 'Fluent' },
  { language: 'English', level: 'Proficient' },
  { language: 'Hindi', level: 'Intermediate' },
  { language: 'Urdu', level: 'Intermediate' },
];

export const PERSONAL_INTERESTS = [
  'Cricket',
  'Handball',
  'Athletics',
  'Travelling',
  'Travel storytelling',
  'Photography',
  'Videography',
];
