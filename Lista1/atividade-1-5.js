var user = require("readline-sync");

var n1 = user.question("Digite o primeiro numero: ")
var n2 = user.question("Digite o segundo numero: ")
var n3 = user.question("Digite o terceiro numero: ")

var a, b, c

if(n1 < n2 && n2 < n3){
    a = n1
    b = n2
    c = n3
    console.log(a +", "+ b +", "+ c)
}else if(n1 < n2 && n3 < n2){
    a = n1
    b = n3
    c = n2
    console.log(a +", "+ b +", "+ c)
}else if(n2 < n1 && n1 < n3){
    a = n2
    b = n1
    c = n3
    console.log(a +", "+ b +", "+ c)
}else if(n2 < n1 && n1 < n3){
    a = n2
    b = n3
    c = n1
    console.log(a +", "+ b +", "+ c)
}else if(n3 < n2 && n2 < n1){
    a = n3
    b = n2
    c = n1
    console.log(a +", "+ b +", "+ c)
}else{
    a = n3
    b = n1
    c = n2
    console.log(a +", "+ b +", "+ c)
}