
import React from 'react';
import { Project, ProjectCategory } from './types';

export const WHATSAPP_LINK = "https://wa.me/918565841359";

export const PROJECTS: Project[] = [
  // MOBILE APPS
  {
    id: 'm1',
    title: 'Market View - Live MCX NCDEX',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/search?q=market%20view&c=apps&hl=en_IN',
    tags: ['Fintech', 'Stock Market', 'Live Data']
  },
  {
    id: 'm2',
    title: 'Auro Scholar',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=com.auro.application',
    tags: ['Education', 'Incentivized Learning']
  },
  {
    id: 'm3',
    title: 'Project Inclusion',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=com.pi.ProjectInclusion',
    tags: ['Social Impact', 'Education']
  },
  {
    id: 'm4',
    title: 'Education App (eMango)',
    category: ProjectCategory.MOBILE,
    duration: '10 months',
    link: 'https://play.google.com/store/apps/details?id=com.emango.global',
    tags: ['Global Education', 'LMS']
  },
  {
    id: 'm5',
    title: 'Vehicle Tracking (Fleethunt)',
    category: ProjectCategory.MOBILE,
    duration: '4 months',
    link: 'https://play.google.com/store/apps/details?id=com.fleethunt.neo',
    tags: ['GPS', 'Logistics', 'Real-time']
  },
  {
    id: 'm6',
    title: 'Vicart Photo Color Changer',
    category: ProjectCategory.MOBILE,
    duration: '1 month',
    link: 'https://play.google.com/store/apps/details?id=com.vicart.photo.color.changer',
    tags: ['Image Editing', 'Creative Tools']
  },
  {
    id: 'm7',
    title: 'Dress Color Changer',
    category: ProjectCategory.MOBILE,
    duration: '3 months',
    link: 'https://play.google.com/store/apps/details?id=com.csmart.dresscolorchanger',
    tags: ['Fashion Tech', 'Image Processing']
  },
  {
    id: 'm8',
    title: 'ZIIEI Innovation Pathshala',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=com.ip.ziiei',
    tags: ['Kotlin', 'Education', 'Innovation']
  },
  {
    id: 'm9',
    title: 'BetterApp Project',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=app_parangat.unity_better',
    tags: ['JAVA', 'Productivity']
  },
  {
    id: 'm10',
    title: 'PT-2023 EventApp',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=com.pt2023.eventplus',
    tags: ['Kotlin', 'Event Management']
  },
  {
    id: 'm11',
    title: 'A3 Charge App',
    category: ProjectCategory.MOBILE,
    ongoing: true,
    link: 'https://play.google.com/store/apps/details?id=com.zdhx.india',
    tags: ['IoT', 'Charging Infrastructure']
  },
  {
    id: 'm12',
    title: 'Dr. Archika Didi',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=com.app.drarchikadidi',
    tags: ['Spiritual', 'Community']
  },
  {
    id: 'm13',
    title: 'Sudhanshu ji Maharaj (VJM)',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=com.vjm.vjm',
    tags: ['VJM', 'Religious']
  },
  {
    id: 'm14',
    title: 'Mother Dairy eStock',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=com.estock.at.motherdairy',
    tags: ['Enterprise', 'Supply Chain']
  },
  {
    id: 'm15',
    title: 'Safal Store',
    category: ProjectCategory.MOBILE,
    link: 'https://play.google.com/store/apps/details?id=com.estock.vi.safal.safal95',
    tags: ['Inventory', 'Retail']
  },

  // WEBSITES
  {
    id: 'w1',
    title: 'TravelTime',
    category: ProjectCategory.WEB,
    link: 'https://www.traveltime.co.in/home',
    tags: ['Travel', 'Booking Engine']
  },
  {
    id: 'w2',
    title: 'EdMyst',
    category: ProjectCategory.WEB,
    link: 'https://edmyst.com/',
    tags: ['Learning', 'Career Coaching']
  },
  {
    id: 'w3',
    title: 'EdMyst Coach',
    category: ProjectCategory.WEB,
    link: 'https://www.edmyst.coach/',
    tags: ['Mentorship', 'Web Platform']
  },
  {
    id: 'w4',
    title: 'Katdare Foods',
    category: ProjectCategory.WEB,
    link: 'https://www.katdarefoods.in/',
    tags: ['E-commerce', 'FMCG']
  },
  {
    id: 'w5',
    title: 'Indogen Seeds',
    category: ProjectCategory.WEB,
    link: 'http://Indogenseeds.com',
    tags: ['Agriculture', 'Corporate']
  },
  {
    id: 'w6',
    title: 'Web Alpha Tech',
    category: ProjectCategory.WEB,
    link: 'https://webalphatech.com/',
    tags: ['Technology Solutions']
  },
  {
    id: 'w7',
    title: 'HEHPL UKS Techno',
    category: ProjectCategory.WEB,
    link: 'https://hehpl.ukstechno.co.in/',
    tags: ['Industrial', 'Corporate']
  },
  {
    id: 'w8',
    title: 'BMJ Laws & Partners',
    category: ProjectCategory.WEB,
    link: 'https://bmjlawspartners.com',
    tags: ['Legal', 'Consulting']
  },
  {
    id: 'w9',
    title: 'Sarawak Land',
    category: ProjectCategory.WEB,
    link: 'https://sarawakland.com/',
    tags: ['Real Estate', 'Properties']
  },
  {
    id: 'w10',
    title: 'Tucson Veterans',
    category: ProjectCategory.WEB,
    link: 'https://tucsonveterans.com/',
    tags: ['Community', 'Service']
  }
];

