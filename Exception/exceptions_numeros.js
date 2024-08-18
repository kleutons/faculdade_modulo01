function checkPrositve(num){
    if(!Array.isArray(num)){
        throw new Error("Não é uma Array")
    }

    const allPositive = num.every((n) => n > 0 );
    if(!allPositive){
        throw new Error("O array deve conter apenas números positivos");
    }
    return true;
}

try{
    const numbers = [1,2,3,4,5,6];
    const isPositive = checkPrositve(numbers);
    console.log(isPositive);

}catch(error){
    console.log("Ocorreu um erro: ", error.message);
}