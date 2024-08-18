class MinhaClass{

    constructor(valor){
        this.valor = valor;
    }

    operacaoAssincrona(){
        return new Promise((resolve,reject)=>{
            const resultado = this.valor *2;

            if(resultado >= 0){
                resolve(resultado);
            }else{
                reject("O resultado é negativo")
            }
        })
    }

}

const minhaClass = new MinhaClass(-5);
minhaClass.operacaoAssincrona()
.then((resultado) => {
    console.log("O resultado da operação é: ", resultado);
})
.catch((erro)=>{
    console.log("Erro: ",erro);
})