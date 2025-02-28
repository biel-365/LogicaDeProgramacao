//-----------------------------------------------------Objetos em JavaScript-----------------------------------------------------
// Definindo uma classe em javascript (Pessoa)

// Etapa 1- Classe (O molde dos objetos) - singular

// class Pessoa{ // Criamos um class chamada pessoa
//     constructor(pnome,pidade){ // Construtor é tipo um formulário
//         this.nome = pnome
//         this.idade = pidade
//     }
// }

// Etapa 2- Objeto, criando um personagem/aluno
// var aluno1 = new Pessoa("Lucas",22); //criamos um aluno Lucas com 22 anos
// aluno1 é um objeto baseado no molde Pessoa

// Etapa 3- Métodos, ações que um objeto pode fazer
class Pessoa{ // Criamos um class chamada pessoa
    constructor(pnome,pidade){ // Construtor é tipo um formulário
        this.nome = pnome
        this.idade = pidade
    }

    apresentarSe(){
        console.log(`Oi! Meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`)
    }

    envelhecer(){
        this.idade++;
    }
}

var aluno1 = new Pessoa("Lucas",22);
aluno1.apresentarSe();
aluno1.envelhecer();
aluno1.apresentarSe();

// Classe, molde para criar objetos com uma ficha de aluno ou um modelo de jogador de futebol

// Objeto, uma instancia real do modelo, como Lucas ou Neymar

// Atributo, característica do objeto, como nome e idade

// Métodos, ações que o objeto pode fazer, como falar a idade ou envelhecer

//------------------------------------------------------------------------------------------------------//
// Crie uma classe para jogador de futebol que tenha nome, idade e posição
// o objeto criado com base no jogador de futebol poderá apresentar-se
// da seguinte forma: Olá, meu nome é "Neymar", tenho "33" anos e jogo na posição "Atacante"
// Crie 3 objetos e faça com que eles se apresentem

class Jogador{
    constructor(jnome,jidade,jposicao){
        this.jnome = jnome
        this.jidade = jidade
        this.jposicao = jposicao
    }

    apresentarSe(){
        console.log(`Olá, eu sou ${this.jnome}, tenho ${this.jidade} anos, e jogo na posição ${this.jposicao}.`)
    }
}
var jogador1 = new Jogador("Neymar", 33, "Atacante");
var jogador2 = new Jogador("Pelé", 82, "Atacante");
var jogador3 = new Jogador("Um jogador qualquer", 1500000, "Goleiro");
jogador1.apresentarSe();
jogador2.apresentarSe();
jogador3.apresentarSe();

//-------------------------------------------------------------------------------------------------------------------------
// Criando classe Retângulo
class Retangulo{
    constructor(comprimento, largura){
        this.comprimento = comprimento
        this.largura = largura
    }
    obterComprimento(comprimento){
    this.comprimento = comprimento;
    }
    obterLargura(largura){
    this.largura = largura;
    }
    obterArea(){
    return this.comprimento * this.largura
    }
    
}

var ret = new Retangulo(10,15)
console.table(ret)

// Mostrando os valores(atributos) do objeto

console.log(`Comprimento: ${ret.comprimento}`)
console.log(`Largura: ${ret.largura}`)

// Mostrando a area

console.log(`Área: ${ret.obterArea()}`)

// Mudando o valor do comprimento do retangulo

ret.obterComprimento(30)
console.table(ret)

// Mostrando os novos valores

console.log(`Comprimento: ${ret.comprimento}`)
console.log(`Largura: ${ret.largura}`)

// Calculando a nova área
console.log(`Área nova: ${ret.obterArea()}`)

/***************************************************** 
                Lista de Exercícios 
*****************************************************/
/* 
Crie e utilize uma classe "Sorvete" contendo as  
propriedades: sabor, preco e tamanho (P / M / G)
*/
// Crie um sorvete de chocolate pequeno. (objeto)
// Crie um sorvete de morango grande.
// Crie um sorvete de pistache médio.
// Altere o preco do sorvete de morango grande para R$ 10,51.
// Altere o tamanho do sorvete de pistache médio para grande.

class Sorvete{
    constructor(sabor,preco,tamanho){
    this.sabor = sabor
    this.preco = preco
    this.tamanho = tamanho
    }
}
var sorvete1 = new Sorvete("Chocolate", 5, "P")
var sorvete2 = new Sorvete("Morango", 8, "G")
var sorvete3 = new Sorvete("Pistache", 8, "M")
console.table(sorvete1)
sorvete2.preco = 10.51
console.table(sorvete2)
sorvete3.tamanho = "Grande"
console.table(sorvete3)
