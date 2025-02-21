// /*************************************************************************************************************************************/
//                                             Lista de Exercícios 07
// **************************************************************************************************************************************/
/*

// Dada a matriz abaixo, faça um programa em JavaScript que exiba ao usuário os elementos da sua diagonal principal.

| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
*/
var matriz = [
    [3,5,8],
    [1,9,2],
    [7,1,4],
]
for(let linha = 0; linha < matriz.length; linha++){
for(let coluna = 0; coluna < matriz[0].length;coluna++){
    if (linha == coluna) {
        console.log(matriz[linha][coluna])
        }
    }
}

/*
Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor x e exiba ao usuário a matriz antes e após a multiplicação

|  3  5  8  |
|  1  9  2  |
|  7  1  4  |
*/
var matriz = [
    [3, 5, 8],
    [1, 9, 2],
    [7, 1, 4],
]
console.log("Numéros da matriz antes da multiplicação:");
console.table(matriz);
var mult = 5
for (let i = 0; i < matriz.length; i++) {
for (let c = 0; i < matriz[0].length; i++) {
    matriz[i][c] *= mult;
    }
}
console.log("Números da Matriz depois da multiplicação:");
console.table(matriz);

// Faça um loop FOR onde apresente os números ímpares de 0 a 100 sem resto de divisão ou conta;
console.log("------Ímpar-------")
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
  }
console.log("-------------Par----------------");
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
