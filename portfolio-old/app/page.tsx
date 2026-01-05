import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/home-page/hero-section";
import ProjectPage from "@/components/projects/projects-page";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection projectsLink="/#projects" />
      {/* <div className="h-screen"></div> */}
      <div id="projects">
      <ProjectPage />

      </div>
      <Experience />
      <Footer />
    </div>
  );
}
