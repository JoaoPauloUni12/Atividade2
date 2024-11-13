async function buscarDadosDoBanco(entrada) {
    if (entrada === "erro") {
        throw await new Error("Erro: Entrada inválida")
    } else {
        return 'Dados encontrados para a entrada: '+entrada
    }
}

const entrada = ['erro', 'dados1', 'dados2']

for (const entrada2 of entrada) {
    buscarDadosDoBanco(entrada2)
        .then(resultado => {
            console.log(resultado)
        })
        .catch(erro => {
            console.error(erro.message)
        })
}
