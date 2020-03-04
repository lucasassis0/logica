var user = require("readline-sync")

var header = user.question("Insira os campos desejados separados por ';': ")
var data = user.question("Insira os dados dos campos separados por ';': ")

var hd = header.split(";")
var dt = data.split(";")

if (hd.length == dt.length) {
    for (let x = 0; x < hd.length; x++) {
        console.log(hd[x]+": "+dt[x])
    }
}else{
    console.log("O numero de campos e de dados não estão corretos.")
}