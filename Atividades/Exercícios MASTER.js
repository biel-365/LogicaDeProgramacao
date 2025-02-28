/***********************************************************************************************************************************
                                            Lista de Exercícios MASTER
 
 ***********************************************************************************************************************************/
/*
 Supondo que a população de um país A seja de a habitantes com uma taxa anual de crescimento de 3% e que a população de um país B seja
 de b habitantes, com uma taxa anual de crescimento de 1,5%, faça um algoritimo que calcule e escreva o número de anos necessários para
 que a população do país A ultrapasse ou iguale a população do país B, mantidas essas taxas de crescimento.
*/
var a = 800000;
var b = 950000;
var anos = 0;

while (a < b){
    anos++
    a += a * 0.03
    b += b * 0.015
    console.log(`Ano: ${anos} | População A: ${Math.round(a)} | População B: ${Math.round(b)}`);
}
console.log(`A quantidade de anos para a população A superar ou igualar a B é de ${anos}`)