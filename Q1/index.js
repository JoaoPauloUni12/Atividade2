function retornarPromessaDelay(ms,rejeitar) {
    return new Promise(((resolve,reject) => {setTimeout(()=>{
        if(rejeitar){
            reject("Erro em ms: "+ms)
        }else{
            resolve("Sucesso em ms"+ms)
        }    
    }, ms)}))
}

retornarPromessaDelay(5000,true)
    .then(resultado => {
        console.log(resultado)
    })
    .catch(erro => {
        console.error(erro)
    });
retornarPromessaDelay(3000,false)
    .then(resultado => {
        console.log(resultado)
    })
    .catch(erro => {
        console.error(erro)
    });