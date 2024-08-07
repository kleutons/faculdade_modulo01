var nome = "Marcelo da Silva";
var x = nome.length
console.log(x);
console.log(nome.toLocaleUpperCase());

var texto = "         Exemplo real de texto!   ";
console.log("TEXTO: " +texto)

//Encontrar posição de uma palavra
var posicao = texto.indexOf('real');
console.log("Posição encontra: " +posicao)

//cortar texto depois da palavra real 
var cortarTexto = texto.slice(posicao);
console.log("Texto Cortado: " +cortarTexto)

//true or false
var existeTexto = texto.includes("real");
console.log(existeTexto) //true

//Apagar espaço em branco no inicio e final do texto
console.log("Apagar espaços do Texto: " + texto.trim())


var num = "0,1,2,3,4,5,6,7,8";
var arr = num.split(',')
console.log(arr)
console.log(arr[2])