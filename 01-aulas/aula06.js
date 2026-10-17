/*Arrays: Listas de Coisas
Conceito: Como guardar vários valores em uma única variável. 
Índices (começam no zero). .length, .push().

Exemplo Humano: É o inventário do seu personagem. 
Você tem uma mochila com vários itens (slots 0, 1, 2...).*/

// aula06.js
const inventario = ["Espada", "Poção", "Escudo"];

console.log(`O primeiro item é: ${inventario[0]}`); // Índice 0

inventario.push("Mapa"); // Adiciona no final
console.log(`Agora temos ${inventario.length} itens na mochila.`);