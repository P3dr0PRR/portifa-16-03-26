import { ABOUT_STATS } from "../../constants/about";

export function About() {
  return (
    <section
      id="sobre"
      className="flex flex-col justify-start gap-4 px-6 py-12 md:px-16 md:py-20"
    >
      <p className="font-bold text-text-secondary">Sobre mim</p>
      <h2 className="lg:text-5xl text-text-default">
        Quem está por trás do código ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-text-default font-light text-base md:text-lg">
            Desenvolvedor fullstack em formação, baseado em Uberlândia — MG. Meu
            objetivo é construir soluções que unam desempenho, simplicidade e
            uma ótima experiência para o usuário.
          </p>
          <p className="text-text-default font-light text-base md:text-lg">
            Estudo através da Rocketseat e coloco em prática no mesmo dia.
            Acredito que o aprendizado real vem de projetos reais, não apenas de
            aulas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {ABOUT_STATS.map((item) => (
            <div
              key={item.label}
              className="flex min-h-28 flex-col items-center justify-center bg-gray-800 border-2 border-gray-600 hover:border-l-indigo-400 p-4 md:p-5 text-white rounded-md text-center"
            >
              <p className="text-2xl font-bold text-text-secondary">
                {item.value}
              </p>
              <p className="text-text-default text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
