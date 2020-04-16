var user = require("readline-sync")

var base = user.questionInt("Insira a base da potencia: ")
var pot = user.questionInt("Insira a potencia: ")
var flag = 0
var resp = 1

while (flag < pot) {
    resp = resp * base
    flag++
    if (flag == pot) {
        console.log("Resposta: "+ resp)
    }
}
