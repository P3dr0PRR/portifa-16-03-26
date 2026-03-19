import type { LucideIcon } from "lucide-react";
import { Linkedin, Github } from "lucide-react";

export interface Ctt {
  forma: string;
  link?: string;
  numero?: string;
  icon?: LucideIcon;
}

export const REDES: Ctt[] = [
  { forma: "GitHub", link: "https://github.com/P3dr0PRR", icon: Github },
  {
    forma: "LinkedIn",
    link: "https://www.linkedin.com/in/pedrocadev",
    icon: Linkedin,
  },
];

export const MEIOS: Ctt[] = [
  { forma: "Email", link: "pedropaulo@interlinksistemas.com.br" },
  { forma: "Celular", numero: "(34) 99796-7512" },
];
