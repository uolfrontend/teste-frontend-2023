# Desafio Front-end

Este projeto é um desafio UOL para vagas de front-end

md

## Sobre as dependências

**NPM**
A escolha inicial foi pelo NPM, por ser nativo na instalação do Node, nenhum desagravo a outro gerenciador de dependências.

**Create React App**
Este projeto foi criado a partir do esqueleto produzido pelo projeto [Create React App](https://create-react-app.dev/).
É um pacote que elimina várias dependências comuns entre projetos, como Webpack, Babel, Jest e outros.
A instalação é simples, pode ser global ou localmente.

```bash
npm install react-scripts@latest
```

## Como Instalar este projeto

Primeiro baixe o projeto
```bash
git clone git@github.com:hfisaquiel/u-challenge.git
```

Então, instale utilizando o NPM (ou YARN)
```bash
npm install
```

## Comandos de execução

Dentro do diretório do projeto, pode-se rodar os scripts:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.\
Você também pode ver erros de *lint* no console.

### `npm test`

Inicia o executor de testes no modo de observação interativo.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests)
para obter mais informações.

### `npm run build`

Cria o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para obter o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) 
para obter mais informações.

### `npm run eject`

**Observação: esta é uma operação unidirecional. Depois de `ejetar`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as opções de configuração,
você pode `ejetar` a qualquer momento. Este comando removerá a dependência de compilação unificada
do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas
(webpack, Babel, ESLint, etc) diretamente no seu projeto para que você tenha controle total
sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas apontarão para os
scripts copiados para que você possa ajustá-los. Neste ponto você está sozinho.

Você nunca precisa usar `eject`. O conjunto de recursos selecionados é adequado para implantações
pequenas e médias e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos
que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.
