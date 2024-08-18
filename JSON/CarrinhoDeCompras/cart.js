let carrinho = [];

function start(){
    fetch('https://fakestoreapi.com/products?limit=4')
    .then(response => response.json())
    .then(data => {
        preencherCarrinho(data)
    })
    .catch(erro =>{
        console.log('Error: ', erro);
    })
}
function preencherCarrinho(produtos){
    produtos.forEach(data => {
        addCarinho(
            data.title,
            data.image,
            data.description,
            data.price
        )
    });

    atualizarCarrinho();
}

function addCarinho(nome, imgLink, descricao, preco){
    carrinho.push({
        "nome": nome,
        "imgLink": imgLink,
        "descricao": descricao,
        "preco": Number.parseFloat(preco),
        "quantidade": 0,
        "total": 0.0
    })
}

function atualizarCarrinho(){
    let carrinhoHtml = document.getElementById('carrinho');
    carrinho.forEach((produto, index) =>{
        carrinhoHtml.innerHTML +=
        `<div id='produto${index}' class='d-flex flex-row justify-content-between align-items-center pt-4 pb-3 mobile'>
            <div class='d-flex flex-row align-items-center'>
                <div>
                    <img src='${produto.imgLink}' width="150" height="150" alt="" id="image">
                </div>
                <div class='d-flex flex-column pl-md-3 pl-1'>
                    <div><h6>${produto.nome}</h6></div>
                </div>
            </div>
            <div class='pl-md-0 pl-1'><b>R$ ${produto.preco}</b></div>
            <div class='pl-md-0 pl-2'>
                <span class='fa fa-minus-square text-secondary' onclick='deleteItem(${index})'></span>
                <span class='px-md-3 px-1' id='quantidade${index}'>${produto.quantidade}</span>
                <span class='fa fa-plus-square text-secondary' onclick='addItem(${index})'></span>
            </div>
            <div class='pl-md-0 pl-1'><b>R$ <span id='total${index}'></span> </b></div>
            <div class='close' onclick='removerProduto(${index})'>&times;</div>
        </div>`
    })
}

function addItem(item){
    let qtd = document.getElementById('quantidade'+item);
    let produto = carrinho[item];
    produto.quantidade += 1;
    qtd.innerHTML = produto.quantidade;
    atualizarNumerosTela(qtd,item);
}

function deleteItem(item){
    let qtd = document.getElementById('quantidade'+item);
    let produto = carrinho[item];
    if(produto.quantidade > 0 ){
        produto.quantidade -= 1;
        qtd.innerHTML = produto.quantidade;
        atualizarNumerosTela(qtd,item);
    }
}

function atualizarNumerosTela(qtd, item){
    qtd.innerHTML = carrinho[item].quantidade;
    atualizaTotalProduto(item);
    atualizaSubTotal();
}

function atualizaTotalProduto(item){
    let total = document.getElementById('total'+item);
    let produto = carrinho[item];
    produto.total = Number.parseFloat(
        produto.quantidade * produto.preco
    )
    total.innerHTML = produto.total.toFixed(2);
}

function atualizaSubTotal(){
    let totalCompra = document.getElementById('valorTotalCompra');
    let subtotal = 0;

    carrinho.forEach(produto => {
        subtotal += produto.quantidade * produto.preco;
    })

    totalCompra.innerHTML = subtotal.toFixed(2);
}

function removerProduto(item){
    let carrinhoHTML = document.getElementById('carrinho');
    let produto = document.getElementById('produto'+item);

    if(confirm("Você tem certeza que deseja excluir o produto? ")){
        carrinho[item].quantidade = 0;
        atualizaSubTotal();
        carrinhoHTML.removeChild(produto);
    }
}

start();
console.log(carrinho);