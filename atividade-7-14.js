var user = require("readline-sync")

var data = user.question("Data (dd/mm/aaaa): ")

var dt = data.split('/')

var dia = dt[0]
var mes = dt[1]
var ano = dt[2]

console.log("Dia: "+dia)
console.log("Mes: "+mes)
console.log("Ano: "+ano)
