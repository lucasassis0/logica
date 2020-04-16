var user = require("readline-sync")

var n1 = user.question("Digite o valor do lado 1 do triangulo: ")
var n2 = user.question("Digite o valor do lado 2 do triangulo: ")
var n3 = user.question("Digite o valor do lado 3 do triangulo: ")

if(n1 == n2 && n2 == n3){
    console.log("O triângulo é EQUILÁTERO")
}else if(n1 != n2 && n2 != n3 && n3 != n1){
    console.log("O triângulo é ESCALENO")
}else{
    console.log("O triângulo é ISOCELES")
}