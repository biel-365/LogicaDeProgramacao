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
logado && console.log("\nUsuário está logado.");

// !logado console.log("Usuário ou senha incorretos") ! = não


// Desvio condicional - Switch Case
console.log("-----Switch Case-----")
switch (0) {
    case 1:
        console.log("O usuário digitou o número 1!")
        break;

    default:
        console.log("O usuário informou um número diferente de 1!")
        break;
}

console.log("---------------------")
// Menu de seleção
var menuSelecionado = "Home"

switch (menuSelecionado) {
    case "Home":
        console.log("Você clicou no link 'Home'!");
        break;

        case "Quem somos":
            console.log("Você clicou no link 'Quem somos'!");
            break;

            case "Contato":
            console.log("Você clicou no link 'Contato'!");
            break;

    default:
        console.log("Opção inválida de menu");
        break;
}

// Várias opções com mesmo case - Switch Case
var mes = 7;
switch (mes) {
case 1:
case 2:
case 3:
console.log("Primeiro trimestre!");
break;

case 4:
case 5:
case 6:
console.log("Segundo trimestre!");
break;


case 7:
case 8:
case 9:
console.log("Terceiro trimestre!");
break;


case 10:
case 11:
case 12:
console.log("Quarto trimestre!");
break;
    default:
        console.log("Mês inválido");
        break;
}