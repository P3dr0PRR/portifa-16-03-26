import { Link } from "react-router-dom";
import { Undo2 } from "lucide-react";

export function HeaderProjs() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex bg-black border-b border-gray-700 flex-col md:flex-row items-center justify-between px-6 py-3 gap-3 md:gap-0">
      <span className="text-[32px] md:text-4xl leading-[125%] font-bold tracking-[-0.02em] font-syne text-text-secondary">
        Pedro Paulo
      </span>
      <Link
        to="/#inicio"
        className="text-text-default hover:text-white transition-colors duration-300 flex gap-2 hover:scale-105 transform cursor-pointer"
      >
        <Undo2 className="w-5 h-5" />
        <p>Início</p>
      </Link>
    </header>
  );
}
