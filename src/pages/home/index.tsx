import { Nav } from "../../components/nav/nav";
import { Hero } from "../../components/hero/hero";
import { About } from "../../components/about/about";
import { ProjectsPreview } from "../../components/projectCard/projectsection";
import { Habilidades } from "../../components/skillTag";
import { Contato } from "../../components/contato/contato";
import { Footer } from "../../components/footer/footer";

export function Home() {
  return (
    <div>
      <Nav />
      <section className="px-4 pt-18 md:pt-4 flex flex-col bg-[#050a14]">
        {/* <Hero />
        <About /> */}
        <ProjectsPreview />
        {/* <Habilidades />
        <Contato /> */}
      </section>
      {/* <Footer /> */}
    </div>
  );
}
