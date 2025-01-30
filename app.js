let listaDeAmigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo');
    let nome = campoAmigo.value;
    // console.log(nome);
    nome == '' ? alert('Por favor, insira um nome') : listaDeAmigos.push(nome);
    console.log(listaDeAmigos);
    campoAmigo.value = '';
    listarAmigos();
}

function listarAmigos() {
    let campoLista = document.getElementById('listaAmigos');
    // campoLista.innerHTML = '';
    console.log('lista vazia');

    for (i = 0; i <= listaDeAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.value = listaDeAmigos[i];
        campoLista.appendChild(itemLista);
        campoLista.innerHTML = itemLista.value;
    }
}
