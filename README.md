# Teste Front End Kelvin

## Documentação

- [Documentação](#)
- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Desafios](#desafios)
- [Tecnologias Principais](#tecnologias-principais)
- [Bibliotecas de Apoio](#bibliotecas-de-apoio)
- [Desenvolvedor](#desenvolvedor)
- [Executando o Projeto WEB Localmente](#executando-o-projeto-web-localmente)       

## Descrição do Projeto

Este é um projeto de teste frontend criado para avaliar e demonstrar minhas habilidades como desenvolvedor web frontend júnior. O objetivo principal deste projeto é aplicar os conceitos  para criar uma aplicação web interativa e responsiva.

## Funcionalidades

- Exibição do Botão:

> Ao acessar a aplicação, o usuário é apresentado com um botão na tela.

- Exibição do Input e Tabela:

> Quando o usuário clica no botão, um input e uma tabela são revelados na interface.

- Filtragem de Itens por E-mail:

> O input permite que o usuário insira um endereço de e-mail.
A tabela exibida contém uma lista de itens.
Quando o usuário digita um endereço de e-mail no input, a tabela é filtrada para exibir apenas os itens relacionados a esse e-mail deixando a borda do input na cor verde. Caso o e-mail não exista ou não for encontrado, a borda passa para a cor vermelha e é exibido uma mensagem de erro ao usuário!


## Desafios

 > Meu maior desafio foi trabalhar com tabelas e a responsividade delas. Pesquisei bastante, li algumas documentações e busquei em fóruns, poderia ter usado alguma lib do material ui para facilitar, porém decidi fazer manualmente para me desafiar e aprender cada vez mais!

 > Usar styled components também foi um desafio legal, pois gosto bastante do css puro, porém o styled possui várias vantagens e como venho estudando a algum tempo optei por utilizá-lo!


## Tecnologias Principais

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://pt-br.legacy.reactjs.org/)
[![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com//)

## Bibliotecas de Apoio

    @types/styled-components: 5.1.34
    react: 18.2.0
    react-dom: 18.2.0
    styled-components: 6.1.8
    axios: 1.6.7


## Desenvolvedor

<table align="center">
  <tr>
    <td align="center">
      <div>
         <img src="https://avatars.githubusercontent.com/u/110488969?v=4" width="120px;" alt="Foto de Kelvin"/><br>
          <b>Kelvin Charles da Cruz</b><br>
          <b> Desenvolvedor Web Frontend</b><br>
            <a href="https://www.linkedin.com/in/kelvin-charles/" alt="LinkedIn"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/ height="20"></a>
         <a href="https://github.com/kelvincharlesdev" alt="GitHub"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="20"></a>

  </tr>


</table>

## Executando o projeto web localmente

> Projeto iniciado usando npm create vite@latest.

- Clone o projeto com

  > git clone https://github.com/uolfrontend/teste-frontend-2023.git

- Vá para a raiz do diretório

  > cd teste-frontend-kelvin/


- Instale as dependências

  > npm install

- Inicie o servidor local

  > npm run dev

- Analisar erros padrões com ESLint

  > npm run lint

- Formata código corretamente

  > npm run format


## Observações

- No componente Table na parte responsiva ao invés de coluna optei por deixa-la normal com scroll lateral, scroll no qual usei uma propriedade do css para remover a barra de rolagem deixando apenas para o usuário arrastar , já que seria um mobile!
- Projeto feito sem consumo de API externa; os dados foram mocados localmente no formato JSON. Apesar disso fiz a simulação completa da chamada no endpoint fornecido, com axios e deixei comentado na page Home.
- Criei o arquivo `.env` contendo variáveis de ambiente sensíveis e deve ser criado localmente pois foi colocado no arquivo `.gitignore`
- Como ainda não seria feito deploy e apenas um pull request , passei o clone como se fosse do projeto base /teste-frontend-2023.git