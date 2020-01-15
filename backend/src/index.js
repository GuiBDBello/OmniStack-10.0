const express = require('express'); // Importa a dependência do express
const mongoose = require('mongoose'); // Importa a dependência do mongoDB
const routes = require('./routes');

const app = express(); // Cria a aplicação

// Conecta no banco de dados mongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-10-qkjut.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); // Define uma configuração que será válida para todas as rotas da aplicação

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros: Query Params, Route Params, Body

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração [PUT] ou remoção [DELETE])
// É acessado pela URL com '/:nomeParametro'
// Body: request.body (Dados para criação ou alteração de um registro)

// app.get('/', (request, response) => { // Cria uma rota e retorna um texto
//     return response.send('Hello World!');
// });
app.use(routes);

app.listen(3333); // Inicia a aplicação na porta definida
