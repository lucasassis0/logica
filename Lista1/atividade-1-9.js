var user = require("readline-sync")

var a1 = user.question("Digite o valor do angulo 1 do triangulo: ")
var a2 = user.question("Digite o valor do angulo 2 do triangulo: ")
var a3 = user.question("Digite o valor do angulo 3 do triangulo: ")
var soma = a1 + a2 + a3

if (soma != 180){
    if(a1 == 90 || a2 == 90 || a3 == 90){
        console.log("Esse é um triangulo retangulo")
    }else if(a1 > 90 || a2 > 90 || a3 > 90){
        console.log("Esse é um triangulo obtusangulo")
    }else{
        console.log("Esse é um triangulo acutangulo")
    }
}else{
    console.log("Valores incorretos. A soma dos angulos deve ser igual a 180.")
}