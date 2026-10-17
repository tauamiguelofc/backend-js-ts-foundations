/*Tipos de Dados e Operadores Matemáticos
Conceito: Strings (textos), 
Numbers (números), 
Booleans (verdadeiro/falso). 
Operadores básicos: +, -, *, /, % (resto da divisão).

Exemplo Humano: Você não pode somar "maçã" com "carro". O JavaScript também não. 
Se você tentar somar o texto "10" com o número 5, ele não faz a conta, ele cola os dois e vira "105". 
Isso é uma armadilha clássica.*/

// aula02.js
const nome = "Jogador_01"; // String
const kills = 15;          // Number
const isAlive = true;      // Boolean

// Operadores matemáticos
const danoTotal = 50 + 20 * 2; // Multiplicação primeiro (90)
const restoDivisao = 10 % 3;   // Sobra 1

console.log(`O jogador ${nome} tem ${kills} kills.`);