import { Nav } from "../../components/nav";
import { Hero } from "../../components/hero";
export function Home() {
  return (
    <div>
      <Nav />
      <section className="px-4 pt-4 flex flex-col bg-[#050a14]">
        <Hero />
      </section>
    </div>
  );
}
