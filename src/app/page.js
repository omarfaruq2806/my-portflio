import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <ProjectSection></ProjectSection>
      <Contact></Contact>
    </div>
  );
}
