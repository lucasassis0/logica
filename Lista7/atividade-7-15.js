var user = require("readline-sync") //INCOMPLETO

var vog = ['a', 'à', 'á', 'A', 'e', 'é','E','i','í','I','o','ó','O','u','ú','U']

var palavra = user.question("Digite uma palavra: ")
var arrP = palavra.split()

for (let x = 0; x < arrP.length; x++) {
    if (arrP[x == 'a']) {
        arrP.slice(x,1)
        x--
    }else if (arrP[x == 'e']) {
        arrP.slice(x,1)
        x--
    }else if (arrP[x == 'i']) {
        arrP.slice(x,1)
        x--
    }else if (arrP[x == 'o']) {
        arrP.slice(x,1)
        x--
    }else if (arrP[x == 'u']) {
        arrP.slice(x,1)
        x--
    }
}

console.log(arrP)