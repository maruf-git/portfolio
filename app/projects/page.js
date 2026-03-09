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
      <main className="pt-20 min-h-screen">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
