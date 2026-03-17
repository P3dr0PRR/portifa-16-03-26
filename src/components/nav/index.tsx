export function Nav() {
  return (
    <nav className="flex bg-black border-b border-gray-300 flex-col md:flex-row items-center justify-between px-6 py-3 gap-3 md:gap-0">
      <h1 className="text-4xl text-[#0ff] font-bold shrink-0">Pedro Paulo</h1>
      <ul className="flex w-full justify-between md:w-auto md:gap-6 md:text-lg">
        <li>
          <a
            href="#projetos"
            className="text-gray-300 hover:text-[#0ff] transition-colors"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-300 hover:text-[#0ff] transition-colors"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contato"
            className="text-gray-300 hover:text-[#0ff] transition-colors"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
