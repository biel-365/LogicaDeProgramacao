// Operadores de Incremento e Decremento / pré e pós Incremento
var  idade = 16;
console.log(idade);

idade++; // Idade = idade + 1
console.log(idade);

idade--; // Idade = idade - 1
console.log(idade);
console.log("---------------------------------");

var novaIdade = idade++
console.log("Idade:", idade, "| Nova Idade:", novaIdade);

novaIdade = ++idade;
console.log("Idade:", idade, "| Nova Idade:", novaIdade);

//Operadores de atribuição aritmética
console.log("---------------------------------");
var x = 10;
var y = 5;
console.log("x =", x, "| y =", y);

x += y; // x = x + y
console.log("x =", x, "| y =", y);

x -= y; // x = x - y
console.log("x =", x, "| y =", y);

x *= y; // x = x * y
console.log("x =", x, "| y =", y);

x /= y; // x = x / y
console.log("x =", x, "| y =", y);

x **= y // x = x elevado a y
console.log("x =", x, "| y =", y);

x %= y // x = resto da divisão inteira de x por y
console.log("x =", x, "| y =", y);

x = 13
x %= y // x = resto da divisão inteira de x por y
console.log("x =", x, "| y =", y);