// Arguments que sustenta todos os argumentos enviados
function funcao(){      // mesmo definindo valores da funcao (a, b, c), arguments sao todos argumentos enviados
    // console.log(arguments[0])  // Mostra valores inseridos na () da funcao 
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    // console.log(total);
}
// funcao( 1, 2, 3, 4, 5, 6);  // É ignorado o que se escreve aqui, fica salvo em arguments

function funcao2(a, b = 2, c = 4){  //Maneira mais pratica, assume o valor 'b','c', caso nao for definido
    // b = b || 0;
    console.log(a + b + c);
}
funcao2(2);     // se nao definir o 'b', será NaN
                // se colocar '' -> será concatenado
                // se colocar undefined -> ira buscar o valor base de 'b' e 'c'

// Por desestruturação
function funcao3({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao3({nome: 'Willian', sobrenome: 'Zytkoski', idade: 30});