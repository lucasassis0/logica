var user = require("readline-sync")
var media = require("./calcula-media.js")

console.log(media)
var arr = []
var num = 0

for (let x = 0; x < 3; x++) {
    num = user.questionFloat("Insira um numero: ")
    arr.push(num)
}

console.log(media.calculaMedia(arr))