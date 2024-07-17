// SERVIDOR 
    //INCLUINDO O DOTENVI(DOTENVI É UM MÓDULO QUE CARREGA VARIÁVEIS DE CONFIGURAÇÃO EM UM AMBIENTE SEPARADO DO CÓDIGO - THE TWELVE-FACTOR APP)
        require('dotenv').config({path:'variaveis.env'});
        //CHAMANDO O EXPRESS
            const express = require("express");
        //CHAMANDO OS CORES (Ele nos permite relaxar a segurança aplicada a uma API. Isso é feito contornando os cabeçalhos, que especificam quais podem acessar a API)
            const cors = require("cors");
        //CHAMANDO O BODY(CONVERTE O CORPO DE UMA REQUISIÇÃO PARA OUTROS FORMATOS)
            const bodyParser = require('body-parser');
        //INDICANDO O CAMINHO PARA AS ROTAS
            const routes = require('./routes');
        //CRIANDO O SERVIDOR
            const server = express()
            //ATIVANDO O SERVIDOR
                server.use(cors()); //EXECUTANDO O CORS
                server.use(bodyParser.urlencoded({extended:false})); //EXECUTANDO O BODYPARSER
                server.use('/api',routes);//FAZ COM QUE TODO ENDEREÇO DAS  ROTAS GANHEM O PREDIXO "api"
                server.listen(process.env.PORT, ()=>{
                    console.log(`Server rodando in: http://localhost:${process.env.PORT}`); //PEGANDO A PORTA E LIGANDO O SERVIDOR LOCALMENTE              
                });   
            