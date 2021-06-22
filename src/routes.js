const express = require('express');

const PessoaController = require('./controllers/PessoaController');

const routes = express.Router();


//ROTAS DE PESSOA FÍSICA
routes.get('/pessoas', PessoaController.list);

routes.get('/pessoas/:cpf', PessoaController.view);

routes.post('/pessoas', PessoaController.store);

routes.put('/pessoas/:cpf', PessoaController.update);

routes.delete('/pessoas/:cpf', PessoaController.delete);





module.exports = routes;

