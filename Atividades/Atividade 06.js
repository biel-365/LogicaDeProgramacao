/*************************************************************************************************************************************
                                                Lista de Exercícios 6

*************************************************************************************************************************************/
/*
Criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil.

Regras para votação no Brasil:
Menores de 16 anos: Não podem votar.
Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo.
Entre 18 e 70: O voto é obrigatório.
*/

//  Primeiro eu crio um sistema que mostra o nome e idade da pessoa
//  Referente ás informações, com o console.log eu escrevo algo falando pra pessoa se ela pode ou não voltar
//  Por fim eu executo algo falando se as pessoas podem ou não votar

const podeVotar = (idade) => {
  if (idade < 16) {
    return "você não pode votar";
  } else if (idade >= 18 && idade < 70) {
    return "você pode votar";
  } else {
    return "seu voto facultativo";
  }
};
var nome = ["Biel", "Null", "Nestw6", "DogeForms", "Minty"];
console.log("Olá", nome[0], "Você tem 16 anos e", podeVotar(16));
console.log("Olá", nome[1], "Você tem 22 anos e", podeVotar(22));
console.log("Olá", nome[2], "Você tem 70 anos e", podeVotar(70));
console.log("Olá", nome[3], "Você tem 12 anos e", podeVotar(12));
console.log("Olá", nome[4], "Você tem 67 anos e", podeVotar(67));