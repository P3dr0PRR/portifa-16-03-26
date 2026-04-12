export function Hero() {
  return (
    <section
      id="inicio"
      className="flex flex-col justify-start gap-4 px-6 py-12 md:px-16 md:py-20"
    >
      <div className="flex items-center gap-2 bg-indigo-500/40 border border-indigo-400 rounded-md p-2 w-max">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400"></span>
        </span>
        <span className="text-sm text-text-secondary">
          Disponível para oportunidades
        </span>
      </div>

      <h2 className="max-w-xl text-text-default">
        Construindo interfaces que
        <br />
        <span className="text-5xl md:text-6xl text-text-secondary">
          fazem sentido
        </span>
      </h2>

      <p className="text-text-default font-light ">
        Sou desenvolvedor front-end com foco em JavaScript e React, apaixonado
        por criar interfaces limpas, funcionais e responsivas. Evoluo todos os
        dias através de prática real, estudos constantes e projetos próprios.
      </p>

      <div className="flex gap-4">
        <a
          href="#projetos"
          className="bg-gray-900 hover:bg-gray-700 flex items-center justify-center border-2 border-gray-500 text-text-default font-bold py-2 px-4 rounded-md transition duration-300 hover:scale-105"
        >
          Ver projetos
        </a>
        <a
          href="#contato"
          className="bg-gray-900 hover:bg-gray-700 flex items-center justify-center border-2 border-gray-500 text-text-default font-bold py-2 px-4 rounded-md transition duration-300 hover:scale-105"
        >
          Entre em contato
        </a>
      </div>
    </section>
  );
}
