var user = require("readline-sync")

var menorIdade = user.questionInt("Digite uma idade: ")
var x = 0

while(x < 8){
    idade = user.questionInt("Digite uma idade: ")
    if(idade < menorIdade){
        menorIdade = idade
    }
    x++
}

console.log("A menor idade digitada foi: "+menorIdade+" anos")