import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeaderProjs } from "./header/headerProjs";
import { HeroProjs } from "./hero/heroProjs";
import { Projs } from "./projetosFin/ProjDesc";
import { Footer } from "../../footer/footer";

export function ProjectsPageContent() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  return (
    <div>
      <HeaderProjs />
      <section
        id="projetos-topo"
        className=" min-h-screen bg-black flex flex-col justify-start gap-4 px-6 pt-10 md:px-16 md:pt-20"
      >
        <HeroProjs />
        <Projs />
      </section>
      <Footer />
    </div>
  );
}
