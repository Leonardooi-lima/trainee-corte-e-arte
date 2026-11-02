# Corte & Arte

Site institucional responsivo (mobile first) para uma barbearia, desenvolvido
pelo **Grupo 1** durante o case Trainee da CodeTech Jr.

> **Protótipo de frontend.** Não há banco de dados, autenticação nem backend.
> **Não existem reservas reais** e **não há um número de WhatsApp fixo**: o botão
> "Agende já" apenas abre o WhatsApp com uma mensagem pronta (veja
> [Configuração opcional](#configuração-opcional-telefone-do-whatsapp)).

## Sobre o projeto

O objetivo é um site moderno, acessível e responsivo onde o cliente conhece os
serviços, o portfólio e a equipe, e inicia um contato pelo WhatsApp. Seções:

- **Hero** — chamada principal com vídeo de fundo.
- **Nossos Serviços** — cards de serviços com preço e duração.
- **Portfólio** — grade (desktop) ou carrossel (mobile) com lightbox acessível.
- **Sobre Nós** — diferenciais da barbearia.
- **Nosso Time** — profissionais.

## Tecnologias

- React 19
- Vite 8
- JavaScript (ES Modules)
- HTML5 e CSS3 (CSS puro, sem frameworks de estilo)
- ESLint + Prettier
- Git e GitHub / Figma

## Pré-requisitos

- Git
- Node.js **20.19+** (ou mais recente; o projeto foi testado no Node 22)
- npm

Para conferir as versões:

```bash
node -v
npm -v
git --version
```

## Como executar

```bash
# 1. Clone o repositório
git clone https://github.com/Leonardooi-lima/trainee-corte-e-arte

# 2. Entre na pasta
cd trainee-corte-e-arte

# 3. Instale as dependências (usa o package-lock.json)
npm ci

# 4. Rode em modo de desenvolvimento
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173/).

## Scripts disponíveis

| Comando                | O que faz                                        |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Sobe o servidor de desenvolvimento (hot reload). |
| `npm run build`        | Gera a versão de produção em `dist/`.            |
| `npm run preview`      | Serve localmente o conteúdo de `dist/`.          |
| `npm run lint`         | Roda o ESLint.                                   |
| `npm run format`       | Formata todo o projeto com o Prettier.           |
| `npm run format:check` | Só verifica a formatação (não altera arquivos).  |

## Configuração opcional: telefone do WhatsApp

Por padrão **não há número fixo**: "Agende já" e "Contato" abrem o WhatsApp com
uma mensagem pronta e deixam a pessoa escolher o contato.

Para apontar a um número fixo (ex.: em uma demonstração), crie um arquivo `.env`
na raiz a partir do exemplo e preencha só os dígitos (DDI + DDD + número):

```bash
cp .env.example .env
```

```env
# .env
VITE_WHATSAPP_TELEFONE=5514999999999
```

O `.env` é ignorado pelo Git. Se a variável ficar vazia, o comportamento padrão
(sem contato fixo) continua valendo.

## Estrutura de pastas

```
src/
  components/
    <Secao>/<Secao>.jsx + <Secao>.css   # Header, Hero, Servicos, Portfolio, SobreNos, Equipe
    corteArte/ui.jsx                     # ícones e primitivos de UI compartilhados
  data/                                  # conteúdo editável das seções
    servicos.js
    portfolio.js
  hooks/useEhDesktop.js                  # decide mobile/desktop por largura (ResizeObserver)
  lib/whatsapp.js                        # monta o link do WhatsApp
  styles/corte-arte.css                  # estilos de Serviços e Portfólio
  assets/                                # imagens importadas pelo JS (equipe, logos, portfólio, serviços)
public/                                  # imagens e vídeos servidos como estáticos (hero)
```

Cada seção fica em sua própria pasta dentro de `components/`, no padrão
`NomeDaSecao/NomeDaSecao.jsx`.

## Organização dos dados

O conteúdo das seções fica separado do visual, em `src/data/`. Para mudar
textos, preços ou fotos, edite esses arquivos (não os componentes):

- **`src/data/servicos.js`** — lista `SERVICOS`. Cada item tem `id`, `nome`,
  `descricao`, `preco`, `duracaoMin`, `adicional`, `icone` e `imagem`
  (`mobile`, `desktop`, `alt`). As imagens são importadas de
  `src/assets/servicos/`.
- **`src/data/portfolio.js`** — lista `PORTFOLIO`, na ordem do Figma. Cada item
  tem `id`, `titulo`, `descricao`, um `negrito` opcional (trecho destacado da
  descrição) e `imagem` (`src`, `alt`). As imagens vêm de
  `src/assets/portfolio/`.

Sempre preencha o `alt` das imagens (acessibilidade).

## Origem das imagens e ícones

Ícones da seção **Sobre Nós** (Flaticon):

- Navalha — "Barber icons created by surang": https://www.flaticon.com/free-icons/barber
- Cadeira — "Barber-chair icons created by surang": https://www.flaticon.com/free-icons/barber-chair
- Estilista — "Barber shop icons created by Magnific": https://www.flaticon.com/free-icons/barber-shop

> As fotos de serviços, portfólio e equipe e o vídeo do hero vieram do design do
> projeto no Figma. Quem adicionou cada arquivo deve registrar aqui o link de
> origem e a licença antes da entrega final (campo a preencher).

Referência de design (Figma):
https://www.figma.com/site/cvWacd0fmrb2mX4AeP9WEq/CORTE---ARTE

## Demonstração

1. `npm ci` e `npm run dev`.
2. Abra o site e reduza/aumente a janela para ver a troca mobile/desktop.
3. No **Portfólio**, abra uma foto (clique, `Enter` ou toque) para ver o
   lightbox; navegue com as setas do teclado e feche com `Esc`.
4. Clique em **"Agende já"** para ver o redirecionamento ao WhatsApp.

Lembre: é uma demonstração de frontend — **sem reservas reais e sem WhatsApp
fixo** (salvo se você configurar o `.env`).

## Limitações conhecidas

- Sem backend, autenticação ou persistência.
- A âncora "Avaliações" do menu ainda não tem seção (vive na branch
  `US07/Avaliacoesedepoimentosinterativos`, a integrar).
- Detalhes do checklist de testes em [`docs/CHECKLIST-TESTES.md`](docs/CHECKLIST-TESTES.md).

## Fluxo de trabalho com Git

Cada funcionalidade é desenvolvida em uma branch separada.
**Não desenvolva direto na `main`.**

```bash
# Antes de começar uma tarefa, atualize a main
git switch main
git pull origin main

# Crie sua branch
git switch -c feat/nome-da-secao

# Trabalhe, formate e confira
npm run format
npm run lint

# Commite e envie
git add .
git commit -m "feat: descreve a mudança"
git push -u origin feat/nome-da-secao
```

Depois, abra um **Pull Request** no GitHub com a `main` como base e sua branch
como origem, descrevendo as alterações e marcando alguém para revisar.
