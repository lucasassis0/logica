var user = require("readline-sync")

var n = user.question("Digite um numero para ser escrito por extenso: ")

var a = ["um","dois","tres","quatro","cinco","seis","sete","oito","nove"]
var b = ["onze","doze","treze","catorze","quinze","dezesseis","dezessete","dezoito","dezenove"]
var c = ["vinte","trinta","quarenta","cinquenta","sessenta","setenta","oitenta","noventa"]
var d = ["cento","duzentos","trezentos","quatrocentos","quinhentos","seiscentos","setecentos","oitocentos","novecentos"]

if(n.length == 1){
    for (let x = 1; x <= a.length; x++) {
        if(n == x){
            console.log(a[x-1])
        }
    }
}else if (n.length == 2) {
    if(n.charAt(0)==1){
        for (let x = 0; x <= b.length; x++) {
            if(n == (x+11)){
                console.log(b[x])
            }        
        }
    }else{
        for (let x = 0; x < c.length; x++) {
            for (let y = 0; y < a.length; y++) {
                if(n.charAt(0)==(x+2) && n.charAt(1)==(y+1)){
                    console.log(c[x] + " e " + a[y])
                    break
                }                
            }
        }
    }
    if (n.charAt(0) == 1 && n.charAt(1) == 0) {
        console.log("dez")
        
    }
    for (let z = 0; z < c.length; z++) {
        if (n.charAt(0)==(z+1) && n.charAt(1)==(0)) {
            console.log(c[z-1])
        }
    }
}else if (n.length == 3) {
    for (let x = 0; x <= d.length; x++) {
        if(n.charAt(0)==x && n.charAt(1)==1 ){
            for (let y = 0; y <= b.length; y++) {
                if (n.substring(1,2) == (y+11)) {
                    console.log(d[x] + " e " + b[y])
                }
            }
        }
    }
    if(n == 100){
        console.log("cem")
    }
    for (let x = 0; x <= d.length; x++) {
        if(n.charAt(0) == x && n.charAt(1)==0){
            for (let y = 0; y <= a.length; y++) {
                if(n.charAt(2)==y){
                    console.log(d[x-1] + " e " + a[y-1])
                    break
                }
            }
        }else if(n.charAt(0)==x){
            for (let y = 0; y < c[8]; y++) {
                for (let z = 1; z <= a.length; z++) {
                    if(n.charAt(1)==(y+2) && n.charAt(2)==z){
                        console.log(d[x] + " e " + c[y] + " e " + a[z])
                        break
                    }
                }
            }
        }
    }
}/*else if (n.length == 4) {
    mil
}else if (n.length == 5) {
    
}else if (n.length == 6) {
    
}else if (n.length == 7) {
    milhao
}else if (n.length == 8) {
    
}else if (n.length == 9) {
    
}else if (n == 1000000000) {
    bilhao
}else{
    console.log("Digite apenas numeros entre 1 e 1 bilhao.")
}*/