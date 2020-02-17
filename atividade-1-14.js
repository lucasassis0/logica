var user = require("readline-sync")

var a = user.questionInt("Digite um numero inteiro: ")
var b = user.questionInt("Digite outro numero inteiro: ")

if(a % b === 0){
    console.log("O número "+a+" é divisível por "+b)
    console.log("O resultado da divisão é: "+a/b)
}else{
    console.log("O número "+a+" não é divisível por "+b)
}