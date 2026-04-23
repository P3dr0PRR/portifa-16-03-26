export type HighlightType =
  | "DESTAQUE"
  | "APLICACAO_WEB"
  | "FRONT_END"
  | "UI_FRONT_END";

export interface Highlight {
  slug: string;
  category: string;
  name: string;
  description: string;
  techs: string[];
  link: string;
  featured?: boolean;
  img: string;
  about: string;
  aprendizado: string[];
  status: string;
  ano: number;
  tipo: string;
}

export const projects: Highlight[] = [
  {
    category: "Front-End",
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
    aprendizado: [
      "Padronização da arquitetura front-end para garantir consistência entre projetos.",
      "Organização clara de pastas por responsabilidade (rotas, componentes, hooks, utils, tipos, fluxos).",
      "Uso correto do App Router do Next.js com arquivos específicos (page, layout, template, loading, error, not-found).",
      "Padronização de requisições via actions e uso de React Query no cliente.",
      "Qualidade de código com lint, testes automatizados e Husky no fluxo de commit.",
      "Governança de Git com strategy de branches, commits padronizados em português e PR com revisão.",
      "Cultura de testes (unitários e e2e) e CI/CD para validar e publicar com segurança.",
    ],
    link: "https://clipmaker-five.vercel.app/",
    slug: "ClipmakerPage",
    img: "/imgs/Clipmaker.png",
    about:
      "O ClipMaker é um MVP focado em transformar conteúdos longos em cortes curtos com apoio de IA. O projeto nasceu como prática de React + TypeScript e evoluiu para uma aplicação funcional com transcrição automática, integração com modelo generativo, fluxo de chave de API e interface orientada à produtividade. O objetivo foi ir além de uma demo técnica e construir uma experiência mais próxima de produto real, com decisões de UX, organização de componentes e uma base preparada para evoluir com novas features, como filtros de corte, exportação e refinamento de resultados.",
    status: "Online",
    ano: 2025,
    tipo: "projeto de curso · NLW Rocketseat",
  },
  {
    category: "Front-End",
    name: "Best Trip Methods",
    description:
      "Quiz inteligente que recomenda o melhor meio de transporte para uma viagem com base em 15 perguntas sobre distancia, orcamento, conforto e preferencias.",
    techs: ["React 18", "JavaScript", "Tailwind CSS", "React Router", "Vite"],
    aprendizado: [
      "Estruturação de app em React com componentes funcionais e fluxo de telas (início → quiz → resultado).",
      "Gerenciamento de estado com useState para pergunta atual, opção selecionada, pontuação e controle de etapa.",
      "Modelagem de dados do quiz em lista de perguntas/alternativas para renderização dinâmica.",
      "Implementação de lógica de pontuação por categoria (carro, avião, barco, trem) e decisão do resultado final.",
      "Separação de responsabilidades entre UI (componentes) e regra de negócio (função utilitária de resultado).",
      "Construção de interface responsiva e estilização com Tailwind CSS.",
      "Uso de tooling moderno de front-end (Vite para build/dev, ESLint/PostCSS para qualidade e pipeline de CSS).",
    ],
    link: "https://best-trip-methods-pot1.vercel.app/",
    slug: "BesttripmethodsPage",
    img: "/imgs/BestTripMethods.png",
    about:
      "O BEST TRIP METHODS é um MVP interativo focado em recomendar a melhor forma de viagem com base no perfil e nas preferências de cada usuário. O projeto foi desenvolvido como prática em React e evoluiu para uma aplicação completa com fluxo de quiz, lógica de pontuação, cálculo de resultado personalizado e interface dinâmica do início ao fim. A proposta foi ir além de um formulário simples e construir uma experiência mais estratégica e envolvente, simulando uma decisão real de planejamento de viagem — com foco em usabilidade, organização de componentes e clareza na entrega do resultado final.",
    status: "Online",
    ano: 2025,
    tipo: "Projeto de minha autoria, aprendendo React por conta própria",
  },
  {
    category: "Front-End",
    name: "Formulário de Matrícula",
    description:
      "Aplicação web para cadastro de alunos, responsável e endereço residencial, com validação de dados e etapas dinâmicas.",
    techs: ["React 18", "TypeScript", "Vite", "CSS Modules", "ESLint"],
    aprendizado: [
      "Estruturação de formulário multi-etapas usando componentes funcionais em React.",
      "Uso do map para renderizar dinamicamente campos de opções de matrícula e etapas do formulário.",
      "Gerenciamento de estado com useState para controle dos dados do aluno, responsável e endereço.",
      "Validação de campos obrigatórios e feedback visual para o usuário.",
      "Separação de componentes por responsabilidade (área do formulário, header, botões de finalização, etc).",
      "Estilização modularizada com CSS Modules para evitar conflitos de classe.",
      "Integração de assets e ícones personalizados na interface.",
      "Configuração de ambiente moderno com Vite e TypeScript para tipagem estática e build rápido.",
    ],
    link: "https://formulariodematricula.vercel.app/",
    slug: "FormularioMatriculaPage",
    img: "/imgs/formulario_de_matricula.png",
    about:
      "O Formulário de Matrícula é uma aplicação desenvolvida em React e TypeScript para facilitar o processo de inscrição escolar. O projeto utiliza o map para gerar listas de opções de matrícula e etapas do formulário, tornando o código mais escalável e reutilizável. Cada etapa do formulário é um componente independente, promovendo organização e clareza. O foco foi criar uma experiência fluida, com validação de dados, feedback visual e interface responsiva, além de aplicar boas práticas de componentização e tipagem.",
    status: "Online",
    ano: 2026,
    tipo: "Projeto autoral para prática de React e TypeScript",
  },
  {
    category: "Front-End",
    name: "Zingen",
    description:
      "Aplicação web de karaokê que utiliza IA para remover vozes de músicas e disponibilizar a maior biblioteca de instrumentais. O usuário acessa uma vasta coleção de músicas e pode cantar em tempo real, com opções de planos grátis e premium.",
    techs: [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Vite",
      "React DOM 19",
      "SWC (transpilador ultrarrápido)",
      "ESLint",
    ],
    aprendizado: [
      "Implementação com React 19 e TypeScript para código tipado e seguro.",
      "Estilização responsiva com Tailwind CSS 4 via integração Vite.",
      "Componentes estruturados por funcionalidade (Header, HeroSection, Features, Planos, Download, Footer).",
      "Design de landing page com múltiplas seções (hero, features, pricing, CTA).",
      "Aplicação de gradientes customizados e tema com paleta de cores consistente.",
      "Build otimizado com Vite e SWC para performance em produção.",
      "Linting com ESLint para manutenção de qualidade de código.",
      "Responsividade mobile-first com breakpoints (sm, md, lg, xl).",
    ],
    link: "https://projetozingen01042026.vercel.app/",
    slug: "ZingenApp",
    img: "/imgs/ZIngen.png",
    about:
      "Zingen é um MVP focado em democratizar o acesso ao karaokê através de uma plataforma web moderna. A aplicação combina uma biblioteca expansível de músicas com tecnologia de remoção de voz por IA, permitindo que qualquer pessoa cante suas músicas favoritas sem barreiras. O projeto foi construído com foco em UX, oferecendo planos diferenciados (básico gratuito e premium) e uma interface intuitiva. A arquitetura garante escalabilidade para futuras features como social sharing, histórico de gravações, desafios entre usuários e integração com redes sociais.",
    status: "Online",
    ano: 2026,
    tipo: "projeto pessoal · prática de React + TypeScript",
  },
];
