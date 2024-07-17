//CHAMANDO MODULO DO MYSQL
    const mysql = require('mysql');
    //PEGANDO OS DADOS DE CONEXÃO
        const connection = mysql.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASS,
            database:process.env.DB_NAME,
        });
    //CRIANDO A CONEXÃO E EXIBINDO STATUS
        connection.connect((error)=>{
            if(error) throw error;
            console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)
        });
    //EXPORTANDO A CONEXÃO
        module.exports=connection;
