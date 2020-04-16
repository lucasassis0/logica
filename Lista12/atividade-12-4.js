var user = require("readline-sync")
var media = require("./calcula-media.js")

class aluno{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

console.log("Insira informacoes do primeiro aluno.");

var a1 = new aluno
a1.nome = user.question("Nome: ")
a1.idade = user.questionInt("Idade: ")

var arrAluno = []
arrAluno.push(a1)

console.log("Insira informacoes do segundo aluno.");

var a2 = new aluno
a2.nome = user.question("Nome: ")
a2.idade = user.questionInt("Idade: ")

arrAluno.push(a2)

console.log("Insira informacoes do terceiro aluno.");

var a3 = new aluno
a3.nome = user.question("Nome: ")
a3.idade = user.questionInt("Idade: ")

arrAluno.push(a3)

console.log(media.calculaMediaIdadeAlunos(arrAluno))
