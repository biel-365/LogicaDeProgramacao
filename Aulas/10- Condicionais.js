// Condicional simples com if (se)
var anoNascimento = 2003;

if (anoNascimento > 2003) {
    console.log("A pessoa nasceu depois de 2003.");
}

if (anoNascimento < 2003) {
    console.log("A pessoa nasceu antes de 2003.");
}

if (anoNascimento == 2003) {
    console.log("A pessoa nasceu em 2003.");
}

// Condições simples com if-else
var anoNascimento = 2005;
if(anoNascimento > 2000){
    console.log("A pessoa nasceu depois de 2000.");
}else{
    console.log("A pessoa nasceu em 2000 ou antes");
}

// Condições compostas com if
const login = "admin";
const senha = "12345";

var loginUser = "Pafúncio";
var SenhaUser = "54321";

if(loginUser == login && senhaUser == senha){
    console.log("Acesso permitido!");
}else{
    console.log("Acesso negado!");
}

// Desvio condicional alinhado - if-elseif-else
var semaforo = "vermelho";

if(semaforo == "verde"){
    console.log("Siga")
}else if(semaforo== "amarelo"){
console.log("Atenção");
}else{
    console.log("Pare!");
}

// Desvio condicional if com o bloco de comandos
var idade = 18

if(idade <= 18){
    console.log("Entrei no if...");
    idade++;
    console.log("Incrementei a idade...");
    console.log("A nova idade é", idade);
    console.log("Agora estou saindo do bloco if");
}
console.log("Terminei");

// Criando variáveis locais com "let" (Só existem dentro do blocos que foram criadas)
var mes = "Agosto";
var dia = 15;

if( dia == 15 && mes == "Agosto") {
    let mensagem = "Hoje é dia 15 de Agosto";
    console.log(mensagem);
}
console.log("Tentando acessar a variável local fora do bloco, vai dar errinho feinho!")
// console.log(mensagem);


// Criando uma função com desvio condicional if
const desconto = (valorCompra) => {
    let desconto = 0;
    if (valorCompra >= 1000) {
        desconto = (valorCompra * 12) / 100;
    }
return desconto;
};

var totalCompra = 950;
console.log("Valor total da compra: R$", totalCompra, "::: Desconto: R$", desconto(totalCompra));
totalCompra = 1800;
console.log("Valor total da compra: R$", totalCompra, "::: Desconto: R$", desconto(totalCompra));

// Desvio condicional if inline (ternário)
// Se for ? verdadeiro | Se for : falso
var preco = 500;
var resultado = preco <= 100 ? "Tá barato!" : "Eita.. Tá caro demais.";
// O operador acima é o mesmo que escrever:
// if(preco <=100){
//   resultado = "Tá barato!"
// }else
//  resultado = "Eita.. Tá caro demais."
// }
console.log("Preço: R$", preco, "-", resultado);

// if ternário com somente uma expressão
// condição && expressão
var logado = true;
logado && console.log("Usuário está logado.");

// !logado console.log("Usuário ou senha incorretos") ! = não