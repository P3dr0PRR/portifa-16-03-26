import { HeaderProjs } from "./header";
import { HeroProjs } from "./hero";
import { Projs } from "./projects";
import { Footer } from "../../footer";

export function ProjectsPageContent() {
  return (
    <div>
      <HeaderProjs />
      <section className=" min-h-screen bg-black flex flex-col justify-start gap-4 px-6 pt-10 md:px-16 md:pt-20">
        <HeroProjs />
        <Projs />
      </section>
      <Footer />
    </div>
  );
}
