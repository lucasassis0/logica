var user = require("readline-sync")

var sexo = user.question("Digite o sexo sendo 1-Feminino e 2-Masculino: ")
var altura = user.question("Digite a altura: ")

if(sexo == 1){
    console.log("Seu peso ideal é de "+ (62.1 * altura - 44.7).toFixed(2) +" Kg")
}else{
    console.log("Seu peso ideal é de "+ (72.7 * altura - 58).toFixed(2) +" Kg")
}