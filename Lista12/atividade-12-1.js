var user = require("readline-sync")

class carro{
    constructor(marca, modelo, cor){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
    }
}

console.log("Insira informacoes do primeiro carro.");

var c1 = new carro

c1.marca = user.question("Marca: ")
c1.modelo = user.question("Modelo: ")
c1.cor = user.question("Cor: ")

console.log("")

console.log("Insira informacoes do segundo carro.");

var c2 = new carro

c2.marca = user.question("Marca: ")
c2.modelo = user.question("Modelo: ")
c2.cor = user.question("Cor: ")

console.log("")

if (c1.marca === c2.marca && c1.modelo === c2.modelo) {
    console.log("Os carros são iguais.");
}else{
    console.log("Os carros não são iguais.");
}