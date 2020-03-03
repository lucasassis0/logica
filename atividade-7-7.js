var user = require("readline-sync")

var vog = ['a', 'à', 'á', 'A', 'e', 'é','E','i','í','I','o','ó','O','u','ú','U']
var con = ['b','B','c','C','d','D','f','F','g','G','h','H','j','J','k','K','l','L','m','M','n','N','p','P','q','Q','r','R','s','S','t','T','v','V','w','W','x','X','y','Y','z','Z']

var word = user.question("Digite uma palavra: ")
var v = 0
var c = 0

for (let x = 0; x < word.length; x++) {
    for (let y = 0; y < vog.length; y++) {
        if (word.charAt(x) == vog[y]) {
            v++
        }
    }
}
for (let x = 0; x < word.length; x++) {
    for (let z = 0; z < con.length; z++) {
        if (word.charAt(x)==con[z]) {
            c++
        }
    }
}
console.log("Palavra: "+word)
console.log("Vogais: "+v)
console.log("Consoantes: "+c)