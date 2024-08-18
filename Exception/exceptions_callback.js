function processname(nome,callback){
    if(typeof nome !== 'string'){
        callback(new Error('O nome deve ser uma string'))
        return;
    }

    if(nome.length == 0){
        callback(new Error("O Nome está vazio"))
        return;
    }

    callback(null, "Nome processado com sucesso!")
}

processname("Marcelo", (error,result) => {
    if(error){
        console.log("Ocorreu um error: "+ error.message);
    }else{
        console.log(result);
    }
})