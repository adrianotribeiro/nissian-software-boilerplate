# Nissian Software — Frontend Boilerplate

Boilerplate de frontend opinado, pronto para produção, construído com as melhores ferramentas do ecossistema React moderno.

---

## Stack

| Ferramenta                                                              | Descrição                                              | Docs                                                       |
| ----------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| [Vite](https://vitejs.dev)                                              | Build tool e dev server ultrarrápido                   | https://vitejs.dev                                         |
| [React 19](https://react.dev)                                           | Biblioteca de UI                                       | https://react.dev                                          |
| [TypeScript](https://www.typescriptlang.org)                            | Tipagem estática                                       | https://www.typescriptlang.org                             |
| [TanStack Router](https://tanstack.com/router)                          | Roteamento type-safe com file-based routing            | https://tanstack.com/router                                |
| [TanStack Form](https://tanstack.com/form)                              | Gerenciamento de formulários                           | https://tanstack.com/form                                  |
| [TanStack Store](https://tanstack.com/store)                            | Gerenciamento de estado reativo                        | https://tanstack.com/store                                 |
| [Zod](https://zod.dev)                                                  | Validação de schemas                                   | https://zod.dev                                            |
| [Zustand](https://zustand-demo.pmnd.rs)                                 | Gerenciamento de estado global                         | https://zustand-demo.pmnd.rs                               |
| [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) | Cliente HTTP nativo do browser                         | https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API |
| [i18next](https://www.i18next.com)                                      | Internacionalização (i18n)                             | https://www.i18next.com                                    |
| [Tailwind CSS v4](https://tailwindcss.com)                              | Framework CSS utility-first                            | https://tailwindcss.com                                    |
| [tw-animate-css](https://github.com/jamiebuilds/tw-animate-css)         | Animações para Tailwind v4                             | https://github.com/jamiebuilds/tw-animate-css              |
| [Vitest](https://vitest.dev)                                            | Framework de testes unitários                          | https://vitest.dev                                         |
| [Testing Library](https://testing-library.com)                          | Utilitários de teste para React                        | https://testing-library.com                                |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)        | Tipografia principal                                   | https://fontsource.org/fonts/space-grotesk                 |
| [Inter Variable](https://fonts.google.com/specimen/Inter)               | Tipografia secundária                                  | https://fontsource.org/fonts/inter                         |
| [Biome](https://biomejs.dev)                                            | Linter e formatter ultrarrápido (substitui ESLint + Prettier) | https://biomejs.dev                                 |
| [Husky](https://typicode.github.io/husky)                               | Git hooks para rodar lint/format antes de commits      | https://typicode.github.io/husky                           |
| [lint-staged](https://github.com/lint-staged/lint-staged)               | Roda linters apenas nos arquivos staged                | https://github.com/lint-staged/lint-staged                 |
| [Knip](https://knip.dev)                                                | Remove dependências, exports e arquivos não utilizados | https://knip.dev                                           |

---

## Pré-requisitos

- **Node.js** `v22+` (o projeto inclui `.node-version` para uso com `fnm` ou `nvm`)
- **pnpm** `v9+`

### Instalando o fnm (recomendado)

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

Adicione ao seu `~/.zshrc` ou `~/.bashrc` para troca automática de versão ao entrar na pasta:

```bash
eval "$(fnm env --use-on-cd --shell zsh)"
```

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/nissian-software/nissian-software-boilerplate.git
cd nissian-software-boilerplate

# A versão correta do Node será usada automaticamente via .node-version
# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env
```

---

## Scripts

```bash
pnpm dev              # Inicia o servidor de desenvolvimento na porta 3000
pnpm build            # Gera o build de produção
pnpm preview          # Visualiza o build de produção localmente
pnpm test             # Roda os testes uma vez
pnpm test:ui          # Roda os testes com interface visual
pnpm test:coverage    # Gera relatório de cobertura
pnpm lint             # Roda o Biome lint
pnpm format           # Formata todos os arquivos com Biome
pnpm check            # Roda lint + format juntos (recomendado)
pnpm knip             # Detecta código morto e dependências não utilizadas
pnpm generate-routes  # Gera a árvore de rotas manualmente
```

---

## Variáveis de Ambiente

Copie o `.env.example` e preencha os valores:

```env
VITE_API_URL=         # URL base da API
VITE_API_TIMEOUT=     # Timeout das requisições em ms (padrão: 10000)
```

---

## Estrutura de Pastas

```
src/
├── component/        # Componentes reutilizáveis
├── lib/
│   └── i18n.ts       # Configuração do i18next
├── routes/           # Rotas do TanStack Router (file-based)
│   ├── __root.tsx    # Layout raiz
│   └── index.tsx     # Rota /
├── stores/           # Stores do Zustand
├── test/
│   └── setup.ts      # Setup global do Vitest + Testing Library
├── routeTree.gen.ts  # Gerado automaticamente — não editar
├── router.tsx        # Instância do router e configurações globais
└── styles.css        # Tema global e variáveis CSS
```

---

## Tema — Chaotic Goblin Tech

O projeto usa um tema customizado chamado **Chaotic Goblin Tech** configurado via variáveis CSS no `styles.css`.

| Token           | Nome         | Hex       |
| --------------- | ------------ | --------- |
| `--background`  | Parchment    | `#e8e8e8` |
| `--foreground`  | Void Night   | `#1a1a2e` |
| `--card`        | White        | `#ffffff` |
| `--primary`     | Slime Green  | `#8bf046` |
| `--destructive` | Forge Orange | `#ff9a3c` |
| `--accent`      | Potion Mist  | `#c8f0a0` |
| `--secondary`   | Cavern Blue  | `#243b6e` |

O dark mode usa a classe `.dark` no elemento raiz e é ativado via `@custom-variant dark (&:is(.dark *))`.

---

## Tipografia

O projeto usa duas fontes via `@fontsource`:

| Classe Tailwind | Fonte          | Uso sugerido        |
| --------------- | -------------- | ------------------- |
| `font-grotesk`  | Space Grotesk  | Títulos e destaques |
| `font-inter`    | Inter Variable | Corpo de texto      |

O `font-grotesk` é aplicado globalmente no `body`. Para usar o Inter em elementos específicos:

```tsx
<p className="font-inter">texto em Inter</p>
```

---

## Roteamento

O TanStack Router usa file-based routing — a estrutura de arquivos em `src/routes/` define as rotas automaticamente.

```
src/routes/
├── __root.tsx      → layout raiz (wraps todas as rotas)
├── index.tsx       → rota /
├── about.tsx       → rota /about
└── posts/
    ├── index.tsx   → rota /posts
    └── $postId.tsx → rota /posts/:postId
```

O `router.tsx` centraliza a criação do router com as configurações globais:

- `scrollRestoration` — restaura a posição do scroll ao navegar entre rotas
- `defaultPreload: 'intent'` — pré-carrega a rota ao hover no link
- `defaultPreloadStaleTime: 0` — sempre revalida os dados ao navegar

O arquivo `routeTree.gen.ts` é gerado automaticamente pelo plugin do Vite — nunca edite manualmente. Para criar uma nova rota, basta criar o arquivo em `src/routes/` e o router detecta automaticamente durante o `pnpm dev`.

---

## Formulários

O TanStack Form é usado em conjunto com o Zod para validação:

```tsx
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

function MyForm() {
  const form = useForm({
    defaultValues: { email: '' },
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => console.log(value),
  })

  return (
    <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }}>
      <form.Field
        name="email"
        validators={{ onChange: schema.shape.email }}
        children={(field) => (
          <input
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      />
    </form>
  )
}
```

---

## Estado Global

As stores ficam em `src/stores/`. Exemplo com Zustand:

```tsx
import { useCounterStore } from '@/stores/useCounterStore'

function Counter() {
  const { count, increment } = useCounterStore()
  return <button onClick={increment}>{count}</button>
}
```

---

## Internacionalização

As traduções ficam em `src/lib/i18n.ts`. Para usar nos componentes:

```tsx
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return <h1>{t('welcome')}</h1>
}
```

---

## Testes

Os testes usam **Vitest** + **React Testing Library**. Arquivos de teste ficam junto ao componente (`.test.tsx`):

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('MeuComponente', () => {
  it('renderiza corretamente', () => {
    render(<MeuComponente />)
    expect(screen.getByText('texto')).toBeInTheDocument()
  })
})
```

---

## Qualidade de Código

### Biome

O projeto usa **Biome** como linter e formatter — substitui ESLint + Prettier em um único binário extremamente rápido.

```bash
pnpm check    # lint + format juntos (use no dia a dia)
pnpm lint     # só lint
pnpm format   # só format
```

A configuração fica em `biome.json`.

### Husky + lint-staged

A cada `git commit`, o Husky roda automaticamente o `biome check --write` apenas nos arquivos staged. Nenhuma configuração extra necessária — funciona após o `pnpm install`.

### Knip

Detecta e reporta arquivos, exports e dependências não utilizados:

```bash
pnpm knip
```

A configuração fica em `knip.config.ts`.

---

## Licença

MIT