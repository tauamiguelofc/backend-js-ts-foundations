/*Loops: Repetição sem Copiar e Colar
Conceito: for (quando você sabe quantas vezes vai rodar) e while (quando você não sabe, mas tem uma condição de parada).

Exemplo Humano: O for é como fazer 10 flexões. 
Você sabe que começa na 1 e termina na 10. 
O while é como "continue correndo enquanto não estiver exausto".*/

// aula04.js
console.log("Iniciando contagem regressiva para a partida...");

// for: começa em 5; enquanto for maior que 0; diminui 1.
for (let i = 5; i > 0; i--) {
  console.log(`Partida começa em ${i}...`);
}
console.log("VAI!");

// while
let municao = 3;
while (municao > 0) {
  console.log(`Atirando... ${municao} balas restantes.`);
  municao--;
}