// Map -. altera e retorna valores do original
// Dobre os números
//               0  1  2   3   4  5  ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobroNumeros = numeros.map(valor => valor *2);
// console.log(dobroNumeros);


// Para cada elemento:
// Retorne uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosane", idade: 32 },
    { nome: "Wallece", idade: 47 }
];

const showName = pessoas.map(obj => obj.nome);
// console.log(showName);

const pessoasNoName = pessoas.map(valor => valor.idade);
// delete obj.nome;
// console.log(pessoasNoName);
// const idades = pessoas.map(function(obj){
//   return {idade: obj.idade};
// })
// console.log(idades);
const idades = pessoas.map(obj => ({idade: obj.idade}));
// console.log(idades);


const comIds = pessoas.map(function(obj, indice){
  obj.id = (indice + 1) * 1000;
  return obj;
})
console.log(pessoas);

// const comIds = pessoas.map(function(obj, indice){
//     const newObj = { ...obj};
//     newObj.id = indice;
//     return newObj;
//   })