var user = require("readline-sync")

var n = 5
var aluno = [n]
var notaA = [n]
var notaB = [n]

for (let x = 0; x < n; x++) {
    aluno[x] = user.question("Entre com o nome do aluno: ")
    notaA[x] = user.questionFloat("Entre com o grau A: ")
    notaB[x] = user.questionFloat("Entre com o grau B: ")
    console.log("")
}

for (let x = 0; x < n; x++) {
    console.log("")
    console.log("Nome: "+ aluno[x])
    console.log("Grau A: "+ notaA[x])
    console.log("Grau B: "+ notaB[x])
    console.log("Media: "+((notaA[x]*0.3) +(notaB[x]*0.7)))
    
}