//Nao podemos criar constanter com palavras reservadas, como "let,if"
//Constanter precisam ter nomes significativos
//Nao pode comecar o nome de uma constanter com numero, como "1nome"
//Nao podem conter espacos ou tracos
//Utilizamos camalCase
//Case-sensitive
//Nao pode redeclarar uma constante
//NAO UTILIZE VAR, UTILIZE CONST

const nome = 'Joao';
console.log(nome);

const primeiroNumero = 5; //const nao pode ser alterado, mais seguro
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;  //let pode ser alterado, perde o primeiro numero
console.log(resultadoTriplicado);