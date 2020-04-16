
function somaVarios(n1, n2, ...n) {
    var soma = n1 + n2

    for (let i = 0; i < n.length; i++) {
        soma = soma + n[i]
    }

    console.log("Soma: ", soma);
}

somaVarios(1, 2, 3, 4, 5)