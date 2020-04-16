var user = require("readline-sync")

var num = null
var x = 15
var resp = null
while (x>0) {
    num = user.questionFloat("Insira um valor: ")
    resp = resp + num
    x--
}
console.log("A media: "+(resp/15))