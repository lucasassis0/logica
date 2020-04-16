var user = require("readline-sync")

var n = user.questionInt("Digite um numero: ")
var a = ""

for (let x = 0; x < n; x++) {
    a = a + "*"
    console.log(a)
}