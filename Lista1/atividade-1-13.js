var user = require("readline-sync")

var num = user.questionInt("Digite um numero: ")
var total

if(num >= 0){
    total = num * 2
    console.log("o duplo de "+num+" é "+total)
}else{
    total = num * 3
    console.log("o triplo de "+num+" é "+total)
}