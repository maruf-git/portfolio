import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Force static caching on Vercel CDN (revalidate once a week)
export const revalidate = 604800;
export const dynamicParams = false;

// Lazy load below-the-fold components to reduce initial JS bundle size
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Timeline = dynamic(() => import("@/components/sections/Timeline"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
// const MobileApps = dynamic(() => import("@/components/sections/MobileApps"));
// const CompetitiveProgramming = dynamic(() => import("@/components/sections/CompetitiveProgramming"));
// const Company = dynamic(() => import("@/components/sections/Company"));
// const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero loads immediately for LCP */}
        <Hero />
        {/* Heavy animation components load asynchronously */}
        <About />
        <Timeline />
        <Skills />
        <Projects limit={6} showSeeMore={true} />
        {/* <MobileApps /> */}
        {/* <CompetitiveProgramming /> */}
        {/* <Company /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
