# Site em Typescript
## Dentro da pasta frontend:
### >>> Dentro da pasta frontend executar o comando "npm install"
### >>> Iniciar o npm "npm init -y"
### >>> No windows, ainda dentro da pasta frontend, executar o comando "npm install cross-env --save-dev" e modificar a linha de código abaixo no package.json
### "scripts":
###    "dev": "cross-env NODE_ENV=development webpack --progress --watch",
###    "prod": "cross-env NODE_ENV=production webpack --progress --watch"
### >>> Para executar o run code, no terminal introduzir o comando "npm run dev"
------------------------------------------------------------------------------------
## Dentro da pasta backend:
### >>> Dentro da pasta backend aplicar o comando "tsc --init"
### >>> Instalação do express e cors dentro da pasta backend: npm i express cors
### >>> Instalação da tipagem do express com dependência de desenvolvimento dentro da pasta backend: npm i @types/cors @types/express -D
### >>> Dentro da pasta backend aplicar o comando "npm i typescript -D" para possibilitar o uso do import
### >>> Reinicia automaticamente o servidor quando há mudanças no código "npm i ts-node-dev -D"
#### >> Fazer modificação no scripts dentro do package-json, logo após aplicar o comando acima: "dev": "ts-node-dev src/app.ts"
### >>> Para rodar o run code aplicar o comando dentro da pasta backend "node src/app.ts"
### >>> Para executar o run code, no terminal introduzir o comando "npm run dev"
