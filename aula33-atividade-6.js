function concatArr(a1, a2) {

    a1.push(...a2)
}

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]

concatArr(a1,a2)

console.log(a1)