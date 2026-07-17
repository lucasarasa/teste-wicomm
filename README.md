# Di Santinni — Teste Prático WICOMM

Home mobile-first desenvolvida em React a partir do layout do Figma.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** — tema customizado (cores da marca, fonte Outfit) via `@theme`, sem `tailwind.config.js`
- **shadcn/ui** — componente `Carousel` usado em todas as seções com scroll horizontal (Nossos Produtos, Compre por Tamanho, Nossas Marcas, Novidades, tabs de categoria)
- **lucide-react** — ícones (setas do carrossel, coração de favoritar, ícones da nav bar)
- **Context API** (React) — estado global do carrinho (`CartContext`), compartilhado entre o header e os cards de produto

## Qualidade e padronização de código

- **ESLint** com `eslint-plugin-simple-import-sort` — ordena os imports automaticamente (bibliotecas externas, depois internos, depois assets)
- **Prettier** com `prettier-plugin-tailwindcss` — ordena as classes do Tailwind na ordem recomendada, evitando inconsistência de estilo entre componentes
- **Husky** + **lint-staged** — hook de `pre-commit` que roda ESLint e Prettier automaticamente nos arquivos staged antes de cada commit
- **git-commit-msg-linter** — hook de `commit-msg` que valida o padrão [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `chore:`, etc.)

## Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run lint     # roda o ESLint
npm run format   # roda o Prettier no projeto inteiro
```
