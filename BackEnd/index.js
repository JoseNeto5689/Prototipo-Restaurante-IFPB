const customExpress = require("./config/customExpress")
const connection = require("./infrastructure/connection")
//Verificando se a conexão ao BD foi bem sucedida
connection.connect(erro => { 
    if(erro){
        console.log("Erro")
    }else{
        const app = customExpress() //Iniciando app modificado
        app.listen("8086", () => { //Iniciando servidor
        console.log("Server status: OK\nWorking Port: 8086\n")
        })
    }
})
