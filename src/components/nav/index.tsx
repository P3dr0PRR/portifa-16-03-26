export function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex bg-black border-b border-gray-300 flex-col md:flex-row items-center justify-between px-6 py-3 gap-3 md:gap-0">
      <h1 className="text-4xl text-indigo-400 font-bold font-['Syne'] shrink-0">
        Pedro Paulo
      </h1>
      <ul className="flex w-full justify-between md:w-auto md:gap-6 md:text-lg font-['DM Sans'] font-light">
        <li>
          <a
            href="#sobre"
            className="text-gray-300 hover:text-gray-100 transition-colors"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#projetos"
            className="text-gray-300 hover:text-gray-100 transition-colors"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-300 hover:text-gray-100 transition-colors"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="text-gray-300 hover:text-gray-100 transition-colors"
          >
            Contato
          </a>
        </li>
        <li className="hidden md:block">
          <a
            href="#inicio"
            className="text-gray-300 hover:text-gray-100 transition-colors"
          >
            Inicio
          </a>
        </li>
      </ul>
    </nav>
  );
}
