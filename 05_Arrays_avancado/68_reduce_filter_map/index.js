// Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobras os valores
// -> Reduzier (Somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numPares = numeros.filter((valor) => valor % 2 === 0);
const dobroDosPares = numPares.map((valor) => valor * 2);
const somarTudo = dobroDosPares.reduce(function (acumulador, valor) {
  acumulador = acumulador + valor;
  return acumulador;
}, 0);
console.log(somarTudo);


// Tudo junto, numa mesma expressão de código
const numPares2 = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce(function (acumulador, valor) {
    return acumulador + valor;
  });
console.log(numPares2);
