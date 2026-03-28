const frutas = [
    { nome: "banana", cor: "amarela" },
    { nome: "morango", cor: "vermelho" },
    { nome: "abacate", cor: "verede" },
    { nome: "laranja", cor: "branca" },
    { nome: "pera", cor: "amarela" }
];

const lista = document.getElementById("listaFrutas");

const select = document.createElement("select");

frutas.forEach((fruta) => {
    const option = document.createElement("option");
    option.value = fruta.nome;
    option.textContent = fruta.nome;
    select.appendChild(option);
});

lista.appendChild(select);