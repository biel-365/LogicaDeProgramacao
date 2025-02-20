/*************************************************************************************************************************************
                                            Exercícios Vetor Matriz

*************************************************************************************************************************************/

// Crie um vetor que receberá dados de uma pessoa
var dados = [];
console.log("Insira seu nome:");
dados.push("Gabriel,");

console.table(dados);

console.log("Informe seu cpf:");
dados.push("123.456.789-09");

console.table(dados);

// Dê um bom dia ao usuário e mostre seus dados à ele
console.log("Bom dia", dados[0], "seu CPF é:", dados[1]);

// 1. Crie e mostre um vetor com 5 elementos numéricos.
// 2. Imprima na tela o 3° elemento do vetor
// 3. Faça uma cópia do vetor original
// 4. Altere o conteúdo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original
// 5. Crie uma matriz 3x3
// 6. Imprima os valores da diagonal

var numeros = [1, 2, 3, 4, 5];
console.table(numeros);
console.log("3° elemento:", numeros[2]);
var copia = numeros.slice();

copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);

var matriz = [
  [3, 6, 5],
  [8, 5, 9],
  [4, 2, 1],
];

console.table(matriz);
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
