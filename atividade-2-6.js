var user = require("readline-sync")

var valor = user.questionFloat("Valor do produto: ")

console.log("1- A vista - Dinheiro ou Cheque (10% de desconto)")
console.log("2- A vista - Crédito (15% de desconto)")
console.log("3- 2x sem juros")
console.log("4- 2x com juros (10%)")
var f = user.questionInt("Escolha a forma de pagamento:")

if(f >= 1 && f <= 4){
    if(f == 1){
        valor = valor - valor*0.1
        console.log("O valor a ser pago é de R$"+valor.toFixed(2))
    }else if(f == 2){
        valor = valor - valor*0.15
        console.log("O valor a ser pago é de R$"+valor.toFixed(2))
    }else if(f == 3){
        console.log("O valor a ser pago é de R$"+valor.toFixed(2))
    }else{
        valor = valor + valor*0.1
        console.log("O valor a ser pago é de R$"+valor.toFixed(2))
        console.log("Em duas parcelas de R$"+(valor/2).toFixed(2))
    }
    console.log("Obrigado e volte sempre!")
}else{
    console.log("Opcao invalida. digite um numero de 1 a 4")
}
