var user = require("readline-sync")

var num = null
var imp = 1
var par = 0
var x = 0

while (x < 5) {
    num = user.questionInt("Insira um numero inteiro: ")
    if (num%2==0) {
        par = par + num
    }else if(num%2==1){
        imp = imp * num
    }
    x++
}

console.log("Produtos dos impares: " + imp)
console.log("Soma dos pares: " + par)