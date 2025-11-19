const SORTUDO = window.SORTUDO;
const PARTICIPANTES = window.PARTICIPANTES;

const listaParticipantes = document.getElementById("lista-participantes");
const botaoSortear = document.getElementById("botao-sortear");
const resultado = document.getElementById("resultado");
const sortudoAtual = document.getElementById("sortudo-atual");

sortudoAtual.textContent = SORTUDO;

const elementos = [];

function carregarLista() {
  PARTICIPANTES.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    listaParticipantes.appendChild(li);
    elementos.push({ nome, li });
  });
}

function limparMarcacoes() {
  elementos.forEach((p) => p.li.classList.remove("riscado"));
}

carregarLista();

botaoSortear.addEventListener("click", () => {
  limparMarcacoes();

  const alvo = SORTUDO.trim().toLowerCase();

  const match = elementos.find(
    (p) => p.nome.trim().toLowerCase() === alvo
  );

  if (match) {
    match.li.classList.add("riscado");

    resultado.innerHTML = `
      O sorteio foi realizado!<br />
      O amigo secreto sorteado é: <strong>${SORTUDO}</strong> 🎉
    `;
    resultado.style.color = "#111827";
  } else {
    resultado.innerHTML = `
      O nome <strong>${SORTUDO}</strong> não está na lista de participantes.
    `;
    resultado.style.color = "#b91c1c";
  }
});