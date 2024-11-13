function criarPromessa(tempo,cont) {
    return new Promise(resolve => setTimeout(resolve('\nTarefa '+ cont +' Executada apos ' +tempo + ' ms'), tempo));
}

async function aguardarTodasAsPromessas() {
    try {
        const promessas = [];
        for (let i = 0; i < 5; i++) {
            promessas.push(criarPromessa(i * 1000,i))        
        }
        const resultados = await Promise.all(promessas)
        return resultados
    } catch (erro) {
        throw erro
    }
}

aguardarTodasAsPromessas()
    .then((resultados) => {
        console.log("Todas as promessas foram aguardadas com sucesso.", resultados)
    })
    .catch((erro) => {
        console.error("Erro ao aguardar todas as promessas:", erro)
    });
