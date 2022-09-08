//código a ser reescrito
/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}
**/
const nome = prompt("Qual é o seu nome?").toLowerCase()
nome ==="josé" || nome === "jose"? console.log("oi, Zé!") : console.log("olá," +nome)

/*
if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
*/
const idade = prompt("Qual é a sua idade?")
idade >= 18? console.log("Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista :( ")