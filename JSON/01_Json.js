const pessoa = {
    nome: 'João',
    idade: 25,
    profissao: 'Desenvolvedor'
}

const pessoaJSON =JSON.stringify(pessoa);
console.log("Objeto JavaSript:");
console.log(pessoa);

console.log("----------------------");
console.log("Convertendo para Json:");
console.log(pessoaJSON);

console.log("----------------------");
console.log("Convertendo para Objeto Novamente:");
const pessoaObj = JSON.parse(pessoaJSON);
console.log(pessoaObj);