var user = require("readline-sync")

console.log("Digite 1 para converter de Celsius para Farenheit")
var x = user.questionInt("ou 2 para converter de Farenheit para Celsius: ")
var c
var f

if(x == 1 || x == 2){
    if(x == 1){
        c = user.questionFloat("Digite o valor em celsius: ")
        f = (c*9/5) + 32
        console.log("O valor em Farenheit é de "+f.toFixed(0)+" F")
    }else{
        f = user.questionFloat("Digite o valor em Farenheit: ")
        c = (f-32) * 5/9
        console.log("O valor em Celsius é "+c.toFixed(0)+" ºC")
    }
}else{
    console.log("Valor incorreto. Digite apenas os numeros 1 ou 2.")
}