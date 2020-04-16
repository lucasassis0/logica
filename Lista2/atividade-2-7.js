var user = require("readline-sync")

var senha = user.question("Senha: ")

if(senha == "batatafrita"){
    console.log("ACESSO PERMITIDO!")
}else{
    console.log("ACESSO NEGADO!")
}