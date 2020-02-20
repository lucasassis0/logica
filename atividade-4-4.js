var soma = null
var n = 0
while (n<1000) {
    if (n%3==0 && n%5==0) {
        soma = soma + n
        console.log("Parcial: "+soma)
    }
    n++
}
console.log("A soma dos numeros multiplos de 3 e 5: "+soma)