let listaDeAmigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo');
    let nome = campoAmigo.value.trim();
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

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('A lista deve ter no mínimo 2 nomes!');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeEscolhido = (listaDeAmigos[indiceAleatorio]);

    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = `Seu amigo secreto é: ${nomeEscolhido}`;
}
