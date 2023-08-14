# Desafio UOL

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

Aplicação desenvolvida durante o processo seletivo para desenvolvedor front-end do UOL. Sua funcionalidade consiste em listar clientes resultantes de uma chamada de API e a filtragem deles de acordo com parâmetros inseridos pelo usuário.

## Links online

[Site rodando deploy do projeto](https://desafio-uol.vercel.app/)

[Site rodando deploy do Storybook do projeto](https://moggishere.github.io/desafio-uol-storybook/)

## Pré-requisitos

- Node.js (versão 14.6.0 ou superior)
- npm (geralmente vem com o Node.js) ou Yarn
- git (opcional, para clonar o repositório)

## Como Rodar Localmente

1.  Clone este repositório (ou faça o download do ZIP):

    ```bash
    git clone https://github.com/moggishere/desafio-uol.git
    ```

2.  Acesse o diretório do projeto:

    ```bash
    cd desafio-uol
    ```

3.  Instale as dependências com npm:

    ```bash
    npm install
    ```

    Ou, instale com Yarn:

    ```bash
    yarn
    ```

4.  Execute o servidor de desenvolvimento do Next.js com npm:

    ```bash
    npm run dev
    ```

    Ou, com Yarn:
   
    ```bash
    yarn dev
    ```

    O aplicativo estará disponível em http://localhost:3000.

Nota: Caso queira executar **npm start** ou **yarn start** é necessário realizar **npm run build** ou **yarn build** primeiro.

## Como Executar o Storybook

1.  Certifique-se de estar no diretório do projeto:

    ```bash
    cd desafio-uol
    ```

2.  Execute o Storybook com npm:

    ```bash
    npm run storybook
    ```

    Ou, com Yarn:

    ```bash
    yarn storybook
    ```

    O Storybook estará disponível em http://localhost:6006.

## Como Rodar os Testes Unitários

1. Para rodar os testes utilizando Jest e React Testing Library, certifique-se de estar no diretório do projeto:

   ```bash
   cd desafio-uol
   ```

2. Execute os testes com npm:

   ```bash
   npm test
   ```

   Ou, com Yarn:

   ```bash
   yarn test
   ```
## Resultado

### Tabela

  ![table_desktop_default](https://github.com/moggishere/desafio-uol/assets/92119192/fd0a50db-a975-4c26-8a12-8ee07e749e9f)
  ![table_mobile_default](https://github.com/moggishere/desafio-uol/assets/92119192/431521d0-9dad-4316-a13e-c6b99a0d5f60)

### Botões

  ![button_default](https://github.com/moggishere/desafio-uol/assets/92119192/33e6a07b-5c01-440d-bfe0-f2a8cc709b2b)
  ![button_secondary](https://github.com/moggishere/desafio-uol/assets/92119192/90b14754-9ec0-4d73-b719-f3ce193b42d5)
  ![button_disabled](https://github.com/moggishere/desafio-uol/assets/92119192/7ba8b6d7-b4e1-458e-ab08-045b75ab8f80)
  ![button_large](https://github.com/moggishere/desafio-uol/assets/92119192/9df69ebd-a26f-4636-a750-e142d0a6c13c)
  ![button_small](https://github.com/moggishere/desafio-uol/assets/92119192/268fdf0d-27c2-4a18-9c69-24345e9776b9)
  ![button_longText](https://github.com/moggishere/desafio-uol/assets/92119192/625ec83b-cf6b-4d98-a047-447ef6bbae76)

### Input

  ![input_default](https://github.com/moggishere/desafio-uol/assets/92119192/0698e436-7b57-4fdf-ba91-f891ae5454b5)
  ![input_disabled](https://github.com/moggishere/desafio-uol/assets/92119192/a2e36fb2-21c3-499e-a682-37fe6c607917)
  ![input_success](https://github.com/moggishere/desafio-uol/assets/92119192/e497fe12-07fb-42e6-aedf-6cc3084c8abb)
  ![input_attention](https://github.com/moggishere/desafio-uol/assets/92119192/edcb6bf1-8ea6-443f-a75f-2d3beba7dcf5)
  ![input_error](https://github.com/moggishere/desafio-uol/assets/92119192/50271b8a-cd45-4773-bc60-bdb538e7a094)

### Select

  ![select_default](https://github.com/moggishere/desafio-uol/assets/92119192/957ac262-5ca9-4702-b9ee-fedb040d37b3)

## Scripts Disponíveis

- **npm run dev** ou **yarn dev**: Inicia o servidor de desenvolvimento do Next.js.
- **npm run build** ou **yarn build**: Compila o aplicativo Next.js para produção.
- **npm start** ou **yarn start**: Inicia o aplicativo compilado.
- **npm run storybook** ou **yarn storybook**: Inicia o Storybook.
- **npm run storybook** ou **yarn storybook**: Inicia o Storybook.
- **npm test** ou **yarn test**: Executa os testes utilizando Jest e React Testing Library.
