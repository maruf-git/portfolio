import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, Printer, Phone, Mail, Linkedin, Github, Globe, MapPin } from "lucide-react";
import PrintButton from "./PrintButton";
import styles from "./resume.module.css";

export const revalidate = 604800; // 1 week cache
export const dynamicParams = false;

export const metadata = {
  title: "Resume | Md. Maruf Ur Rahman Munna",
  description:
    "Resume of Md. Maruf Ur Rahman Munna — Full Stack Web Developer & Mobile App Developer. Skills, education, featured projects, and volunteering experience.",
};

const SKILLS = [
  { label: "Programming Languages", value: "JavaScript (ES6+), TypeScript, C++, C, Java, Dart" },
  { label: "Frontend & Mobile", value: "React.js, Next.js, Tailwind CSS, Redux, ShadCN UI, Flutter" },
  { label: "Backend Development", value: "Node.js, Express.js, REST API Design, Firebase (Auth, Firestore, Storage)" },
  { label: "Databases & ORMs", value: "MongoDB, PostgreSQL, MySQL, Prisma ORM" },
  {
    label: "Competitive Programming",
    value:
      "500+ problems solved on Codeforces, LeetCode, and CodeChef; proficient in DSA, Dynamic Programming, and Graph Theory",
  },
  { label: "Tools & Platforms", value: "Git & GitHub, VS Code, Postman, Figma" },
  {
    label: "Core Competencies",
    value: "Scalable Architecture Design, RESTful API Development, Responsive UI, Problem Solving, Technical Mentorship",
  },
];

const PROJECTS = [
  {
    title: "School of Super Kids",
    liveUrl: "https://www.schoolofsuperkids.com/",
    stack: "Next.js, ShadCN, Tailwind CSS, Express.js, MongoDB",
    bullets: [
      "Developed a full-stack interactive programming education platform for children in Bangladesh, featuring secure authentication, dynamic course content, and a child-friendly responsive UI.",
      "Applied competitive programming expertise to design efficient backend workflows and data pipelines.",
    ],
  },
  {
    title: "Discount Pro – Coupon Collector Application",
    liveUrl: "https://discount-pro-200b8.web.app/",
    stack: "React, Tailwind CSS, Firebase, Express.js, MongoDB",
    bullets: [
      "Built a full-stack coupon discovery platform that allows users to find and apply discount codes for popular global e-commerce platforms in real time.",
      "Integrated Firebase for user authentication and real-time updates, with MongoDB providing robust persistent data storage on the backend.",
    ],
  },
  {
    title: "Chill Gamer – Game Review Platform",
    liveUrl: "https://game-review-4919a.web.app/",
    stack: "React, Tailwind CSS, Firebase, Express.js, MongoDB",
    bullets: [
      "Designed and developed a community-driven platform for users to explore and share game reviews, with a focus on a clean UI and smooth experience.",
      "Built RESTful APIs with Express.js and MongoDB for all review operations; used Firebase for authentication and real-time functionality.",
    ],
  },
];

export default function ResumePage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={styles.toolbar}>
          <a
            href="/md%20maruf%20ur%20rahman%20munna%20resume.pdf"
            download="md maruf ur rahman munna resume.pdf"
            className={styles.btnPrimary}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
          <PrintButton className={styles.btnGhost}>
            <Printer className="w-4 h-4" />
            Print
          </PrintButton>
        </div>

        <article className={styles.sheet}>
          {/* ── Header ── */}
          <header className={styles.header}>
            <h1 className={styles.name}>MD. MARUF UR RAHMAN MUNNA</h1>

            <div className={styles.contactLine}>
              <span className={styles.iconItem}>
                <Phone className="w-3.5 h-3.5" />
                +880 1646-198633
              </span>
              <span className={styles.iconItem}>
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:munna.csehstu@gmail.com">munna.csehstu@gmail.com</a>
              </span>
            </div>

            <div className={styles.contactLine}>
              <span className={styles.iconItem}>
                <Linkedin className="w-3.5 h-3.5" />
                <a
                  href="https://www.linkedin.com/in/md-maruf-ur-rahman-munna/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <span className={styles.iconItem}>
                <Github className="w-3.5 h-3.5" />
                <a href="https://github.com/maruf-git" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </span>
              <span className={styles.iconItem}>
                <Globe className="w-3.5 h-3.5" />
                <a href="https://marufurrahman.vercel.app/" target="_blank" rel="noopener noreferrer">
                  marufurrahman.com
                </a>
              </span>
            </div>

            <div className={styles.contactLine}>
              <span className={styles.iconItem}>
                <MapPin className="w-3.5 h-3.5" />
                Dinajpur, Bangladesh
              </span>
            </div>
          </header>

          {/* ── Profile ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Profile</h2>
            <p className={styles.profile}>
              A passionate Full Stack Web Developer and CSE undergraduate at HSTU with 1.5+ years of experience
              building scalable web and mobile applications using the MERN stack, Next.js, TypeScript, and Flutter.
              Skilled in both backend API development and responsive UI design, with a strong problem-solving
              foundation built through 500+ competitive programming solutions. Eager to contribute to impactful
              projects and driven by an entrepreneurial vision to help businesses grow through technology.
            </p>
          </section>

          {/* ── Skills ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <ul className={styles.skillList}>
              {SKILLS.map((s) => (
                <li key={s.label}>
                  <span className={styles.skillLabel}>{s.label}: </span>
                  {s.value}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Education ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.entryHead}>
              <span className={styles.entryTitle}>
                Hajee Mohammad Danesh Science and Technology University
              </span>
              <span className={styles.entryMeta}>Dinajpur, Bangladesh</span>
            </div>
            <div className={styles.entryHead}>
              <span className={styles.entrySub}>B.Sc. (Engineering) in Computer Science and Engineering</span>
              <span className={styles.entryMeta}>2023 – 2026 (Expected)</span>
            </div>
            <ul className={styles.bulletList}>
              <li>CGPA: 3.45 out of 4.00</li>
              <li>
                Relevant Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming, Database Systems,
                Software Engineering, Artificial Intelligence, Machine Learning
              </li>
            </ul>
          </section>

          {/* ── Featured Projects ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            {PROJECTS.map((p) => (
              <div key={p.title} className={styles.project}>
                <div className={styles.projectHead}>
                  <span className={styles.entryTitle}>{p.title}</span>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Live Demo
                  </a>
                </div>
                <p className={styles.stack}>Stack: {p.stack}</p>
                <ul className={styles.bulletList}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* ── Volunteering ── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Volunteering</h2>
            <div className={styles.entryHead}>
              <span className={styles.entryTitle}>Former Executive Member</span>
              <span className={styles.entryMeta}>2023 – 2025</span>
            </div>
            <p className={styles.entrySub}>Programmers Arena, HSTU — Dinajpur, Bangladesh</p>
            <ul className={styles.bulletList}>
              <li>
                Mentored <strong>50+ students</strong> in competitive programming, data structures, algorithms, and
                problem-solving strategies over 1.5+ years of active involvement.
              </li>
              <li>
                Organized and contributed to programming contests, workshops, and educational events, building a
                vibrant coding community at HSTU.
              </li>
              <li>
                Developed strong leadership, communication, and collaboration skills through managing and guiding a
                technically diverse student community.
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
