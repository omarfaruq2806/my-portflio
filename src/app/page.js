import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}
