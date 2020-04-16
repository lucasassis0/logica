var user = require("readline-sync")
var n = user.questionInt("Insira um numero: ")
var maior = null
var menor = n

while (true) {
    if(n>maior){
        maior = n
    }else if(n<menor){
        menor = n
    }
    n = user.questionInt("Insira um numero: ")
    if(n == -1){
        console.log("O maior numero digitado: "+maior)
        console.log("O menor numero digitado: "+menor)
        break
    }
}