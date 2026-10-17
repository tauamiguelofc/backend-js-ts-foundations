/*Funções: Criando Máquinas
Conceito: Blocos de código reutilizáveis. 
Você passa um "ingrediente" (parâmetro) e ela te devolve um "bolo" (return).

Exemplo Humano: Uma máquina de café. 
Você coloca o pó e a água (parâmetros) e ela te devolve o café (return). 
Você não precisa reconstruir a máquina toda vez que quiser um café.*/

// aula05.js
// Criando a máquina
function calcularDano(ataque, defesa) {
  const dano = ataque - defesa;
  return dano < 0 ? 0 : dano; // Retorna 0 se o dano for negativo
}

// Usando a máquina
const danoNoChefe = calcularDano(150, 50);
console.log(`Você causou ${danoNoChefe} de dano!`);