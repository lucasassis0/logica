var user = require("readline-sync")

var num = user.questionInt("Tabuada do numero: ")
var x = 1

while (x <= 10) {
    if(num > 0){
        console.log(num+" x "+x+" = "+(num*x))
        x++
    }else{
        console.log("Favor informar um numero maior que zero.")
        num = user.questionInt("Tabuada do numero: ")
    }
}