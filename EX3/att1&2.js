
function criarContato(nome, telefone, rua, numero, bairro, dataNascimento) {
    return {
        nome: nome,
        telefone: telefone,
        endereco: {
            rua: rua,
            numero: numero,
            bairro: bairro
        },
        dataNascimento: dataNascimento
    };
}


const dadosContatos = [
    ["Alice", "1234-5678", "Rua das Flores", 101, "Centro", "01/01/2000"],
    ["Bob", "2345-6789", "Avenida Paulista", 202, "Bela Vista", "02/02/1995"],
    ["Carlos", "3456-7890", "Rua dos Jacarandás", 303, "Vila Nova", "03/03/1990"],
    ["Diana", "4567-8901", "Avenida Brasil", 404, "Centro", "04/04/1985"],
    ["Eduardo", "5678-9012", "Rua das Palmeiras", 505, "Jardim América", "05/05/1980"],
    ["Fernanda", "6789-0123", "Rua das Acácias", 606, "Santa Cecília", "06/06/1992"],
    ["Gabriel", "7890-1234", "Rua das Mangueiras", 707, "Pinheiros", "07/07/1988"],
    ["Helena", "8901-2345", "Avenida Rio Branco", 808, "Botafogo", "08/08/1994"],
    ["Igor", "9012-3456", "Rua das Oliveiras", 909, "Jardim Botânico", "09/09/1989"],
    ["Juliana", "0123-4567", "Rua dos Ipês", 1010, "Leblon", "10/10/1991"],
    ["Kleber", "1234-5678", "Avenida Atlântica", 1111, "Copacabana", "11/11/1987"],
    ["Lívia", "2345-6789", "Rua das Hortênsias", 1212, "Ipanema", "12/12/1993"]
];


const listaDeContatos = dadosContatos.map(contato => criarContato(...contato));


for (const contato of listaDeContatos) {
    console.log(
        `Nome: ${contato.nome}, Telefone: ${contato.telefone}, Endereço: ${contato.endereco.rua}, nº ${contato.endereco.numero}, Bairro: ${contato.endereco.bairro}, Data de Nascimento: ${contato.dataNascimento}`
    );
}
