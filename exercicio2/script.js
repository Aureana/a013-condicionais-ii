let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase()

switch(nacionalidade){
    case"brasileira":
    alert("A pessoa é do Brasil!")
    break;
    case"argentina":
    alert("A pessoa é do Argentina!")
    break;
    case"uruguaia":
    alert("A pessoa é do Uruguai!")
    break;
    case"chilena":
    alert("A pessoa é do Chile!")
    break;
    case"colombiana":
    alert("A pessoa é da Colombia!")
    break;
    default:
        alert("nacionalidade não encontrada")
}