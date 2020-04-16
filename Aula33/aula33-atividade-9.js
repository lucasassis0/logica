function aumentaArr(elemento, vetor){
    let arr = []
    if (vetor != null) {
        arr.push(...vetor, elemento)
        return arr   
    }else{
        arr.push(elemento)
        return arr
    }
    
}

console.log(aumentaArr(5, [1, 2, 3, 4]))