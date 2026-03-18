import { MEIOS, REDES, type Ctt } from "./types";

export function Contato() {
  return (
    <section
      id="contato"
      className="flex flex-col justify-start gap-4 px-6 py-12 md:px-16 md:py-20"
    >
      <p className="font-bold font-['Syne'] text-indigo-400 max-w-xl leading-tight">
        Contato
      </p>

      <div className="w-full flex flex-col items-center gap-6 bg-gray-800 border border-gray-600 p-6 md:p-8 rounded-md">
        <h2 className="text-xl md:text-3xl text-center font-bold font-['Syne'] text-white max-w-xl leading-tight">
          Vamos Construir algo juntos.
        </h2>
        <p className="text-gray-300 text-center text-sm leading-relaxed p-4">
          Aberto a oportunidades, freelas e colaborações.
        </p>

        <div className="w-full flex flex-col gap-3 border border-gray-500 rounded-md bg-gray-500/40 p-4">
          <p className="font-bold font-['Syne'] text-indigo-400 text-center leading-tight w-full">
            Meios
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {MEIOS.map((MEIOS: Ctt) => (
              <div
                key={MEIOS.forma}
                className="w-full flex flex-col items-center text-center gap-1 p-3 rounded-md border border-gray-600/60 bg-gray-900/30"
              >
                <p className="text-indigo-400">{MEIOS.forma}</p>
                {MEIOS.link && (
                  <a
                    className="text-gray-300 text-xs break-all"
                    href={MEIOS.link}
                  >
                    {MEIOS.link}
                  </a>
                )}
                {MEIOS.numero && (
                  <p className="text-gray-300 text-sm">{MEIOS.numero}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 border border-gray-500 rounded-md bg-gray-500/40 p-4">
          <p className="font-bold font-['Syne'] text-indigo-400 text-center leading-tight w-full">
            Redes
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {REDES.map((rede: Ctt) => (
              <div
                key={rede.forma}
                className="w-full flex items-center justify-center text-center gap-1 p-3 rounded-md border border-gray-600/60 bg-gray-900/30"
              >
                {rede.icon && rede.link && (
                  <a
                    href={rede.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-indigo-400 flex items-center gap-2 transition-colors"
                  >
                    {rede.icon && <rede.icon size={18} />}
                    {rede.forma}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
