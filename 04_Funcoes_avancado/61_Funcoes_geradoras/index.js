// Funções geradoras
// 1,2,3 -> quando chama primeira vez = 1, na segunda vez =2, na terceira vez = 3. Quase como se pausasse o codigo.

function* geradora1() {
    // Código qualquer...
    yield "Valor 1";
    // Código qualquer...
    yield "Valor 2";
    // Código qualquer...
    yield "Valor 3";
}

// const g1 = geradora1();
// // console.log(g1);   .next -> para mostrar o sobre o objeto
// console.log(g1.next().value); // .next().value -> para mostrar o valor
//Valor 1
// console.log(g1.next().value);
//Valor 2
// console.log(g1.next());
// [object Object]
// {
//   "value": "Valor 3",
//   "done": false
// }
// console.log(g1.next());
// [object Object]
// {
//   "value": undefined,
//   "done": true
// }

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}
// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value


function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1')
    };
                                        // se colocar um return no meio, a funcao acaba nele
    yield function() {
        console.log('Vim do y2')
    };
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();