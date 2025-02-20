/************************************************************************************************************************************
                                            Mais listas de Exercícios
 ************************************************************************************************************************************/
// 1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade.
// 2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível.
// Considere que o veículo faz em média 12 Kms/L.

function idade(anoAtual, anoNascimento) {
    return idade = anoAtual - anoNascimento
}
console.log("A pessoa tem", idade(2025,2008), "anos")
console.log("---------------------------------------")
const combustivel = (litros) => {
    return litros * 12;
}
var car1 = 20
var car2 = 8
var car3 = 2

console.log("Carrinho 1:",car1,"->",combustivel(car1), "kms.")
console.log("Carrinho 2:",car2,"->",combustivel(car2), "kms.")
console.log("Carrinho 3:",car3,"->",combustivel(car3), "kms.")