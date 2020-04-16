var user = require("readline-sync")

var num = []

for (let x = 0; x < 10; x++) {
    num[x] = user.questionInt("Digite um numero: ")
}

var tam = num.length
var aux = 0
for (tam; tam > 0; tam--) {
    for (let x = 0; x < num.length; x++) {
        if (num[x] > num[x+1]) {
            aux = num[x]
            num[x] = num[x+1]
            num[x+1] = aux
        }
    }
}

console.log(num.join(", "))