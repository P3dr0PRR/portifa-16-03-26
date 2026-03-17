# Portfólio — Pedro Paulo

Portfólio pessoal desenvolvido para apresentar projetos, habilidades e trajetória como desenvolvedor fullstack em formação. As tecnologias usadas foram escolhidas com foco em boas práticas, organização de código e escalabilidade.

Esse README deve ser atualizado sempre que necessário.

---

## Tecnologias

- Vite
- React 19
- TypeScript
- React Router DOM v6
- Tailwind CSS 4
- ESLint + Prettier

---

## Arquitetura

### Arquitetura de pastas

#### SRC

Pasta raiz do projeto

#### `src/components`

Pasta onde ficam todos os componentes globais da aplicação. Cada componente deve estar dentro de uma pasta com seu nome.

src/components/
├── nav/
│ └── index.tsx
├── hero/
│ ├── index.tsx
│ └── types.ts
├── about/
│ ├── index.tsx
├── projectCard/
│ ├── index.tsx
│ └── types.ts
├── skillTag/
│ └── index.tsx
└── footer/
└── index.tsx

#### `src/pages`

Pasta onde ficam todas as páginas da aplicação.

src/pages/
├── home/
│ └── index.tsx
└── notFound/
└── index.tsx

#### `src/routes`

Pasta onde fica toda a configuração de rotas com React Router.

#### `src/constants`

Pasta onde ficam todas as constantes globais. Ex: lista de projetos, skills.

#### `src/types`

Pasta onde ficam todos os arquivos de tipagem globais.

#### `src/hooks`

Pasta onde ficam todos os hooks globais. Deve conter um arquivo `index.ts` de exportação.

#### `src/utils`

Pasta onde ficam todos os utilitários globais. Deve conter um arquivo `index.ts` de exportação.

#### `src/assets`

Pasta onde ficam todos os assets globais da aplicação.

src/assets/
├── imgs/
└── fonts/

---

### Arquitetura de componentes

#### `index.tsx`

Arquivo principal do componente onde ele é criado.

#### `types.ts`

Arquivo para exportar todas as tipagens relacionadas ao contexto do componente.

#### `hooks/`

Hooks personalizados do componente, encapsulando lógica de estado e efeitos colaterais.

#### `utils/`

Funções utilitárias específicas do componente.

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

E no `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## Git

O projeto segue uma estratégia de branches que deve ser respeitada:

- `main`: Branch de produção. Recebe merge apenas quando a feature está finalizada e testada.
- `develop`: Branch de desenvolvimento. Base para criação de novas features.
- `feature/*`: Todas as novas funcionalidades devem usar esse prefixo. Ex: `feature/hero-section`
- `fix/*`: Correções de bugs. Ex: `fix/responsividade-nav`
- `chore/*`: Configurações e tarefas que não afetam o código de produção. Ex: `chore/configura-alias`
- `style/*`: Alterações visuais sem mudança de lógica.

---

### Git Commit

Os tipos utilizados no projeto:

| Tipo       | Uso                                               |
| ---------- | ------------------------------------------------- |
| `feat`     | nova funcionalidade ou componente                 |
| `fix`      | correção de bug ou comportamento errado           |
| `chore`    | configuração, setup, instalação de dependências   |
| `style`    | mudança visual/CSS sem lógica                     |
| `refactor` | reorganização de código sem alterar comportamento |
| `docs`     | atualização de README ou documentação             |

---

## Deploy

O projeto é deployado automaticamente na **Vercel**. Cada push na branch `main` dispara um novo deploy.

---

## ESLint

O projeto utiliza ESLint para garantir qualidade e padronização do código.

```bash
# Verificar erros
npm run lint
```

Regras configuradas:

- `react-hooks/rules-of-hooks`
- `react-hooks/exhaustive-deps`
- `@typescript-eslint/no-unused-vars`
- `prefer-const`

---
