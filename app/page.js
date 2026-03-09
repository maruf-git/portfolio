import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import MobileApps from "@/components/sections/MobileApps";
import CompetitiveProgramming from "@/components/sections/CompetitiveProgramming";
import Timeline from "@/components/sections/Timeline";
import Company from "@/components/sections/Company";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects limit={6} showSeeMore={true} />
        {/* <MobileApps /> */}
        {/* <CompetitiveProgramming /> */}
        {/* <Company /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
