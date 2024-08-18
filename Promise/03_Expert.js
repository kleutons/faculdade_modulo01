function obterValor(valor){
    return new Promise((resolve,reject) =>{
        if(valor > 10){
            valor += 1;
            resolve(valor)
        }else{
            reject("Não foi possivel obter o valor");
        }
    })
}

function dobrarValor(valor){
    return valor *2;
}

function adicionar10(valor){
    return valor + 10;
}

obterValor(28)
.then((valor)=>{
    console.log("Valor Obtido: ", valor);
    return dobrarValor(valor);
})
.then((novoValor)=>{
    console.log("Fazendo o segundo tratamento: ", novoValor);
    return adicionar10(novoValor);
})
.then((resultado)=>{
    total = resultado + 5;
    console.log("O Resultado Final é: ", resultado);
    console.log("O Resultado Total é: ", total);
})
.catch((erro)=>{
    console.log("Erro: ", erro);
})