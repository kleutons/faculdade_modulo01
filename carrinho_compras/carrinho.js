let valorTotal = [0,0];
let valorProduto = [50.00,30.00];
let qtd = [0,0];

// let produtos = [
//     { id: 1, price: 50.00, qtd: 0},
//     { id: 2, price: 30.00, qtd: 0},
//  ]

 // Atualiza Html com novos valores
  function updateHtml(item){

    //calcula total
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    
    //escreve html
    let spanQtd = document.getElementById('quantidade'+item);
    let spanTotal = document.getElementById('total'+item);
    spanQtd.innerHTML = qtd[item];
    spanTotal.innerHTML = valorTotal[item].toFixed(2);
    
    //soma subtotal
    calculaSubTotal();

  }

  // Calcula o SubTotal de todos os itens 
  function calculaSubTotal(){
    let spanSubTotal = document.getElementById('valorTotalCompra');
    let somaTotal = 0;

    for(let i=0; i < valorTotal.length; i++){
        somaTotal += valorTotal[i];
    }
    spanSubTotal.innerHTML =  somaTotal.toFixed(2);
  }

  //Adciona +1 Item
 function addItem(item){

    qtd[item] += 1;
    updateHtml(item);
 }

 //Remove -1 Item
 function deleteItem(item){
    if(qtd[item] > 0 ){
        qtd[item] -=1;
        updateHtml(item);
    }
 }
