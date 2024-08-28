// Estrutura Crescente
for (let i = 1; i <= 5; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += j;
    }
    console.log(linha);
}

console.log(''); // Linha em branco para separar as duas estruturas

// Estrutura Decrescente
for (let i = 5; i >= 1; i--) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += j;
    }
    console.log(linha);
}
