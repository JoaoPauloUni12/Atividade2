function criarPromessa(tempo, boleano) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (boleano) {
          resolve('Promessa resolvida em '+tempo+' segundos')
        } else {
          reject(new Error('Promessa rejeitada'))
        }
      }, tempo)
    })
  }

async function tratarErroPromessa(arrayPromessas) {
    try {
      const resultado = await Promise.all(arrayPromessas)
      return resultado
    } catch (error) {
      throw error
    }
  }
const arrayPromessas = []
for (let i = 1; i <= 5; i++) {
        arrayPromessas.push(criarPromessa(i*1000, true))
  }

tratarErroPromessa(arrayPromessas)
  .then(resultado => {
    console.log('Resultado:', resultado)
  })
  .catch(error => {
    console.error('erro:', error.message)
    })