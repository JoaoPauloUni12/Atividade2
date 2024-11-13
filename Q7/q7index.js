function rejeitarAposTempo(ms) {
    return new Promise((reject) => {
        setTimeout(() => {
            reject(new Error('Promessa rejeitada após '+ms+' ms'))
        }, ms)
    })
}

rejeitarAposTempo(2000)
    .then((reject) => {
        console.log("Esta linha não será executada.",reject)
    })
    .catch((erro) => {
        console.error(erro.message)
    })
