# Teste Front-end - UOL - Colab

## Sobre o desafio

- Desafio técnico para demonstrar habilidade em criar componentes de acordo com especificações de um design e de funcionalidades, para que a aplicação possa ser interativa com o usuário e responsiva para rodar em qualquer dispositivo.


## Processo de desenvolvimento do projeto

- Comecei com a configuração inicial, instalando as bibliotecas de formatação do código. (Eslint e Prettier)
- Em seguida comecei a criação do theme provider, reunindo as principais informações para a estilização do projeto, como: cores, fontes, espaçamentos, bordas etc, além de ajudar na organização, facilita na usabilidade, porque temos acesso a essas informações em qualquer parte da aplicação.
- Criação do componente Button com todas as suas variações de cores e estados.
- Criação e configuração dos serviços de chamada a api. Nessa parte tive um erro de CORS.

Tentei aplicar alternativas para conseguir acessos aos dados:
- Primeiramente adicionei Access-Control-Allow-Origin no headers, sem muito sucesso. 
- Tentei utilizar o CORS Anywhere, que é um proxy NodeJS que adiciona cabeçalhos CORS à solicitação com proxy.
- E por fim tentei proxy configurado na aplicação, utilizei as orientações da documentação do Vite, mas o axios me retornou erro novamente, aparentemente a chamada estava sendo feita na URL do front, a resposta da chamada era o html do front.
- Então devido a essas situações, eu não consegui pegar as informações do back end da UOL, mas também não poderia deixar a aplicação incompleta. Então resolvi utilizar o JSON Server, que é uma biblioteca JavaScript que permite criar rapidamente uma API REST simulada com base em um arquivo JSON.
- Depois comecei a desenvolver a tabela onde foram exibidos os dados dos clientes, conseguir exibir os dados, aplicar a estilização proposta, e fazer o responsivo.
- E para finalizar o input de busca por email, exibindo de forma instantânea o resultado da busca na listagem da tabela.

## Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:
  * React (Vite)
  * Typescript
  * Styled Components
  * Json-server
  * Axios
  * Eslint
  * Prettier

## Instalação e incialização do projeto

- Abra o terminal e clone o repositório com o comando

```
git clone https://github.com/paulobr4z/teste-frontend-2023.git
```
- Entre na pasta com 

```
cd teste-frontend-2023
```

- Instale as dependências do projeto

```
npm install
```

- Rode o aplicação

```
npm run dev
```
- Crie um arquivo .env para a comunicação da aplicação com o servidor (json-server)

```
VITE_API_BASE_URL=http://localhost:3000/
```

- Abra outro terminal para rodar o servidor (json-server)

```
npm run server
```

- Url do end-point do o servidor (json-server)

```
http://localhost:3000/customers
```