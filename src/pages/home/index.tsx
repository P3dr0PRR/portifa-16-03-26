import { Nav } from "../../components/nav";
import { Hero } from "../../components/hero";
import { About } from "../../components/about";
import { Projects } from "../../components/projectCard";
export function Home() {
  return (
    <div>
      <Nav />
      <section className="px-4 pt-4 flex flex-col bg-[#050a14]">
        <Hero />
        <About />
        <Projects />
      </section>
    </div>
  );
}
