// Site-wide constants and data for the portfolio

export const SITE = {
  name: "Md. Maruf Ur Rahman Munna",
  tagline: "Full Stack Web Developer & Backend Enthusiast",
  description:
    "Passionate about building real-world web and mobile applications. CSE undergraduate at HSTU, Competitive Programmer, and aspiring Entrepreneur.",
  email: "munna.csehstu@gmail.com",
  phone: "+880 1646198633",
  whatsapp: "+880 1646198633",
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
  { label: "Resume", href: "/resume" },
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
  // Web Projects
  {
    _id: "w1",
    title: "StudyCSCA",
    description:
      "StudyCSCA is a comprehensive exam preparation platform featuring over 15,000 practice questions, official past papers, and realistic mock exams. It is designed to help professionals track their progress and confidently pass the CSCA certification on their first try.",
    imageUrl: "/images/project-images/web-images/studycsca.jpeg",
    liveUrl: "https://test.studycsca.com/",
    category: "web",
    techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "Tailwind CSS"],
    featured: true,
  },
  {
    _id: "w2",
    title: "School of Super Kids",
    description:
      "An interactive online programming education platform designed for young learners in Bangladesh. Features live one-to-one classes where little programmers and junior programmers learn programming fundamentals through engaging sessions. The platform empowers Bangladeshi kids with coding skills, offering personalized instruction and a structured curriculum to help them excel in the digital world.",
    imageUrl: "/images/project-images/web-images/turnyourchild.jpeg",
    liveUrl: "https://www.schoolofsuperkids.com",
    category: "web",
    techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "Tailwind CSS"],
    featured: true,
  },
  {
    _id: "w3",
    title: "BuildIQ",
    description:
      "BuildIQ is a modern real estate platform showcasing premium, smart apartments located in the heart of Uttara, Dhaka. Users can easily browse handpicked listings to view pricing and availability, and directly request agreements for spaces in a 10-story residential tower equipped with wellness amenities and smart parking.",
    imageUrl: "/images/project-images/web-images/buildIQ.jpeg",
    liveUrl: "https://build-iq.web.app/",
    category: "web",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
    featured: true,
  },
  {
    _id: "w4",
    title: "Md Morsalin Portfolio",
    description:
      "Md. Morsalin's personal portfolio highlights his academic and professional achievements in Energy and Power Engineering. The site details his educational background, technical skills, and specialized research in fuel cell and battery management systems, alongside his publications and professional memberships.",
    imageUrl: "/images/project-images/web-images/mursalin.jpeg",
    liveUrl: "https://www.mdmorsalin.com/",
    category: "web",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: false,
  },

  {
    _id: "w5",
    title: "RDAS (Web)",
    description:
      "The Real-time Disaster Alert System(RDAS) is a full-stack platform engineered to automate the detection and dissemination of life-critical warnings for natural disasters, with a primary focus on Bangladesh.",
    imageUrl: "/images/project-images/web-images/rdas-laptop.jpeg",
    liveUrl: "https://rdasbd.vercel.app/",
    category: "web",
    techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS",],
    featured: true,
  },
  {
    _id: "w6",
    title: "TheView",
    description:
      "A blogging platform that allows users to create and share their thoughts, ideas, and stories with the world. It features a user-friendly interface for writing and publishing blog posts, as well as a vibrant community of readers and writers.",
    imageUrl: "/images/project-images/web-images/theview.jpeg",
    liveUrl: "https://view-blog-website.web.app/",
    category: "web",
    techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase"],
    featured: false,
  },

  // Mobile Projects
  {
    _id: "m1",
    title: "Ryzen Store",
    description:
      "Ryzen Store is a modern Bangladeshi eCommerce platform built with Flutter, offering a smooth and responsive shopping experience for gaming, tech, and digital products. Developed as part of our portfolio by RyzenSoft.",
    imageUrl: "/images/project-images/app-images/ryzen_store.png",
    liveUrl: "https://drive.google.com/file/d/1yMms9HcrgVlxxcLlU5vLL4S2VhmGwj9U/view?usp=sharing",
    category: "mobile",
    techStack: ["Flutter", "Dart", "Firebase", "REST API", "SQLite"],
    featured: true,
  },
  {
    _id: "m2",
    title: "Amar Smart Wallet",
    description:
      "A modern digital wallet application that allows users to manage their finances, and track their spending. Features include real-time balance updates and transaction history",
    imageUrl: "/images/project-images/app-images/wallet_logo.jpeg",
    liveUrl: "https://drive.google.com/file/d/1qGZWWt8xH6na_dIuWlKfwM5T8Ji8kJiO/view?usp=sharing",
    category: "mobile",
    techStack: ["Flutter", "Dart", "Firebase", "SQLite"],
    featured: true,
  },
  // {
  //   _id: "m3",
  //   title: "Astha NGO",
  //   description:
  //     "It is an NGO management app that helps NGOs manage their operations efficiently. It includes features for client management, tracking their loans, deposits, and payments. The app provides a user-friendly interface for NGOs to streamline their processes and improve their service delivery.",
  //   imageUrl: "/images/project-images/app-images/astha_logo.jpeg",
  //   liveUrl: "https://drive.google.com/file/d/1Wes4VdqdZgNhG71DwMCOg9ssyZYaHjJz/view?usp=sharing",
  //   category: "mobile",
  //   techStack: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB"],
  //   featured: false,
  // },
  {
    _id: "m4",
    title: "RDAS (Mobile)",
    description:
      "The Real-time Disaster Alert System(RDAS) is a full-stack platform engineered to automate the detection and dissemination of life-critical warnings for natural disasters, with a primary focus on Bangladesh.",
    imageUrl: "/images/project-images/app-images/rdas.png",
    liveUrl: "https://drive.google.com/file/d/1-h7IV91pktZMU-dWwW-VoAsEY4rPjXSF/view?usp=sharing",
    category: "mobile",
    techStack: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    featured: true,
  },
  // {
  //   _id: "m5",
  //   title: "Amar Todo",
  //   description:
  //     "It is a todo list app that helps users organize their tasks and manage their time effectively. The app allows users to create, edit, and delete tasks, set reminders, and categorize tasks for better organization. With a user-friendly interface and intuitive design, Amar Todo makes task management simple and efficient for users on the go.",
  //   imageUrl: "/images/project-images/app-images/amar_todo.jpeg",
  //   liveUrl: "https://drive.google.com/file/d/1SE0dRNjMJqByLEKDfPnNjX3LPjgblZQY/view?usp=sharing",
  //   category: "mobile",
  //   techStack: ["Flutter", "Dart", "SQLite", "Hive"],
  //   featured: false,
  // },
];
