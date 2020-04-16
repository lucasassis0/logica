var user = require("readline-sync")

function potencia(b,p) {
    var result = 1
    while (p>0) {
        result = result * b
        p--
    }
    return result
}

var base = user.questionInt("Digite a base da potencia: ")
var pot = user.questionInt("Digite a potencia: ")

console.log(base+" elevado a "+pot+" é igual a : "+potencia(base,pot))