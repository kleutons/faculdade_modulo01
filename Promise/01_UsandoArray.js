function somarArray(array){
    return new Promise((resolve, reject) => {
        if(!Array.isArray(array)){
            reject("Isso nao é um Array");
        }

        const soma = array.reduce((total, num) => total + num,0);
        resolve(soma);
    })
}

const myArray = [1,2,3,4,5];

somarArray(myArray)
.then((resultado) => {
    console.log("A soma dos elemento é:", resultado);
})
.catch((erro)=>{
    console.log("Erro: ",erro);
})