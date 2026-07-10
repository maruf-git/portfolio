import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/sections/Projects";

export const metadata = {
  title: "Projects | Md. Maruf Ur Rahman Munna",
  description: "Explore all my web, mobile, and backend projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-10">
        {/* We use negative margin to offset the default section-padding of the component, 
            so it aligns exactly like the home page Hero section. */}
        <div className="pt-20 -mt-[6rem]">
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
