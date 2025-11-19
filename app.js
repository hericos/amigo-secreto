// Espera que config.js tenha definido window.SORTUDO
const SORTUDO = window.SORTUDO || "Sortudo não configurado";

const form = document.getElementById("form-participantes");
const inputNome = document.getElementById("nome");
const listaParticipantes = document.getElementById("lista-participantes");
const botaoSortear = document.getElementById("botao-sortear");
const resultado = document.getElementById("resultado");
const sortudoAtual = document.getElementById("sortudo-atual");

const participantes = [];

sortudoAtual.textContent = SORTUDO;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = inputNome.value.trim();
  if (!nome) return;

  participantes.push(nome);

  const li = document.createElement("li");
  li.textContent = nome;
  listaParticipantes.appendChild(li);

  inputNome.value = "";
  inputNome.focus();
});

botaoSortear.addEventListener("click", () => {
  if (participantes.length === 0) {
    resultado.textContent = "Adicione pelo menos um participante antes de sortear.";
    resultado.style.color = "#b91c1c";
    return;
  }

  // Aqui seria o "sorteio", mas a regra é sempre usar o SORTUDO da env
  resultado.style.color = "#111827";
  resultado.innerHTML = `
    O sorteio foi realizado!<br />
    O amigo secreto sorteado é: <strong>${SORTUDO}</strong> 🎉
  `;
});