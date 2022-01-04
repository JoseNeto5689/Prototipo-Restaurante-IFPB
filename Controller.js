const customExpress = require("./config/customExpress")
const connection = require("./Infraestrutura/connection")
connection.connect(erro => {
    if(erro){
        console.log("Erro")
    }else{
        console.log("BD conectado com sucesso")
        const app = customExpress()
        app.listen("3000", () => {
        console.log("Server status: OK\nWorking Port: 3000\n")
})
    }
})
