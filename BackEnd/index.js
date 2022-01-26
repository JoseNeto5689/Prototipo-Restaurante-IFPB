const customExpress = require("./config/customExpress")
const connection = require("./infrastructure/connection")
connection.connect(erro => {
    if(erro){
        console.log("Erro")
    }else{
        const app = customExpress()
        app.listen("3000", () => {
        console.log("Server status: OK\nWorking Port: 3000\n")
})
    }
})
