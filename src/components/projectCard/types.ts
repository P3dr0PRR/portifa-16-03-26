export type ProjectType =
  | "DESTAQUE"
  | "APLICACAO_WEB"
  | "FRONT_END"
  | "UI_FRONT_END";

export interface Project {
  featured: any;
  type: ProjectType;
  name: string;
  description: string;
  techs: string[];
  link: string;
}

export const projects: Project[] = [
  {
    type: "DESTAQUE",
    name: "ClipMaker",
    description:
      "Plataforma web que transforma videos e audios em clipes virais automaticamente. O usuario envia o arquivo, a IA analisa a transcricao com Gemini e retorna o trecho mais impactante entre 30-60 segundos, ja recortado.",
    techs: [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Gemini 2.5 flash",
      "Cloudinary",
      "GSAP",
      "Vite",
    ],
    link: "https://clipmaker-five.vercel.app/",
  },
  {
    type: "APLICACAO_WEB",
    name: "Best Trip Methods",
    description:
      "Quiz inteligente que recomenda o melhor meio de transporte para uma viagem com base em 15 perguntas sobre distancia, orcamento, conforto e preferencias.",
    techs: ["React 18", "JavaScript", "Tailwind CSS", "React Router", "Vite"],
    link: "https://best-trip-methods-pot1.vercel.app/",
  },
  {
    type: "FRONT_END",
    name: "Travelgram",
    description:
      "Perfil de viajante em rede social ficticia. Componentizacao, galeria de destinos e layout responsivo com React 19 + TypeScript + Tailwind 4.",
    techs: ["React 19", "TypeScript", "Tailwind CSS 4", "Vite"],
    link: "https://travelgram-murex-beta.vercel.app/",
  },
  {
    type: "UI_FRONT_END",
    name: "Pagina de Receitas",
    description:
      "Pagina de receita culinaria com foco em layout visual, organizacao de conteudo e responsividade. Interface moderna e semantica com utility-first CSS.",
    techs: ["React 19", "Tailwind CSS 4", "Vite"],
    link: "https://pagina-de-receitas-rho.vercel.app/",
  },
];
