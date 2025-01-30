let listaDeAmigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo');
    let nome = campoAmigo.value;
    // console.log(nome);
    nome == '' ? alert('Por favor, insira um nome') : listaDeAmigos.push(nome);
    console.log(listaDeAmigos);
    campoAmigo.value = '';
}
