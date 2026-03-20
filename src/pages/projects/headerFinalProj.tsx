import { Link } from "react-router-dom";
import { Undo2 } from "lucide-react";

export function HeaderFinalProj() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex bg-black border-b border-gray-300 flex-col md:flex-row items-center justify-between px-6 py-3 gap-3 md:gap-0">
      <h1 className="text-4xl text-indigo-400 font-bold font-['Syne'] shrink-0 space-y-3">
        Pedro Paulo
      </h1>
      <Link
        to="/projetos#projetos-topo"
        className="text-gray-300 hover:text-white transition-colors duration-300 flex gap-2 hover:scale-105 transform cursor-pointer"
      >
        <Undo2 className="w-5 h-5" />
        <p>Projetos</p>
      </Link>
    </header>
  );
}
