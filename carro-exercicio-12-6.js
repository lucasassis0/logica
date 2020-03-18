var user = require("readline-sync")

class carro{
    constructor(nome, cor){
        this.nome = nome
        this.cor = cor
        this.velocidade = 0
        menu()
        acelerar()
    }
}

function acelerar() {
    if (this.velocidade <= 50) {
        this.velocidade += 10
        console.log("Velocidade: "+this.velocidade)
    }else if (this.velocidade < 60 && this.velocidade >50) {
        this.velocidade = 60
        console.log("Velocidade: "+this.velocidade)
    }else if (this.velocidade === 60) {
        console.log("LIMITE DE VELOCIDADE ATINGIDO!")
        console.log("Velocidade: "+this.velocidade)
    }
}

function freiar() {
    if (this.velocidade >= 5) {
        this.velocidade -= 5
        console.log("Velocidade: "+this.velocidade)
    }else{
        console.log("O carro esta parado!")
    }
}

function desligar() {
    if (this.velocidade === 0) {
        return true
    }else{
        return false
    }
}

function menu() {
    var x = 1

    while (x > 0 && x < 5) {
        console.log("1. Acelerar")
        console.log("2. Freiar")
        console.log("3. Desligar")
        console.log("4. Finalizar")
        x = user.question("SELECIONE: ")

        if (x == 1){
            acelerar()
        }else if(x == 2){
            freiar()
        }else if (x == 3){
            desligar()
        }else if(x == 4){
            break
        }else{
            console.log("Opcao invalida, favor escolher somente entre as opcoes de 1 a 3.")
        }
    }
}

exports.carro = carro