# OmniStack-10.0
Sistema desenvolvido para a Semana OmniStack 10.0

## Dependencies

### Backend:

- `yarn init -y` ou `npm init -y`: cria o arquivo `package.json`, indicando que o diretório atual é um projeto JavaScript. O arquivo contém diversas informações do projeto, e também indica as dependências do projeto.
- `yarn add express` ou `npm install express`: adiciona a dependência do *express*.
- `yarn add nodemon -D` ou `npm install nodemon -D`: adiciona a dependência de desenvolvimento do *nodemon*.
- `yarn add mongoose` ou `npm install mongoose`: adiciona a dependência *mongoose*.
- `yarn add axios` ou `npm install axios`: adiciona a dependência *axios*.
- `yarn add cors`: habilita o acesso externo.

### Frontend (web):

- `yarn create react-app web` ou `npx create react-app web`: cria um novo projeto ReactJS com o nome *web*.
- `yarn start` ou `npm run start`: inicializa o projeto React em modo desenvolvimento.
- `yarn add axios` ou `npm install axios`: adiciona a dependência *axios*.

## Commands

### Terminal:

- `code .`: abre o VS Code no diretório atual.

## Shortcuts

### Visual Studio Code:

- `Ctrl + Shift + P`: abre a "Palete de comandos".
- `Ctrl + '`: abre o Terminal integrado.

## Others

### MongoDB Atlas:

- Acesse http://mongodb.com/cloud/atlas
- Crie um usuário/Faça login.
- Clique em `Build a Cluster`.
- Selecione *Starter Cluster*.
- Vá em *SECURITY* > *Database Access* e clique em `+ ADD NEW USER`.
- Adicione um usuário e senha com permissão *Read and write to any database*.
- Vá em *SECURITY* > *Network Access* e clique em `+ ADD IP ADDRESS`.
- Para possibilitar o acesso ao banco em ambiente de desenvolvimento, clique em `ALLOW ACCESS FROM ANYWHERE`.
- Vá em *ATLAS* > *Clusters* e clique em `CONNECT`.
- Selecione *Connect Your Application*.
- Em *DRIVER*, selecione `Node.js`. Em *VERSION*, selecione `3.0 or later`.
- Selecione e copie o texto de *Connection String Only*.
- Adicione a dependência `mongoose`.
- Após importar o *mongoose* em sua aplicação, utilize `mongoose.connect('connectionString')` para conectar ao banco.

### MongoDB Compass:

- Faça o download do MongoDB Compass Community em https://www.mongodb.com/download-center/compass
- No site do MongoDB Atlas, vá em *ATLAS* > *Clusters* e clique em `CONNECT`.
- Selecione *Connect with MongoDB Compass*.
- Copie a string de conexão.
- Abra o MongoDB Compass e automaticamente será detectada a conexão.
- Verifique os dados (senha, banco de dados) e clique em `CONNECT`.
