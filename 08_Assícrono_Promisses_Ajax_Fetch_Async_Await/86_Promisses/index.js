function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { // não é obrigatório o uso de 'resolve, reject', mas é o padrão usado pelo dev
        if (typeof msg !== 'string') reject(new Error('ERRO'));
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, tempo);
    });
}
esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        // console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        // console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    }).then(() => {
        console.log('Exibe dados na tela');
    })
    .catch(e =>{    // -> usado para erro
        console.log('ERRO:', e);
    });
console.log('Isso aqui será exibido antes de qualquer promisse.')
// esperaAi('Frase 2', rand(1, 3))
// esperaAi('Frase 3', rand(1, 3))