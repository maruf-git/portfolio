// Site-wide constants and data for the portfolio

export const SITE = {
  name: "Md. Maruf",
  tagline: "Full Stack Web Developer & Backend Enthusiast",
  description:
    "Passionate about building real-world web and mobile applications. CSE undergraduate at HSTU, Competitive Programmer, and aspiring Entrepreneur.",
  email: "munna.csehstu@gmail.com",
  phone: "+880 1733971153",
  whatsapp: "+880 1733971153",
  location: "Dinajpur, Bangladesh",
  university: "Hajee Mohammad Danesh Science and Technology University",
  universityShort: "HSTU",
  universityUrl: "https://hstu.ac.bd",
  year: "3rd Year (2022 – Present)",
  company: {
    name: "MarufTech Solutions",
    tagline: "Your Trusted Web Solution Partner",
    description:
      "Building scalable digital solutions for businesses. Coming soon — the future of web development in Bangladesh.",
    comingSoon: true,
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "/projects" },
  // { label: "Apps", href: "#mobile-apps" },
  // { label: "CP", href: "#cp" },
  // { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/maruf-git", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-maruf-ur-rahman-munna/",
    icon: "linkedin",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/maruf710",
    icon: "codeforces",
  },
  // { label: "LeetCode", href: "https://leetcode.com/maruf", icon: "leetcode" },
  // { label: "CodeChef", href: "https://codechef.com/users/maruf", icon: "codechef" },
];

export const STATS = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Problems Solved", value: 500, suffix: "+" },
  { label: "Years in CP", value: 1.5, suffix: "+" },
  { label: "Tech Stack", value: 15, suffix: "+" },
];

export const SKILLS = {
  languages: [
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "C++", icon: "⚡" },
    { name: "C", icon: "🔵" },
    { name: "Java", icon: "☕" },
    { name: "Dart", icon: "💙" },
  ],
  frontend: [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Redux", icon: "🔄" },
    { name: "Flutter", icon: "📱" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Firebase", icon: "🔥" },
  ],
  databases: [
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "Prisma ORM", icon: "🔺" },
  ],
  tools: [
    { name: "Git & GitHub", icon: "🔀" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📮" },
    { name: "Figma", icon: "🎭" },
  ],
};

export const CP_PROFILES = [
  {
    platform: "Codeforces",
    handle: "your_handle",
    url: "https://codeforces.com/profile/your_handle",
    rating: "Pupil",
    color: "#1890ff",
    bgColor: "from-blue-600/20 to-blue-400/5",
    description: "Regular participant in Div 2 & Div 3 contests.",
  },
  {
    platform: "LeetCode",
    handle: "your_handle",
    url: "https://leetcode.com/your_handle",
    rating: "300+ problems",
    color: "#FFA116",
    bgColor: "from-orange-500/20 to-yellow-400/5",
    description: "Strong focus on Data Structures & Algorithms.",
  },
  {
    platform: "CodeChef",
    handle: "your_handle",
    url: "https://www.codechef.com/users/your_handle",
    rating: "3★",
    color: "#5B4638",
    bgColor: "from-amber-800/20 to-amber-600/5",
    description: "Active in long challenges and cook-offs.",
  },
];

export const TIMELINE = [
  {
    year: "Present",
    title: "Deepening Backend Engineering",
    subtitle: "Advanced Architectures",
    description:
      "Currently focusing deeply on backend engineering, scalable system design, and building robust APIs.",
    type: "skill",
  },
  {
    year: "Mid 2025",
    title: "Mobile App Development",
    subtitle: "Flutter & Dart",
    description:
      "Expanded skillset to mobile platforms, building cross-platform applications with Flutter.",
    type: "skill",
  },
  {
    year: "2024",
    title: "Full Stack Web Development",
    subtitle: "MERN Stack & Next.js",
    description:
      "Started intensive full stack web development, mastering modern technologies like React, Next.js, Node.js, and databases.",
    type: "education",
  },
  {
    year: "2022 – 2024",
    title: "Competitive Programming",
    subtitle: "Codeforces, LeetCode, CodeChef",
    description:
      "Spent 1.5+ years deeply engaged in competitive programming, solving 500+ algorithmic problems across various online judges.",
    type: "achievement",
  },
  {
    year: "2022",
    title: "Started BSc in CSE",
    subtitle: "HSTU, Dinajpur",
    description:
      "Began my undergraduate journey in Computer Science & Engineering at Hajee Mohammad Danesh Science and Technology University.",
    type: "education",
  },
];

