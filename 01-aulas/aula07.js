/*Objetos: Dando Identidade às Coisas
Conceito: Agrupar várias propriedades (chave: valor) que descrevem uma única coisa.

Exemplo Humano: A "Ficha de Personagem" de um RPG. 
Ela tem nome, classe, nível, vida e mana, tudo junto.*/

// aula07.js
const personagem = {
  nome: "Gandalf",
  classe: "Mago",
  nivel: 50,
  vida: 100,
  mana: 500
};

console.log(`${personagem.nome} é um ${personagem.classe} de nível ${personagem.nivel}.`);