var user = require("readline-sync")

var numLados = user.question("Escreva o numero de lados: ")

if(numLados >= 3 && numLados <= 5){
    if(numLados == 3){
        var tamLados = user.question("Digite o tamanho dos lados: ")
        var alt = Math.sqrt((tamLados*tamLados)-((tamLados/2)*(tamLados/2)))
        console.log("É um triangulo de área "+ ((tamLados*alt)/2).toFixed(2) +" cm²")
    }else if(numLados == 4){
        var tamLados = user.question("Digite o tamanho dos lados: ")
        console.log("É um quadrado de área "+ (tamLados*tamLados).toFixed(2) +" cm²")
    }else{
    console.log("É um Pentagono")
    }
}else{
    console.log("Número inválido. Favor digitar somente número de lados que sejam de 3 a 5")
}