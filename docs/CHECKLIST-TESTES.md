# Checklist de testes e correções

Projeto **Corte & Arte** — integração do Portfólio, padronização de estrutura,
testes gerais e validação de estado compartilhado/redirecionamentos.

Branch: `feat/integracao-portfolio-e-padronizacao`
Data: 02/11/2026

## Legenda

- ✅ OK
- ⚠️ OK com limitação conhecida (documentada abaixo)
- ⛔ Não presente neste protótipo (fora do escopo atual)

## Verificações automáticas

| Verificação        | Comando                | Resultado                      |
| ------------------ | ---------------------- | ------------------------------ |
| Build de produção  | `npm run build`        | ✅ build em ~270ms, sem erros  |
| Lint               | `npm run lint`         | ✅ 0 erros / 0 avisos          |
| Formatação         | `npm run format:check` | ✅ todos os arquivos no padrão |
| Montagem (SSR)     | render de `App.jsx`    | ✅ árvore monta sem erro       |
| Dados do portfólio | smoke test             | ✅ 5 fotos, todas com alt      |
| Dados dos serviços | smoke test             | ✅ 3 serviços completos        |
| Link do WhatsApp   | smoke test             | ✅ com e sem telefone          |

## Fluxos

### Desktop (largura ≥ 1024px)

- ✅ Serviços em 3 colunas, Portfólio em grade de 5 cards.
- ✅ Troca desktop/mobile é por `ResizeObserver` na largura do componente
  (`useEhDesktop`, ponto de corte 1024px), não só pela janela.

### Mobile (largura < 1024px)

- ✅ Serviços empilhados; Portfólio em carrossel com bolinhas de navegação.
- ✅ Menu do header em `<details>` (abre/fecha sem JS).

### Teclado

- ✅ Carrossel: `←`/`→` trocam de foto e movem o foco para o slide ativo;
  `Enter`/`Espaço` ampliam (abrem o lightbox).
- ✅ Lightbox: `Esc` fecha, `←`/`→` navegam, `Tab`/`Shift+Tab` ficam presos
  dentro do modal (foco não escapa para a página atrás).
- ✅ Ao chegar na 1ª/última foto, o foco salta do botão desabilitado para o
  botão de navegação ainda ativo (o teclado não "trava").
- ✅ Foco visível por teclado (`:focus-visible`) em cards, botões e modal.

### Lightbox

- ✅ Abre no `<body>` via `createPortal` (fica acima de tudo).
- ✅ Trava a rolagem da página enquanto aberto e compensa a barra de rolagem
  (a página não "pula" ao abrir).
- ✅ Ao fechar, devolve o foco ao card/slide que abriu a foto.
- ✅ Índice sempre dentro de `[0, total-1]` (não sai da coleção).

### Carrossel

- ✅ Arrasto por toque/mouse (`pointer events`); ~18% da largura troca de foto.
- ✅ Toque simples (sem arrastar) amplia a foto.
- ✅ Bolinhas indicam e trocam a foto atual (`aria-current`).

### iframe

- ⛔ Não há iframe neste protótipo (sem mapa embutido nem Figma embutido).

### Formulário

- ⛔ Não há formulário de contato/reserva. O agendamento é feito pelo botão
  "Agende já", que redireciona ao WhatsApp (ver abaixo). **Não há reserva real
  nem backend** — é uma demonstração de frontend.

### Compartilhamento / redirecionamento pelo WhatsApp

- ✅ "Agende já" (CTA) e "Contato" (menu) abrem o WhatsApp em nova aba com uma
  mensagem pronta, via `src/lib/whatsapp.js`.
- ✅ **Sem telefone fixo por padrão**: abre o WhatsApp com a mensagem e deixa a
  pessoa escolher o contato. Nenhum número é inventado.
- ✅ Telefone opcional por variável de ambiente `VITE_WHATSAPP_TELEFONE`
  (ver `.env.example`); a máscara é limpa e só os dígitos são usados.

## Estado compartilhado e redirecionamentos

- ✅ **Carrossel ↔ Lightbox**: compartilham o índice da foto. Ao fechar o
  lightbox no mobile, o carrossel fica na última foto vista e o foco volta ao
  card correto. Índice sempre validado (clamp) para não sair da coleção.
- ✅ **Config de telefone**: o número do WhatsApp é um estado de configuração
  único (env), consumido pelo header; a demo funciona com ou sem ele.
- ✅ Âncoras internas que resolvem: `#inicio`, `#servicos`, `#sobre-nos`
  (header sticky + `scroll-padding-top` evitam que o título fique sob o header).

## Falhas e correções feitas

| #   | Falha encontrada                                                                             | Correção                                                 | Impeditiva? |
| --- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- |
| 1   | Portfólio (carrossel/lightbox) existia só na branch, fora da página                          | Integrado ao `App.jsx` e à estrutura do `main`           | Sim         |
| 2   | Primitivos `Descricao`/`IconeAmpliar`/`IconeFechar`/`IconeSeta` faltando no `ui.jsx` do main | Adicionados ao `ui.jsx` no padrão do projeto             | Sim         |
| 3   | CSS do portfólio (carrossel, lightbox, grade) ausente no main                                | Mesclado em `styles/corte-arte.css`                      | Sim         |
| 4   | Fontes divergentes: Serviços usava Oswald/Lora/Fredoka; resto, Antonio/Cabin                 | Padronizado para Antonio/Cabin (sem `@import` duplicado) | Não         |
| 5   | `src/App.css` morto, com `@import` de template e erro de sintaxe (`;;`)                      | Arquivo removido                                         | Não         |
| 6   | CTA "Agende já" apontava para `#contato`, que não existe (link morto)                        | Passou a redirecionar ao WhatsApp (`lib/whatsapp.js`)    | Sim         |
| 7   | Estrutura mista: `components/Servicos.jsx` solto e `sections/sobre-nos/`                     | Tudo em `components/<Nome>/<Nome>.{jsx,css}`             | Não         |
| 8   | Estilo de código inconsistente (aspas duplas e `;` vindos da branch)                         | `npm run format` aplicado em todo o projeto              | Não         |

## Limitações conhecidas (não impeditivas)

- ⚠️ A âncora `#avaliacoes` do menu ainda não tem seção correspondente: a seção
  "Avaliações" vive na branch `US07/Avaliacoesedepoimentosinterativos` e ainda
  não foi integrada. Clicar no item não quebra a página; apenas não rola.
- ⚠️ Não há backend, autenticação, reservas reais nem número de WhatsApp fixo.
  É um protótipo de frontend para demonstração.
- Testes de arrasto por toque e de layout responsivo foram conferidos por
  leitura de código e build; recomenda-se uma passada manual em um aparelho
  real antes da entrega final.
