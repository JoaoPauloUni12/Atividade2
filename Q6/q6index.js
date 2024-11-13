function criarPromessa(cont, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promessa '+cont+ 'resolvida após '+tempo+' ms')
        }, tempo)
    })
}
async function retornarPrimeiraResolvida() {
    try {
        const promessas = []
        for (let i = 1; i <= 5; i++) {
            promessas.push(criarPromessa(i, i*1000))
        }

        const resultado = await Promise.race(promessas)
        return resultado
    } catch (erro) {
        throw erro
    }
}
retornarPrimeiraResolvida()
    .then((resultado) => {
        console.log("Primeira promessa resolvida:", resultado)
    })
    .catch((erro) => {
        console.error("Erro ao aguardar a primeira promessa resolvida:", erro)
    })
