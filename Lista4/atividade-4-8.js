var user = require("readline-sync")

console.log("Bem vindos ao JokenPo!!")
console.log("Escolham entre as jogadas: 'pedra', 'papel' ou 'tesoura'.")
console.log("A disputa e uma melhor de 3... Boa sorte!!\n")

var j1 = user.question("Digite o nome do Jogador 1: ")
var j2 = user.question("Digite o nome do Jogador 2: ")

var jogada1 = ""
var jogada2 = ""
var win1 = 0
var win2 = 0
var erro = 0
var aux = 0

while (win1 < 3 || win2 < 3) {
    if(erro > aux){
        aux++
    }else{
        jogada1 = user.question(j1+" Joga: ", {hideEchoBack: true})
        jogada2 = user.question(j2+" Joga: ", {hideEchoBack: true})
    }

    if ((jogada1 == "pedra" || jogada1 == "papel" || jogada1 == "tesoura") && (jogada2 == "pedra" || jogada2 == "papel" || jogada2 == "tesoura")) {
        if (jogada1 == "pedra" && jogada2 == "pedra"){
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": EMPATE. Joguem novamente.")
        }else if (jogada1 == "pedra" && jogada2 == "papel") {
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": VITORIA DE "+j2)
            win2++
        }else if (jogada1 == "pedra" && jogada2 == "tesoura"){
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": VITORIA DE "+j1)
            win1++
        }else if (jogada1 == "papel" && jogada2 == "pedra") {
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": VITORIA DE "+j1)
            win1++
        }else if (jogada1 == "papel" && jogada2 == "papel") {
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": EMPATE. Joguem novamente.")
        }else if (jogada1 == "papel" && jogada2 == "tesoura") {
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": VITORIA DE "+j2)
            win2++
        }else if (jogada1 == "tesoura" && jogada2 == "pedra") {
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": VITORIA DE "+j2)
            win2++
        }else if (jogada1 == "tesoura" && jogada2 == "papel") {
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": VITORIA DE "+j1)
            win1++
        }else if (jogada1 == "tesoura" && jogada2 == "tesoura") {
            console.log(j1+" jogou "+jogada1+" x "+j2+" jogou "+jogada2+": EMPATE. Joguem novamente.")
        }
    }else{
        console.log("Jogada invalida. Tente novamente...")
        jogada1 = user.question(j1+" Joga: ", {hideEchoBack: true})
        jogada2 = user.question(j2+" Joga: ", {hideEchoBack: true})
        erro++
    }

    if (win1 == 3) {
        console.log(j1+" Voce entrou pra historia. Parabens!!")
        console.log(j2+" Nao foi dessa vez, treine mais para a proxima!")
        break
    }else if (win2 == 3) {
        console.log(j2+" Voce entrou pra historia. Parabens!!")
        console.log(j1+" Nao foi dessa vez, treine mais para a proxima!")
        break
    }
}
