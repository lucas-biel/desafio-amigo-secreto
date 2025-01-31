let listaDeAmigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo');
    let nome = campoAmigo.value;
    nome == '' ? alert('Por favor, insira um nome') : listaDeAmigos.push(nome);
    campoAmigo.value = '';
    listarAmigos();
}

function listarAmigos() {
    let campoLista = document.getElementById('listaAmigos');
    campoLista.innerHTML = '';

    for (let i = 0; i <= listaDeAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = listaDeAmigos[i];
        campoLista.appendChild(itemLista);
    }
}
