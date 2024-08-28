const texto = `
Ut interdum tellus sit amet arcu viverra facilisis. Mauris diam magna, condimentum ac justo nec, rhoncus iaculis odio. Sed tincidunt lacus ut risus laoreet sagittis. Curabitur tristique egestas libero, nec vulputate ligula pellentesque auctor. Mauris vitae est lacinia, condimentum felis eget, consequat eros. Proin tempor ligula felis, sit amet malesuada purus viverra sit amet. Nunc lobortis porta est a mattis.

Curabitur congue tincidunt velit eu placerat. Aliquam sed urna pretium, laoreet ante nec, ultrices eros. Sed ullamcorper elit id dolor congue fringilla. Aenean fringilla sed risus ac consequat. Mauris turpis leo, volutpat eget varius sit amet, fermentum id lectus. Nunc quis gravida neque. Nulla eleifend risus diam, ut dictum mauris lobortis ut. Donec vitae nisi ullamcorper turpis accumsan malesuada a id mauris.

Vestibulum aliquet tellus id purus consequat, eget vehicula erat porttitor. In hac habitasse platea dictumst. Nunc semper faucibus enim sit amet tristique. Quisque egestas, massa luctus laoreet porttitor, eros lorem semper enim, sed mattis turpis justo ut est. Proin ac elit tincidunt, lacinia est nec, ultrices purus. Quisque sem dui, commodo a dui consectetur, posuere accumsan orci. Maecenas luctus, nibh ac molestie ornare, mi odio placerat metus, vitae ornare lorem lectus a erat. Maecenas imperdiet, dui nec tincidunt sollicitudin, orci velit efficitur tortor, id interdum odio nibh nec sapien.
`;

function palavraMaisRepetida(texto) {
    const palavras = texto.split(/\s+/);

    const contagem = new Map();

    palavras.forEach(function (palavra) {
        const palavraLimpa = palavra.replace(/^[.,]+|[.,]+$/g, '');
        if (palavraLimpa) {
            if (contagem.has(palavraLimpa)) {
                contagem.set(palavraLimpa, contagem.get(palavraLimpa) + 1);
            } else {
                contagem.set(palavraLimpa, 1);
            }
        }
    });

    let palavramaisFrequentada = 0;
    let maxContagem = 0;
    for (let [palavra, freq] of contagem) {
        if (freq > maxContagem) {
            palavraMaisFrequentada = palavra;
            maxContagem = freq;
        }
    }

    return { palavramaisFrequentada, maxContagem };
}


const resultado = palavramaisRepetida(texto);
console.log(`A palavra mais repetida é "${resultado.palavramaisFrequentada}" com ${resultado.maxContagem} ocorrências.`);
