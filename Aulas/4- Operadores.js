//Precedência de operadores
var x = 22;
var y = 5;
console.log("x =",x, "| y=", y);

var resultado = x + y - 3;
console.log(resultado);

var resultado = x + y * 3;
console.log(resultado);

var resultado = (x + y) * 3;
console.log(resultado);

var resultado = (x + y) / 3;
console.log(resultado);

var resultado = (x / 2 + 3 * y + (x-10)) / 2;
console.log(resultado);

console.log("---------------------------")
const pi = 3.14159265359;
var raio = 5;
console.log("Comprimento de uma circunferência de raio =", raio, "cm :", 2*pi*raio);
console.log("Tentando alterar o valor de pi, vai obter uma mensagem de erro!");
// pi = 3.14 //A linha foi comentada pois se estiver no código ela vai apresentar erros.

//Operadores relacionais ou comparadores
var x = 22;
var y = 5;
console.log("---------------------------")
console.log("x =",x, "| y=", y);
console.log("x é igual a y?", x == y); // Comparação de igualdade
console.log("x é diferente de y?", x != y); // Diferente de
console.log("x maior uqe y?", x > y); // Maior que
console.log("x menor que y?", x < y); // Menor que
console.log("x maior ou igual a y?", x >= y); // Maior ou igual que
console.log("x menor ou igual a y?", x <= y); // Menor ou igual que

