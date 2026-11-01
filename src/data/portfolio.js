// Source: Kenny_Dael_Asan_ATS_Resume.pdf. Omit unknown dates and links.
export const profile = {
  name: 'Kenny Dael Asan',
  title: 'Software Engineer',
  specialty: 'Full-Stack & Mobile Developer',
  location: 'Taguig City, Philippines',
  email: 'kennydael213@gmail.com',
  phone: '+63 976 629 5376',
  github: 'https://github.com/LeeSinHanma',
  linkedin: 'https://www.linkedin.com/in/kenny-dael-asan-3b2b55240/',
  resume: '/documents/Kenny-Dael-Asan-Resume.pdf',
  introduction:
    'I build mobile apps, web experiences, and the systems that connect them. From the first prototype to a published product.',
  about:
    'I’m Kenny, a software developer and computer science student based in Taguig City. I like understanding how things work, then turning that understanding into something people can use.',
  approach:
    'My work moves between interfaces, backend services, and computer vision. I independently built and published RideOut, led technical planning for SentryDrive, and developed a sign-language recognition prototype. I’m comfortable taking an idea through design, development, and deployment.',
  background:
    'My experience in captioning, customer service, and recruitment brings another perspective to my software work: communicating clearly and keeping the person on the other side in mind.',
  study: 'Studying Computer Science',
  graduation: 'Expected graduation · July 2027',
}
export const projects = [
  {
    id: 'rideout',
    number: '01',
    name: 'RideOut',
    year: '2026',
    category: 'Mobile application',
    categories: ['Mobile'],
    featured: true,
    role: 'Sole Developer',
    status: 'Published on Google Play',
    tagline: 'Different riders. One direction.',
    description:
      'An Android navigation and group-tracking app that helps riders stay connected, follow synchronized routes, and keep track of their group in real time.',
    stack: ['Flutter', 'Node.js', 'Firebase', 'Google Maps API'],
    contributions: [
      'Designed, built, and released the Android application, with a Node.js backend, Firebase Realtime Database, and Cloud Firestore.',
      'Implemented real-time group location tracking, synchronized routing, proximity alerts, route recalculation, Google Maps integration, and OAuth authentication.',
      'Deployed and maintained backend services on DigitalOcean using Linux and PM2, and handled the Google Play release workflow.',
    ],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.rideout.app',
      },
      { label: 'Project website', url: 'https://ride-out.vercel.app/' },
    ],
    media: {
      map: '/media/rideout-map.webp',
      summary: '/media/rideout-summary.webp',
      video: '/media/rideout-demo.mp4',
    },
  },
  {
    id: 'sentrydrive',
    number: '02',
    name: 'SentryDrive',
    year: '2026',
    category: 'Computer vision · Web',
    categories: ['Web', 'AI & vision'],
    featured: true,
    role: 'Technical Planning Lead & Sole Website Developer',
    status: 'Thesis project',
    tagline: 'Making fatigue visible.',
    description:
      'A driver-fatigue monitoring thesis platform connecting an ESP32 camera, Android, and a web dashboard for viewing yawning and eye-closure events across vehicle fleets.',
    stack: ['React', 'Firebase', 'MediaPipe', 'ESP32'],
    contributions: [
      'Owned technical feasibility assessment, feature prioritization, scope decisions, and presentation of the fatigue-monitoring system.',
      'Independently developed the React and Firebase dashboard using Realtime Database and Firestore.',
      'Created a MediaPipe/Tkinter head-controlled driving game, using eye-closure detection to trigger interactive hazards during demonstrations.',
    ],
    links: [],
  },
  {
    id: 'signify',
    number: '03',
    name: 'Signify',
    year: '2025',
    category: 'Machine learning · Desktop',
    categories: ['AI & vision', 'Desktop'],
    featured: true,
    role: 'Full-Stack & Machine Learning Developer',
    status: 'Academic project',
    tagline: 'A different kind of conversation.',
    description:
      'A computer-vision prototype that recognizes hand-signed letters, connecting a Python desktop interface to a trained machine-learning model.',
    stack: ['Python', 'FastAPI', 'MediaPipe', 'Random Forest'],
    contributions: [
      'Built the Python/Tkinter interface and FastAPI backend for sign-language letter recognition.',
      'Prepared and cleaned datasets, extracted MediaPipe features, and trained a Random Forest classifier.',
      'Integrated model inference with the application data flow.',
    ],
    links: [],
  },
  {
    id: 'tindahan',
    number: '04',
    name: 'Tindahan System',
    year: '2026',
    category: 'Desktop application',
    categories: ['Desktop'],
    featured: false,
    role: 'Sole Developer',
    status: 'Open-source · In progress',
    description:
      'A cross-platform grocery inventory application for Windows and Linux.',
    stack: ['Python', 'Tkinter'],
    contributions: [
      'Built inventory tracking, barcode scanning, grocery lists, a profit dashboard, and low-stock alerts.',
    ],
    links: [],
  },
  {
    id: 'dondons',
    number: '05',
    name: 'Dondon’s Fitness Gym',
    category: 'Membership & inventory',
    categories: ['Web'],
    featured: false,
    role: 'Frontend Developer',
    status: 'Academic project',
    description:
      'An Ionic/PWA frontend for gym membership and inventory workflows.',
    stack: ['Ionic', 'PWA'],
    contributions: [
      'Designed the user interface, navigation, QR generation and scanning experiences, and frontend data flows.',
    ],
    links: [],
  },
  {
    id: 'newhikes',
    number: '06',
    name: 'NewHikes',
    category: 'Interactive web experience',
    categories: ['Web'],
    featured: false,
    role: 'Sole Developer',
    status: 'Academic demo',
    description:
      'A React landing-page prototype exploring 3D visuals and immersive scrolling.',
    stack: ['React', 'React Three Fiber', 'Drei'],
    contributions: [
      'Created an interactive 3D landing-page demo using React Three Fiber and Drei. The demo has no production backend.',
    ],
    links: [{ label: 'Live demo', url: 'https://new-hikes.vercel.app/' }],
  },
]
export const skillGroups = [
  {
    name: 'Frontend & mobile',
    note: 'The parts people interact with.',
    icon: 'interface',
    skills: [
      'Flutter',
      'React',
      'Ionic',
      'Progressive Web Apps',
      'HTML',
      'CSS',
      'Tkinter',
      'React Three Fiber',
      'Drei',
      'UI/UX design',
    ],
  },
  {
    name: 'Backend & data',
    note: 'The systems behind the experience.',
    icon: 'layers',
    skills: [
      'Node.js',
      'FastAPI',
      'Firebase Realtime Database',
      'Cloud Firestore',
      'OAuth',
      'REST APIs',
      'Data integration',
    ],
  },
  {
    name: 'Languages',
    note: 'Different tools for different problems.',
    icon: 'code',
    skills: [
      'Python',
      'JavaScript',
      'Java',
      'C#',
      'C++',
      'Lua',
      'Visual Basic',
    ],
  },
  {
    name: 'AI, vision & hardware',
    note: 'Where software meets the physical world.',
    icon: 'scan',
    skills: [
      'MediaPipe',
      'Random Forest',
      'Model training',
      'Dataset preparation',
      'Computer vision',
      'ESP32',
      'Arduino',
    ],
  },
  {
    name: 'Tools & deployment',
    note: 'From local development to going live.',
    icon: 'globe',
    skills: [
      'Git',
      'GitHub',
      'Linux',
      'DigitalOcean',
      'PM2',
      'Vercel',
      'Google Cloud',
      'Google Maps API',
      'Google Play Console',
      'CI/CD concepts',
    ],
  },
]
export const experience = [
  {
    company: 'Alorica',
    role: 'Sales Representative',
    date: 'Aug 2024 — Dec 2024',
    location: 'Quezon City · Work from home',
    description:
      'Processed customer orders, verified shipping details, handled upselling, and responded to inquiries while working toward a 90-second average handling-time target.',
  },
  {
    company: 'Alorica',
    role: 'Captioning Agent',
    date: 'Sep 2022 — Sep 2023',
    location: 'Taguig City · On-site',
    description:
      'Produced real-time English captions across accents and contexts, including personal, business, and IVR calls.',
  },
  {
    company: 'Foundever (Sitel)',
    role: 'Recruitment Specialist',
    date: 'Oct 2021 — Jul 2022',
    location: 'Mandaluyong City · Blended',
    description:
      'Conducted initial interviews, maintained applicant tracking information, contacted up to 40 candidates daily, and guided candidates through recruitment.',
  },
]
export const education = [
  {
    school: 'Taguig City University',
    course: 'Computer Science',
    date: 'Expected July 2027',
  },
  { school: 'MCA Montessori School', course: 'ICT', date: 'March 2019' },
]
export const certifications = ['CompTIA A+']
