var user = require("readline-sync")

var nome = ""
var idade = null
var saida = ""

while (nome != "Final") {
    
    nome = user.question("Digite o nome ou 'Final' para sair: ")
    if(nome=="Final"){
        console.log(saida)
        break
    }else{
        idade = user.questionInt("Digite a idade de "+nome+": ")
        saida = saida + nome + " - " + idade + " anos\n"
    }

}