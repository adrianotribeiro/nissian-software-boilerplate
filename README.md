# Nissian Software — Frontend Boilerplate

Boilerplate de frontend opinado, pronto para produção, construído com as melhores ferramentas do ecossistema React moderno.

---

## Stack

| Ferramenta | Descrição | Docs |
|---|---|---|
| [Vite](https://vitejs.dev) | Build tool e dev server ultrarrápido | https://vitejs.dev |
| [React 19](https://react.dev) | Biblioteca de UI | https://react.dev |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática | https://www.typescriptlang.org |
| [Shadcn/ui](https://ui.shadcn.com) | Componentes acessíveis e customizáveis | https://ui.shadcn.com |
| [TanStack Router](https://tanstack.com/router) | Roteamento type-safe | https://tanstack.com/router |
| [TanStack Form](https://tanstack.com/form) | Gerenciamento de formulários | https://tanstack.com/form |
| [Zod](https://zod.dev) | Validação de schemas | https://zod.dev |
| [Zustand](https://zustand-demo.pmnd.rs) | Gerenciamento de estado global | https://zustand-demo.pmnd.rs |
| [Axios](https://axios-http.com) | Cliente HTTP | https://axios-http.com |
| [i18next](https://www.i18next.com) | Internacionalização (i18n) | https://www.i18next.com |
| [Vitest](https://vitest.dev) | Framework de testes unitários | https://vitest.dev |
| [Testing Library](https://testing-library.com) | Utilitários de teste para React | https://testing-library.com |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | Tipografia principal | https://fontsource.org/fonts/space-grotesk |

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
pnpm dev          # Inicia o servidor de desenvolvimento
pnpm build        # Gera o build de produção
pnpm preview      # Visualiza o build de produção localmente
pnpm test         # Roda os testes em modo watch
pnpm test:ui      # Roda os testes com interface visual
pnpm test:coverage # Gera relatório de cobertura
pnpm lint         # Roda o ESLint
```

---

## Variáveis de Ambiente

Copie o `.env.example` e preencha os valores:

```env
VITE_API_URL=        # URL base da API
```

---

## Estrutura de Pastas

```
src/
├── components/
│   └── ui/          # Componentes do Shadcn/ui
├── lib/
│   ├── axios.ts     # Instância configurada do Axios
│   ├── i18n.ts      # Configuração do i18next
│   └── utils.ts     # Utilitários (cn do Shadcn)
├── routes/          # Rotas do TanStack Router
├── store/           # Stores do Zustand
├── test/
│   └── setup.ts     # Setup global do Vitest + Testing Library
├── index.css        # Tema global (variáveis Shadcn/ui)
├── main.tsx         # Ponto de entrada da aplicação
└── vite-env.d.ts    # Tipos do Vite
```

---

## Tema — Chaotic Goblin Tech

O projeto usa um tema customizado chamado **Chaotic Goblin Tech** configurado via variáveis CSS do Shadcn/ui.

| Token | Cor | Hex |
|---|---|---|
| `--background` | Void Night | `#1a1a2e` |
| `--card` | Cavern Blue | `#16213e` |
| `--primary` | Slime Green | `#8BF046` |
| `--destructive` | Forge Orange | `#FF9A3C` |
| `--accent` | Potion Mist | `#C8F0A0` |
| `--foreground` | Parchment | `#E8E8E8` |

Para adicionar novos componentes Shadcn/ui:

```bash
pnpm dlx shadcn@latest add <componente>
```

---

## Testes

Os testes usam **Vitest** + **React Testing Library**. Para componentes isolados:

```tsx
import { render, screen } from "@testing-library/react"
import { Button } from "@/components/ui/button"

test("renderiza o botão", () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText("Click me")).toBeInTheDocument()
})
```

---

## Internacionalização

As traduções ficam em `src/lib/i18n.ts`. Para usar nos componentes:

```tsx
import { useTranslation } from "react-i18next"

function Home() {
  const { t } = useTranslation()
  return <h1>{t("welcome")}</h1>
}
```

---

## Estado Global

As stores do Zustand ficam em `src/store/`. Exemplo de uso:

```tsx
import { useAppStore } from "@/store/app.store"

function Counter() {
  const { count, increment } = useAppStore()
  return <button onClick={increment}>{count}</button>
}
```

---

## Requisições HTTP

A instância do Axios está configurada em `src/lib/axios.ts`:

```ts
import { api } from "@/lib/axios"

const { data } = await api.get("/users")
```

---

## Licença

MIT