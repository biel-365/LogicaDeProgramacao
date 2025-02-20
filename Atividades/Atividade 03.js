/************************************************************************************************************************
                                            Lista de exercícios
**************************************************************************************************************************/

// 1. Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango.
// 2. Adicione Tangerina no final.
// 3. Adicione Goiaba no início.
// 4. Exiba o conteúdo do índice 5.
// 5. Exclua o elemento uva.
// 6. Crie uma cópia do array apenas com os elementos com os índices 2, 3 e 4.

console.log("----------------------------------");
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
frutas.push("Tangerina");
frutas.unshift("Goiaba");

console.table(frutas);
console.log("índice 5:", frutas[5]);
var posicao = frutas.indexOf("Uva");
frutas.splice(posicao, 1);
console.table(frutas);

var copia = frutas.slice(2,5);
console.table(copia);
