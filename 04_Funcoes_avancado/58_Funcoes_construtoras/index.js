// Funções construtoras -> Objetos
// Construtora ->   Pessoa (palavra new, precisa comecar com maiuculo. Não usa virgula. Serve como molde) Ex: new Pessoa

function Pessoa(nome, sobrenome) {
    // // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){

    }

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método.');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');     // Obrigatorio o new!! 

p1.metodo();