var user = require("readline-sync")

function menor(n1,n2) {
    if (n1<n2) {
        return "O numero "+n1+" é menor"
    }else{
        return "O numero "+n2+" é menor"
    }
}

var n1 = user.questionFloat("Digite o primeiro numero: ")
var n2 = user.questionFloat("Digite o segundo numero: ")

console.log(menor(n1,n2))