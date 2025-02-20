/***************************************************** 
                Exercícios para fixação 
*****************************************************/ 
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta;
*/ 

let nome = "Gabriel";
let banco = "Bradesco";
let agencia = 5866;
let conta = "15874-9";
let saldo = 500;
console.log("*****************",banco,"********************");
console.log("Cliente:", nome);
console.log("Agência:",agencia, "| Conta:", conta);
console.log("Seu saldo é de R$", saldo);

console.log("    +Depósito: R$75,00");
saldo=saldo+75;
console.log("    +Depósito: R$100,00");
saldo=saldo+100;
console.log("    -Saque: R$50,00");
saldo=saldo-50;
console.log("    +Depósito: R$80,00");
saldo=saldo+80;
console.log("    -Saque: R$200,00");
saldo=saldo-200;


console.log("*****************",banco,"********************");
console.log("Cliente:", nome);
console.log("Agência:",agencia, "| Conta:", conta);
console.log("Seu saldo é de R$", saldo);

//Também pode escrever "saldo+=" ou "saldo-=" pra ficar mais fácil ao invés de "saldo = saldo+" ou "saldo = saldo-"