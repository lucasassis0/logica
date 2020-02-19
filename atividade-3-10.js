var user = require("readline-sync")

var num = user.questionInt("Informe um numero: ")
var x = num
while (x>0) {
    if (num%x == 0) {
        console.log(x)
    }
    x--
}