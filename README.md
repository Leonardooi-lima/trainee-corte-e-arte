# Corte & Arte

Site institucional responsivo para uma barbearia e salão de beleza, desenvolvido pelo **Grupo 1** durante o case Trainee da CodeTech Jr.

# Sobre o projeto

O objetivo é desenvolvdr um site moderno, acessível e responsivo, permitindo que os clientes conheçam os serviçõs, a equipe e entrem em contato para agendar serviços.

O projeto é exclusivamente frontend. Não utilizamos banco de dados autenticação ou backend.

# Tecnologias utilizamos

- React
- JavaScript
- Vite
- HTML5 e CSS3
- Eslint
- Git e Github
- Figma

## Como executar o projeto

### Pré-requisitos

Antes de começar, tenha instalado:

- Git
- Node.js 20.19+ ou uma versão mais recente, que seja compativel com o Vite
- npm

para conferir as versões:

```bash
node -v
npm -v
git --version
```

### 1. Clone o repositorio

```bash
git clone https://github.com/Leonardooi-lima/trainee-corte-e-arte
```

### 2. Entre na pasta

```bash
cd trainee-corte-e-arte
```

### 3. Instale as dependencias

```bash

npm ci
```

### 4. Execute o projeto

```bash
npm run dev
```

Abra o endereço informado pelo terminal, normalmente:

http://localhost:5173/

### Formatação do código

Para formatar automaticamente todo o projeto no padrão definido em
`.prettierrc.json`:

```bash
npm run format
```

Para apenas verificar se os arquivos estão formatados, sem alterá-los:

```bash
npm run format:check
```

## Fluxo de trabalho com o Git

Para evitar conflitos, cada funcionalidade deverá ser desenvolvida em uma branch separada.

**Não desenvolva diretamente na branch 'main'.**

### Atualize sua main

Sempre antes de começar uma nova tarefa:

```bash
git switch main
git pull origin main
```

### Criando uma branch

```bash

git switch -c feat/nome-da-secao
```

### Commitando sua tarefa

Para visualizar todos os arquivos que não foram commitados:

```bash
git status
```

Adicione os arquivos desejados:

```bash
git add .
```

Crie um commit:

```bash
git commit -m "feat: adiciona seção de serviços"
```

Enviando o commit para sua branch:

```bash
git push
```

## Quando pronto, crie um Pull request para a branch main

1. Acesse o repositorio no Github.
2. Entre na aba **Pull requests**
3. Clique em **New pull request**
4. Selecione 'main' como destino (base)
5. Selcione sua branch como origem (compare).
6. Adicione um titulo e uma descrição das alterações, também consegue adicionar alguem para revisar.
7. Clique em **Create pull request**.
