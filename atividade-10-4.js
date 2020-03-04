var fs = require("fs")
var user = require("readline-sync")

var carro = new Object()
carro.cor = []
carro.modelo = []
carro.marca = []

var colSerial = fs.readFileSync('data/Colecao.json')
var carro = JSON.parse(colSerial)

while (true) {
    console.log("1 - Adicionar um carro a coleção")
    console.log("2 - Exibir coleção")
    console.log("3 - Sair")
    var x = user.question("Escolha: ")

    if (x == 1) {
        var resp1 = user.question("\nDigite a cor: ")
        carro.cor.push(resp1)
        var resp2 = user.question("Digite o modelo: ")
        carro.modelo.push(resp2)
        var resp3 = user.question("Digite a marca: ")
        carro.marca.push(resp3)

        var carSerial = JSON.stringify(carro)
        var filepath = 'data/Colecao.json'
        fs.writeFileSync(filepath,carSerial)
    }else if (x == 2) {
        var fim = exibir()
    }else if (x == 3) {
        break
    }else{
        console.log("Opção invalida. Escolha apenas entre 1, 2 ou 3.")
    }
}

function exibir() {
    for (let x = 0; x < carro.marca.length; x++) {
        console.log("\nMarca: "+carro.marca[x]+"\n"+"Modelo: "+carro.modelo[x]+"\n"+"Cor: "+carro.cor[x]+"\n")
    }
    return 0
}