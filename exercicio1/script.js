const numero = Number(prompt("Digite um numero"))
/*
if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log("esse numero é divisivel por 2 ou 3")
    } else {
        console.log("esse numero é divisivel por 2 ou 3")
    } 
} else {
    if(numero % 3 === 0){
       console.log("esse numero é divisivel por 2 ou 3") 
    }else {
     console.log("esse numero não é divisivel por 2 ou 3")
    }
    
}
*/

/*
if (numero % 2 === 0 && numero % 3 === 0)  {
    console.log("esse numero é divisivel por 2 e 3")
} else {
    console.log("esse numero não é divisivel por 2 e 3")
}
*/

if (numero % 2 === 0 || numero % 3 === 0) {
    console.log("esse numero é divisivel por 2 ou 3")
} else {
    console.log("esse numero não é divisivel por 2 ou 3")
}