export const SVGS = {
  Android: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.523 15.3414C17.0609 15.3414 16.6917 14.9721 16.6917 14.5101C16.6917 14.0481 17.0609 13.6788 17.523 13.6788C17.985 13.6788 18.3542 14.0481 18.3542 14.5101C18.3542 14.9721 17.985 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01502 15.3414 5.64577 14.9721 5.64577 14.5101C5.64577 14.0481 6.01502 13.6788 6.47702 13.6788C6.93902 13.6788 7.30827 14.0481 7.30827 14.5101C7.30827 14.9721 6.93902 15.3414 6.47702 15.3414ZM17.9152 10.6052L19.8335 7.28258C19.9577 7.06734 19.8839 6.7925 19.6687 6.66826C19.4535 6.54402 19.1787 6.61783 19.0544 6.83307L17.1009 10.2173C15.6559 9.56019 14.0441 9.20142 12.35 9.20142C10.6559 9.20142 9.04407 9.56019 7.59914 10.2173L5.64573 6.83307C5.52149 6.61783 5.24665 6.54402 5.03141 6.66826C4.81617 6.7925 4.74236 7.06734 4.8666 7.28258L6.78486 10.6052C3.12061 12.5694 0.612549 16.3338 0.35 20.7028H24.35C24.0874 16.3338 21.5794 12.5694 17.9152 10.6052Z" />
    </svg>
  ),
  Apple: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.05 20.28c-.96.95-2.04 1.84-3.41 1.84-1.34 0-1.74-.83-3.29-.83-1.57 0-2.03.81-3.32.81-1.29 0-2.35-.87-3.41-1.84C1.35 18.01.21 14.24.21 11.08c0-3.32 2.11-5.12 4.19-5.12 1.07 0 1.9.61 2.76.61s1.51-.62 2.76-.62c1.9 0 4.1 1.5 4.1 4.54a6.74 6.74 0 0 1-3.45 6.34c-.81 1.15-.4 2.14.4 2.14 1.25 0 2.22-1.28 3.12-2.14.86-.81 1.77-1.46 2.45-1.46.68 0 1.05.35 1.05.9 0 .55-.54 1.18-1.54 2.05zM12.03 5.07c0-2.32 1.89-4.22 4.22-4.22.12 0 .23 0 .34.01 0 2.32-1.89 4.21-4.22 4.21-.12 0-.23 0-.34-.01z" />
    </svg>
  ),
  WebDev: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  CrossPlatform: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  AI: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  UIUX: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  )
};

export const SERVICES = [
  {
    title: "Website Development",
    description: "High-performance web platforms, corporate sites, and e-commerce solutions built with modern stacks.",
    icon: SVGS.WebDev
  },
  {
    title: "Android App Development",
    description: "Robust and scalable native Android applications using Kotlin and Java for ultimate performance.",
    icon: SVGS.Android
  },
  {
    title: "iOS App Development",
    description: "Premium native iOS experiences that leverage the latest Apple technologies and design standards.",
    icon: SVGS.Apple
  },
  {
    title: "Cross Platform Development",
    description: "Cost-effective and rapid development using Flutter and React Native to reach all users simultaneously.",
    icon: SVGS.CrossPlatform
  },
  {
    title: "AI Integration",
    description: "Implementing cutting-edge LLMs, predictive analytics, and smart automation into your business apps.",
    icon: SVGS.AI
  },
  {
    title: "UI/UX Engineering",
    description: "Stunning visuals paired with intuitive user journeys designed to convert and retain customers.",
    icon: SVGS.UIUX
  }
];
