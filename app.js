//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let element = document.querySelector("input").value;
    let name = element;
    
    if (name === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(name);
    console.log(name);
    
    limparCampo();
    atualizarLista();
}

function sortear(amigos) {
    if (amigos.length === 0) {
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroAleatorio];

    return amigos[numeroAleatorio];
}

function sortearAmigo() {
    let nomeSorteado = sortear(amigos);
    let mostrarResultado = document.getElementById("listaAmigos");
    mostrarResultado.innerHTML = `Amigo sorteado: ${nomeSorteado}`;
}

function limparCampo() {
    let reset = document.querySelector("input");
    reset.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista para evitar duplicação

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria um elemento <li>
        item.textContent = amigos[i]; // Define o texto como o nome do amigo
        lista.appendChild(item); // Adiciona o item à lista
    }
}