/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para imserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9
Saída: 1, 3, 5, 8, 9
------------------------------------------------------------------------


*/
console.log("---------Ativadade 1-----------");
const parOuImpar = (numero) => {
  if (numero % 2 == 0) {
    return console.log(numero, "é par");
  } else {
    return console.log(numero, "é impar");
  }
};
parOuImpar(150);
parOuImpar(149);
parOuImpar(148);

console.log("-------Ativadade 2----------");
var1 = 3;
var2 = 3;
var3 = 3;
var4 = 3;
var5 = 3;
var6 = 3;
var7 = 3;
var8 = 3;
var9 = 3;
var10 = 3;
console.log("3x1 =", var1 * 1);
console.log("3x2 =", var1 * 2);
console.log("3x3 =", var3 * 3);
console.log("3x4 =", var4 * 4);
console.log("3x5 =", var5 * 5);
console.log("3x6 =", var6 * 6);
console.log("3x7 =", var7 * 7);
console.log("3x8 =", var8 * 8);
console.log("3x9 =", var9 * 9);
console.log("3x10 =", var10 * 10);

console.log("-------Atividade 3-------");
console.log("Fatorial de 6!=", 6 * 5 * 4 * 3 * 2 * 1);

console.log("-------Atividade 4-------");

let numeros = [20, 40, 60, 100];
let soma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
console.log("A soma de tudo é", soma);

console.log("-------Atividade 5-------");
var vetor = [8, 3, 5, 1, 9];
console.log(vetor);
console.log(vetor.sort());
