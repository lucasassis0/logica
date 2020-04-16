var modPar = require ("is-odd")
var user = require("readline-sync")

var num = user.questionInt("Digite um numero: ")

if(modPar(num)){
    console.log("Não é par!!")
}else{
    console.log ("É par!!")
}