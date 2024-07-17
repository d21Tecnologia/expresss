// CAMINHOS / ROTAS DA API
    // CRIANDO O SERVIDOR EXPRESS (lembrar de instalar no terminal com o comando: npm instal express)
        const express = require('express');
    // CRIANDO A VARIAVEL DE ROTEAMENTO (COMO O SERVIDOR RESPONDE A SOLICITAÇÃO DO CLIENTE)
        const router = express.Router()
        //ADICIONANDO ROTA PARA CONTROLADORES
            const CarroController = require('./controllers/CarroController');
        //INCLUINDO MÉTODO PARA LISTAR OS CARROS
            router.get('/carros', CarroController.buscarTodos);
            router.get('/carro/:codigo', CarroController.buscarUm);
            router.post('/carro/', CarroController.inserir);
            router.put('/carro/:codigo', CarroController.alterar);
            router.delete('/carro/:codigo',CarroController.excluir);
    // EXPORTANDO AS ROTAS PARA O PROJETO
        module.exports = router; 