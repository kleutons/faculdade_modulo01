

let url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme"

const parametros = url.split("?")
console.log(parametros);
const valores = parametros[1].split("&");

//[ 'nome=poder', 'atores=Lucas,Guilherme' ]
console.log(valores); 

for(let i =0; i < valores.length; i++){
    if(valores[i].startsWith("atores=")){
        valores[i] = "atores=" + valores[i].substring(7).toLocaleUpperCase();
    }
}
//[ 'nome=poder', 'atores=LUCAS,GUILHERME' ]
console.log(valores);