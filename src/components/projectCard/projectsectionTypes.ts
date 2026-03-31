export type ProjectType =
  | "DESTAQUE"
  | "APLICACAO_WEB"
  | "FRONT_END"
  | "UI_FRONT_END";

export interface Project {
  slug: string;
  type: ProjectType;
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
    type: "APLICACAO_WEB",
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
    type: "FRONT_END",
    name: "Travelgram",
    description:
      "Perfil de viajante em rede social ficticia. Componentizacao, galeria de destinos e layout responsivo com React 19 + TypeScript + Tailwind 4.",
    techs: ["React 19", "TypeScript", "Tailwind CSS 4", "Vite"],
    aprendizado: [
      "Composição de interface com React por componentes reutilizáveis.",
      "Organização de projeto front-end com estrutura clara de pastas.",
      "Tipagem com TypeScript para reduzir erros e melhorar manutenção.",
      "Montagem de página única com integração de várias seções.",
      "Aplicação de responsividade para desktop e mobile.",
      "Uso de Vite para ambiente de desenvolvimento rápido e build otimizado.",
      "Padronização de código com ESLint para manter consistência.",
    ],
    link: "https://travelgram-murex-beta.vercel.app/",
    slug: "TravelgramPage",
    img: "/imgs/Travelgram.png",
    about:
      "O TRAVELGRAM é um MVP front-end que simula o perfil de um viajante em uma rede social de viagens. O projeto nasceu como prática de React + TypeScript e evoluiu para uma interface completa, com navegação, seção de perfil com bio e estatísticas, galeria de destinos e rodapé institucional, mantendo foco em composição visual e experiência responsiva. O objetivo foi ir além de uma página estática e construir algo que representasse um produto real — com organização por componentes, consistência de layout e base sólida para futuras evoluções, como integração com API, autenticação e interações dinâmicas.",
    status: "Online",
    ano: 2025,
    tipo: "projeto de curso · Full Stack Rocketseat",
  },

  {
    type: "UI_FRONT_END",
    name: "Pagina de Receitas",
    description:
      "Pagina de receita culinaria com foco em layout visual, organizacao de conteudo e responsividade. Interface moderna e semantica com utility-first CSS.",
    techs: ["React 19", "Tailwind CSS 4", "Vite"],
    aprendizado: [
      "Composição de interface em React com cOrganização da aplicação por seções (header, perfil, galeria e footer).",
      "Uso de TypeScript para tipagem e maior segurança no código.",
      "Estilização com Tailwind CSS 4 focada em produtividade.",
      "Construção de layout responsivo para diferentes tamanhos de tela.",
      "Fluxo de desenvolvimento com Vite (dev server, build e preview).",
      "Padronização e qualidade de código com ESLint.",
    ],
    link: "https://pagina-de-receitas-rho.vercel.app/",
    slug: "PaginadereceitasPage",
    img: "/imgs/PaginaDeReceitas.png",
    about:
      "A Página de Receitas é um projeto focado em oferecer uma experiência prática e agradável para descobrir, organizar e preparar receitas no dia a dia. A aplicação foi desenvolvida com React com a visualização detalhada dos ingredientes e modo de preparo. O objetivo foi ir além de uma vitrine simples de receitas e construir algo que simulasse um produto real: com atenção à experiência do usuário, estrutura de código bem organizada e base pronta para escalar com novas funcionalidades.",
    status: "Online",
    ano: 2025,
    tipo: "Full Stack Rocketseat",
  },

  {
    type: "UI_FRONT_END",
    name: "Portal de Notícias",
    description:
      "Portal de notícias com foco em layout editorial, organização de conteúdo em cards e responsividade. Interface moderna e semântica com utility-first CSS.",
    techs: ["React 19", "Tailwind CSS 4", "TypeScript", "Vite"],
    aprendizado: [
      "Composição de interface em React com organização da aplicação por seções (header, feed de notícias, destaques e footer).",
      "Uso de TypeScript para tipagem de dados e maior segurança no código.",
      "Estilização com Tailwind CSS 4 focada em produtividade e consistência visual.",
      "Construção de layout responsivo com grid e flexbox para diferentes tamanhos de tela.",
      "Estruturação de componentes reutilizáveis como cards de notícia e badges de categoria.",
      "Fluxo de desenvolvimento com Vite (dev server, build e preview).",
    ],
    link: "https://portaldenoticias-gamma.vercel.app/",
    slug: "PortalDeNoticiasPage",
    img: "/imgs/PortalDeNoticias.png",
    about:
      "O Portal de Notícias é um projeto focado em apresentar conteúdo jornalístico de forma organizada e visualmente agradável. A aplicação foi desenvolvida com React e simula um produto editorial real: com hierarquia de notícias, categorização de conteúdo e atenção à experiência de leitura. O objetivo foi construir uma interface limpa e bem estruturada, com código organizado e base pronta para integrar com uma API de notícias futuramente.",
    status: "Online",
    ano: 2026,
    tipo: "Full Stack Rocketseat",
  },

  {
    type: "APLICACAO_WEB",
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
];
