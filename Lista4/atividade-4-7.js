var user = require("readline-sync")

var esc = ""
var saldo = 0
var valor = 0

while (esc != "d") {
    console.log("a - Consultar saldo")
    console.log("b - Saque")
    console.log("c - Deposito")
    console.log("d - Sair")
    esc = user.question("Escolha uma opcao: ")

    if(esc == "a") {
        console.log("Saldo atual: R$"+saldo.toFixed(2)+"\n")
    }else if (esc == "b") {
        valor = user.questionFloat("Digite o valor que deseja sacar: ")
        if((saldo - valor) >= 0){
            saldo = saldo - valor
            console.log("Saque efetuado com sucesso!")
            console.log("Saldo atual: R$"+saldo.toFixed(2)+"\n")
        }else{
            console.log("Saldo insuficiente.\n")
        }
    }else if (esc == "c") {
        valor = user.questionFloat("Digite o valor que deseja depositar: ")
        if (valor > 0) {
            saldo = saldo + valor
            console.log("Deposito efetuado com sucesso!")
            console.log("Saldo atual: R$"+saldo.toFixed(2)+"\n")
        }else{
            console.log("Favor digitar um valor maior que zero.\n")
        }
    }else if (esc == "d") {
        break
    }else{
        console.log("Opcao incorreta.\n")
    }
}