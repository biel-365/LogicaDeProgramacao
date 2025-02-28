/*********************************************************************************************************************************
                                                Lista de 25 exercícios
 ********************************************************************************************************************************/
// 1.

var valor1 = 10;
var valor2 = 20;
var valor3 = 30;
console.log(valor1 + valor2 + valor3);
console.log(valor1 - valor2 - valor3);
console.log(valor3 * valor2 * valor3);
console.log(valor3 / valor2 / valor3);
console.log("---------------------------");

// 2.
var nota1 = 10;
var nota2 = 6;
var nota3 = 3;
var media = (nota1 + nota2 + nota3) / 3;
console.log(media);
console.log("Reprovado, sua média foi:", media.toFixed(1));
console.log("---------------------------");

// 3.
var salarioBruto = 3000;
salarioBruto -= salarioBruto * 0.08;
salarioBruto -= salarioBruto * 0.05;
console.log(`O salário agora é ${salarioBruto}`);
console.log("-------------------------------------");


// 4.
var raio = 7;
console.log(
  "Comprimento de uma circunferência de raio =",
  raio,
  "cm :",
  2 * Math.PI * raio
);
console.log("A área é:", Math.PI * raio * 2);
console.log("-------------------------------------");

// 5.
var custoCelular1 = 3000;
var custoCelular2 = 4500;
var custoCelular3 = 6000;
var desconto1 = custoCelular1 * 0.05; // 1500 * 2 * 0.05
var desconto2 = custoCelular2 * 0.1; // 1500 * 3 * 0.1
var desconto3 = custoCelular3 * 0.15; // 1500 * 4 * 0.15
var valorTotal1 = 2850
var valorTotal2 = 4050
var valorTotal3 = 5100
console.log(`O valor final a pagar com 2 unidades será de: ${custoCelular1} - ${desconto1} é de ${valorTotal1}`);
console.log(`O valor final a pagar com 3 unidades será de: ${custoCelular2} - ${desconto2} é de ${valorTotal2}`);
console.log(`O valor final a pagar com 4 ou mais unidades será de: ${custoCelular3} - ${desconto3} é de ${valorTotal3}`);
console.log("-------------------------------------");

// 6.
var num = 10;
console.log(`Numero:${num}`);
if (num % 3 == 0 && num % 5 == 0) {
  console.log(`Múltiplo de âmbos`);
} else if (num % 3 == 0) {
  console.log(`Múltiplo de 3`);
} else if (num % 5 == 0) {
  console.log(`Múltiplo de 5`);
}
console.log("-----------------------");

// 7.
const AnoBissexto = (ano) => {
    if (ano % 400 === 0){
        return console.log(`${ano} é bissexto porque é divisível por 400.`)
    }
    if (ano % 100 === 0){
        return console.log(`${ano} não é bissexto porque é divisível por 100, mas não por 400`)
    }
    if (ano % 4 === 0){
        return console.log(`${ano} é bissexto porque é divisível por 4, mas não por 100`)
    }
    return console.log(`${ano} não é bissexto porque não é divisível por 4`)
}
AnoBissexto(2024)
AnoBissexto(1900)
AnoBissexto(6240)
AnoBissexto(3021)
console.log("---------------------------------");

// 8.
var semana = 2;
switch (semana) {
    case 1:
        "Segunda";
        case 2:
        "Terça";
        case 3:
        "Quarta";
        case 4:
        "Quinta";
        case 5:
        "Sexta";
        console.log(`Dia da semana que corresponde a terça é: ${semana}`);
}
console.log("---------------------------------");


// 9.
var velocidade = 80;
var velocidade2 = 95;
var subtracao = 95 - 80;
var multa = 5 * 15;
console.log(`A velocidade ultrapassada é de: ${subtracao}`);
console.log(`O valor da multa a ser paga é de: ${multa}`);
console.log(`---------------------------------------`)
// 10.
var preco = 100
if (preco < 50){
    console.log(`O produto vale ${preco} por tanto não terá nenhum desconto`)
}else if (preco <= 100){
    console.log(`O produto vale ${preco} e possuí 5% de desconto, ficando ${preco - (preco * 0.05)}`)
}else if (preco > 100){
    console.log(`O produto vale ${preco} e tem 10% de desconto, ficando ${preco - (preco * 0.01)}`)
}

// 11.
console.log("Os números pares de 0 a 50 são:");
for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}
console.log("-------------------------------------------");

// 12.
var1 = 9;
for (let index = 1; index <= 10; index++) {
    console.log(`${var1} x ${index} = ${var1 * index}`);   
}


console.log("------------------------");

// 13.
var soma13 = 0
for (let i = 1; i <= 100; i++){
    soma13 += i;
}
console.log("A soma dos números de 1 a 100 será", soma13)
console.log("------------------------");

// 14.
let numeros = [3, 5, 7, 9, 11];
let soma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
console.log(`Soma é, ${soma}`);
console.log("-------------------------------------------------");

// 15.
var i = 10;
while (i >= 0) {
  console.log(`Segundos: ${i}`);
  i--;
}

// 16.
var semanas = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
console.table(semanas);
console.log("2 Posição:", semanas[3]);
console.log("----------------------------------");

// 17.
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas)
var posicao = frutas.indexOf("Pera")
frutas.splice(posicao, 1)
console.table(frutas)
console.log("----------------------------------");

// 18.
var ranking = [20, 8, 101, 4, 1, 9, 30]
console.log(ranking[0])
console.log(ranking[2])
console.log(ranking[6])
console.log("----------------------------------");

// 19.
var texto1 = `Java Script é incrível`
console.log(texto1)
var texto2 = `JAVA SCRIPT É INCRÍVEL`
console.log(texto2)
console.log("----------------------------------");

// 20.
var textolegal = `A vida é bela e cheia de desafios`;
console.log(`O texto ${textolegal} tem oito palavras`)

// 21.
var arrayNumeros2 = [12, 45, 67, 89, 23]
console.log(arrayNumeros2[3])
console.log("----------------------------------");

// 22.
var dev = `Desenvolvimento`
var dev1 = dev.split("").reverse().join("") ;
console.log(dev1);
console.log("----------------------------------");

// 23.
var outroTextoLegal = `Aprender Java Script é maravilhoso!`
console.log(`O texto ${outroTextoLegal} tem 5 letras "a"`)

// 24.
var carta = `Desenvolvimento Web`
console.log(carta)
var carta = `D*s*nv*lm*nt* W*b`
console.log(carta)

// 25.
var ultimoArray = [10, 20, 30, 40, 50]
var ultimonumero = 0
for (let i = 0; i < ultimonumero.length; i++) {
    soma += ultimonumero[i];
}
var media = soma / 5;
console.log(`A média é: ${media}`)