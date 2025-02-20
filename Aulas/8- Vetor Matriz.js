// // Criando variáveis do tipo array (Vetor)
// var numeros = [1, 2, 3, 4, 5];
// console.log(numeros) // Mostrando os dados do array
// console.table(numeros); // Mostrando os dados em forma de tabela
// console.log(numeros[1]); //Mostrando o item de indice 1
// console.log("O vetor tem:",numeros.length, "elementos");

var dinos = [
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Titanossauro",
];
console.log(dinos); // Mostrando os dados
console.table(dinos); // Mostrando os dados em forma de tabela
console.log("O vetor dinos tem:", dinos.length, "elementos.");

// Adicionando elementos a um vetor que já existe
dinos.push("Brontossauro"); // Adiciona algo no final do vetor
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");
dinos.unshift("Tricerátops"); // Adiciona algo no início do vetor
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

// Obtendo um elemento com base em seu indice (Posição)
console.log("1ª posição", dinos[0]);
console.log("3ª posição", dinos[2]);
console.log("20ª posição", dinos[19]); // Quando não temos o item, apresenta um erro (Undefined);

//Alterando elementros com base em seu índice (Posição)
dinos[3] = "Velociraptor";
console.table(dinos);

// Removendo elementos do vetor
var dinos = ["Tricerátops", "Tironossauro Rex", "Estegossauro", "Anquilossauro", "Brotossauro"]
console.table(dinos);

dinos.pop(); // Remove o último elemento do array (Vetor)
console.table(dinos);

dinos.shift(); // Removendo o primeiro elemento do array (Vetor)
console.table(dinos);

dinos.splice(1,1); //Remove o elemento de índice 1 (a partir da posição 1, exclui 1 elemento)
console.table(dinos);

// Procurando o índice (Posição) de elementos

var dinos = ["Tricerátops","Tiranossauro Rex", "Estegossauro", "Anquilossauro", "Brontossauro", "Ictiossauro", "Pterodáctilo", "Espinossauro"];
console.table(dinos);
var elementroProcurado = "Pterodáctilo"
var posicao = dinos.indexOf(elementroProcurado)
console.log(elementroProcurado,"Está no indície:",posicao)

elementroProcurado = "Estegossauro";
posicao = dinos.indexOf(elementroProcurado)
console.log(elementroProcurado, "Está no indice:", posicao)

elementroProcurado = "BielGaster_365";
posicao = dinos.indexOf(elementroProcurado);
console.log(elementroProcurado, "está no indice:", posicao);
console.log("indexOf = -1 significa que o elemento não existe no vetor!")

// Excluindo um elemento com base no seu nome

var elementoExcluir = "Pterodáctilo";
var posicao = dinos.indexOf(elementoExcluir);
dinos.splice(posicao, 1);
console.table(dinos);

// Criando uma cópia de um array (Vetor)
var copia = dinos.slice();
console.log("Copiando um vetor");
console.table(copia);

// Criando um array numérico
var numeros =[4, 3, 1, 9, 7, 2];
console.table(numeros);

// Mostrando os elementos das posições impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

// Verificando se o array contém um item
console.log("Contém 9:", numeros.includes(9))
var contem0 = numeros.includes(0);
console.log("Contem 0:", contem0);

// Ordenando os elementos do Vetor
numeros.sort();
console.table(numeros);

// Invertendo a ordem ou posição dos itens
numeros.reverse();
console.table(numeros);

// Alterando o valor de um elemento com base na sua posição
numeros[2] = 5
console.table(numeros)

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

// Criando arrays híbridos
var hibrido = [10, "Gabriel", 3.45, "Albert", 7];
console.table(hibrido)

hibrido[1] = 9;
console.table(hibrido);
hibrido[0] = "Tibúrcio";
console.table(hibrido)

// Criando uma matriz
var matriz = [
   [9, 0, 1],
   [7, 1, 2],
   [1, 3, 9],
];
console.table(matriz);

// Obtendo elemento com base em seus índices
console.log("Matriz[1,2] =", matriz [1] [2]);
console.log("Matriz[2,0] =", matriz [2] [0]);

// Alterando valores de elementos com base em seus índices
matriz[1] [2] = 20;
matriz[2] [0] = 30;
console.table(matriz);