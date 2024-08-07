var frase = "JavaScript e Python"

let palavra = "Python";
var pos1 = frase.indexOf(palavra);
console.log("Posição: " + pos1);
console.log("Tamanho da Palavra: " + palavra.length);

var pegarPalavra = frase.substring(pos1, (pos1 + palavra.length) )
console.log('pegarPalavra: ' +pegarPalavra);