// Static project data (fallback if MongoDB not connected)
export const STATIC_PROJECTS = [
  {
    _id: "1",
    title: "School of Super Kids",
    description:
      "An interactive online programming education platform designed for young learners in Bangladesh.",
    techStack: ["Next.js", "ShadCN", "Tailwind CSS", "Express.js", "MongoDB"],
    category: "website",
    tag: "fullstack",
    liveUrl: "https://www.schoolofsuperkids.com/",
    githubUrl: "#",
    featured: false,
    imageUrl: "/schoolofsuperkids.webp",
  },
  {
    _id: "2",
    title: "Food Bridge",
    description:
      "A food sharing platform that connects food donors with people in need. Users can donate surplus food, browse available donations, and help reduce food waste while supporting the community.",
    techStack: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Redux"],
    category: "website",
    tag: "fullstack",
    liveUrl: "https://foodbridge-1.web.app/",
    githubUrl: "#",
    featured: false,
    imageUrl: "/food-bridge.webp",
  },
  {
    _id: "3",
    title: "Real Estate Platform",
    description:
      "A comprehensive real estate platform where users can browse, search, and find their dream properties. Features include property listings, detailed views, user authentication, and modern UI/UX design.",
    techStack: ["React", "Tailwind CSS", "Express Js", "Mongodb"],
    category: "website",
    tag: "fullstack",
    liveUrl: "https://nivash-e352f.web.app/",
    githubUrl: "#",
    featured: false,
    appDownloadUrl: "#",
    imageUrl: "/nivash.webp",
  },
  {
    _id: "4",
    title: "Plant Pal - Plant Gallery",
    description:
      "PlantPal is a Plant care and gardening platform that helps users manage their plants, track care schedules, and learn about plant cultivation. Features include plant identification, care reminders, and a community for plant enthusiasts.",
    techStack: ["React", "Tailwind CSS", "firebase", "Express Js", "Mongodb"],
    category: "website",
    tag: "fullstack",
    liveUrl: "https://plantpal-425bc.web.app/",
    githubUrl: "#",
    featured: false,
    imageUrl: "/plant-pal.webp",
  },
  {
    _id: "5",
    title: "Discout Pro - Coupon Collector",
    description:
      "A simple Coupon Collecting Application designed to help users easily find and use discount coupons for popular e-commerce shops world wide.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Express Js", "Mongodb"],
    category: "website",
    tag: "fullstack",
    liveUrl: "https://discount-pro-200b8.web.app/",
    githubUrl: "#",
    featured: false,
    imageUrl: "/discount-pro.webp",
  },
  {
    _id: "6",
    title: "Chill Gamer",
    description:
      "A platform where users can explore and share game reviews.The application has a clean and responsive UI, focusing on simplicity and functionality to provide a chill experience.",
    techStack: ["React", "Tailwind CSS", "Firebase", "Express.js", "MongoDB"],
    category: "website",
    tag: "fullstack",
    liveUrl: "https://game-review-4919a.web.app/",
    githubUrl: "#",
    featured: false,
    imageUrl: "/chill-gamer.webp",
  },
];

// Static mobile apps data
export const STATIC_APPS = [
  {
    _id: "m1",
    title: "Weather Forecast App",
    description:
      "Real-time weather forecasts, severe weather alerts, and multi-location tracking with a beautiful dark UI.",
    techStack: ["Flutter", "Dart", "REST API", "Firebase"],
    appDownloadUrl: "#",
    playStoreUrl: null,
    imageUrl: null,
    category: "mobile",
  },
  {
    _id: "m2",
    title: "Safety & Emergency App",
    description:
      "An emergency safety app with SOS alerts, location sharing, and safety timer for personal protection.",
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    appDownloadUrl: "#",
    playStoreUrl: null,
    imageUrl: null,
    category: "mobile",
  },
];
