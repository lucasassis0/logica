var user = require("readline-sync")

var n1 = user.questionInt("Insira o primeiro numero: ")
var n2 = user.questionInt("Insira o segundo numero: ")
var f = 0
var s = 0

if (n1 > 0 && n2 > 0) {
    while (f < n2) {
        s = s + n1
        f++
    }
    console.log("O resultado da multiplicacao: "+(s))
}else if (n1 < 0 && n2 < 0){
    console.log("Favor digitar um numero maior que zero.")
}