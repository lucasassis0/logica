var user = require("readline-sync")
var calcIdade = require("age-calculator")

var data = user.question("Digite a data de nascimento separadas por '-' (AAAA-MM-DD): ")

var idade = new calcIdade.AgeFromDateString(data).age
console.log("Idade: "+idade)
