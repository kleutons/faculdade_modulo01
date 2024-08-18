fetch('https://jsonplaceholder.typicode.com/users')
.then(respons => respons.json())
.then(data => {
    preencerLista(data);
})

function preencerLista(data){
    const listaContainer = document.getElementById('lista-container');
    const ul = document.createElement('ul');
    
    data.forEach(item =>{
        const li = document.createElement('li')
        li.textContent = item.name;
        ul.appendChild(li);
    });

    listaContainer.appendChild(ul);
}