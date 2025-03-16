let listaDeAmigos = [];

function salvarNome() {
    let nome = document.getElementById("nome").value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome para o sorteio do amigo secreto.");
    } else if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado. Por favor, insira um nome diferente.");
    } else {
        listaDeAmigos.push(nome);
        document.getElementById("nome").value = "";
        atualizarLista();
    }
}

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById("amigo").value.trim();
    if (nomeDoAmigo === "") {
        alert("Por favor, insira um nome para o sorteio do amigo secreto.");
    } else if (listaDeAmigos.includes(nomeDoAmigo)) {
        alert("Esse nome já foi adicionado. Por favor, insira um nome diferente.");
    } else {
        listaDeAmigos.push(nomeDoAmigo);
        document.getElementById("amigo").value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let amigo of listaDeAmigos) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = amigo;
        listaAtualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("É necessário inserir pelo menos dois nomes para realizar o sorteio.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `Seu amigo secreto sorteado é: ${nomeSorteado}`;
    
    setTimeout(limparCampos, 3000);
}

function limparCampos() {
    listaDeAmigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
    document.getElementById("nome").value = ""; 
    document.getElementById("amigo").value = "";
}