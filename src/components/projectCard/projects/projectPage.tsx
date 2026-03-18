import { HeaderProjs } from "./header";
import { HeroProjs } from "./hero";
export function ProjectsPageContent() {
  return (
    <section
      id="projetos"
      className=" min-h-screen bg-black flex flex-col justify-start gap-4 px-6 py-12 md:px-16 md:py-20"
    >
      <HeaderProjs />
      <HeroProjs />
    </section>
  );
}
