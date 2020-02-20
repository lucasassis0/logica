var n = 1

while (n<=50) {
    var p=0
    if (n==1) {
        console.log("1. IMPAR PRIMO")
    }else if(n==2){
        console.log("2. PAR PRIMO")
    }else if(n%2==1){
        for (let x = 2; x < n; x++) {
            if (n % x == 0){
                p++
            }
        }
        if(p>0){
            console.log(n+". IMPAR")
        }else{
            console.log(n+". IMPAR PRIMO")
        }
    }else{
        console.log(n+". PAR")
    }
    n++
}