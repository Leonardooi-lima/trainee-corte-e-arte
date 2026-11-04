# Corte & Arte

Site institucional responsivo para uma barbearia e salão de beleza,desenvolvido pelo **Grupo 1** durante o case Trainee da CodeTech Jr.

## Sobre o projeto

O objetivo é desenvolver um site moderno, acessível e responsivo,onde os clientes conheçam os serviços, a equipe e solicitem um horário.

O projeto é **exclusivamente frontend**, é um protótipo demonstrativo. Não há banco de dados, autenticação nem backend, e por isso **nenhuma solicitação de agendamento vira reserva real**.

## Tecnologias utilizadas

- React 19
- Vite 8
- JavaScript (ES Modules)
- HTML5 e CSS3 puro (sem framework de CSS)
- ESLint + Prettier
- Git e GitHub
- Figma (design)

## Como executar o projeto

### Pré-requisitos

- Git
- Node.js 20.19+ ou 22.12+
- npm

Para conferir as versões:

```bash
node -v
npm -v
git --version
```

### 1. Clone o repositório

```bash
git clone https://github.com/Leonardooi-lima/trainee-corte-e-arte
```

### 2. Entre na pasta

```bash
cd trainee-corte-e-arte
```

### 3. Instale as dependências

```bash
npm ci
```

### 4. Execute em modo de desenvolvimento

```bash
npm run dev
```

Abra o endereço informado pelo terminal, normalmente http://localhost:5173/.

## Scripts disponíveis

| Comando                | O que faz                                            |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Sobe o servidor de desenvolvimento (hot reload).     |
| `npm run build`        | Gera a versão de produção em `dist/`.                |
| `npm run preview`      | Serve localmente o build de produção.                |
| `npm run lint`         | Roda o ESLint em todo o projeto.                      |
| `npm run format`       | Formata o código com Prettier (`.prettierrc.json`).  |
| `npm run format:check` | Apenas verifica a formatação, sem alterar arquivos.  |

## Configuração opcional - WhatsApp

A seção de agendamento tem um botão "Compartilhar via WhatsApp". O número de
destino é **opcional** e vem de uma variável de ambiente, **não há número fixo
no código**.

1. Copie o arquivo de exemplo:

   ```bash
   cp .env.example .env
   ```

2. Preencha `VITE_WHATSAPP_NUMERO` com código do país + DDD + número, só dígitos
   (ex. fictício: `5514999999999`).

Se a variável ficar vazia, o compartilhamento abre o WhatsApp **sem
destinatário**, o próprio usuário escolhe para quem enviar.

## Estrutura do projeto

```
src/
├── App.jsx                 # Monta a página (ordem das seções)
├── main.jsx                # Ponto de entrada do React
├── components/             # Uma pasta por seção (JSX + CSS co-localizados)
│   ├── Header/
│   ├── Hero/
│   ├── Servicos/
│   ├── Portfolio/
│   ├── SobreNos/
│   ├── Equipe/
│   ├── Agendamento/
│   ├── Avaliacoes/
│   ├── Localizacao/
│   ├── Footer/
│   └── corteArte/          # Kit de UI compartilhado (ícones, títulos, etc.)
├── data/                   # Fonte única dos dados de cada seção
├── hooks/                  # Hooks reutilizáveis (ex.: useEhDesktop)
├── styles/                 # CSS compartilhado (corte-arte.css)
└── assets/                 # Imagens e ícones, por seção
```

## Limitações do protótipo

Este é um protótipo demonstrativo. Ao apresentar, deixe claro que:

- **Não há reservas reais.** O formulário de agendamento valida os dados e gera
  uma mensagem, mas não cria reserva nem fala com nenhum backend. A própria
  prévia avisa que a solicitação é demonstrativa.
- **Os horários são ilustrativos**, não representam vagas ou disponibilidade
  real.
- **Não há número de WhatsApp fixo.** O destino do compartilhamento vem da
  variável opcional `VITE_WHATSAPP_NUMERO`; sem ela, abre sem destinatário.
- **Os telefones exibidos na Localização são placeholders** (`(14) 9XXXX-XXXX`).
- O mapa é um embed do Google Maps.

## Como demonstrar

1. Rode `npm run dev` e abra no navegador.
2. Mostre o layout em **mobile** e **desktop** (o layout se adapta).
3. Abra uma foto do **portfólio** e navegue com as setas.
4. Preencha o **agendamento**, veja a **prévia** e use **Compartilhar via
   WhatsApp**, explicando que é uma solicitação demonstrativa.

## Fluxo de trabalho com o Git

Para evitar conflitos, cada funcionalidade deve ser desenvolvida em uma branch
separada. **Não desenvolva diretamente na `main`.**

Antes de começar uma nova tarefa, atualize sua main:

```bash
git switch main
git pull origin main
```

Crie uma branch para a tarefa:

```bash
git switch -c feat/nome-da-secao
```

Commit e envio:

```bash
git status
git add .
git commit -m "feat: adiciona seção de serviços"
git push
```

### Abrindo um Pull Request

1. Acesse o repositório no GitHub.
2. Entre na aba **Pull requests**.
3. Clique em **New pull request**.
4. Selecione `main` como destino (base).
5. Selecione sua branch como origem (compare).
6. Adicione um título e uma descrição das alterações; se quiser, marque alguém
   para revisar.
7. Clique em **Create pull request**.
