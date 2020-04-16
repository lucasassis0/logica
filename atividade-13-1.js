var fs = require("fs")
var user = require("readline-sync")
var filter = require("lodash.filter")

var json = fs.readFileSync("D:/NeuraStream/Aula01/logica/logica/cars.json")
var cars = JSON.parse(json)

var hp = user.questionInt("Valor em HP: ")

var bigger = []

bigger.push(filter(cars, (o) => {
    if(o.Horsepower > hp){
        return o.Horsepower
    }
}))

console.log(bigger)