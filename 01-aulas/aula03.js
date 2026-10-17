/*Tomada de Decisão (if, else, else if)
Conceito: Como o computador toma decisões. 
Operadores de comparação: >, <, >=, <=, === (igual), !== (diferente). 
Operadores lógicos: && (E), || (OU).

Exemplo Humano: É um fluxograma. 
Se o jogador passou da linha de defesa, é impedimento. 
Se a vida chegou a zero, ele morreu.*/

// aula03.js
const vida = 0;

// O clássico "if / else"
if (vida <= 0) {
  console.log("Você morreu! Tela de Game Over.");
} else if (vida < 20) {
  console.log("Cuidado, vida baixa! Use uma poção.");
} else {
  console.log("Você está seguro.");
}