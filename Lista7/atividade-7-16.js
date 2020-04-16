var user = require("readline-sync")

var p = user.question("Digite a palavra: ")
var n = p.startsWith("google")
if (n) {
    console.log("Palavra valida")
}else{
    console.log("Palavra invalida")
}