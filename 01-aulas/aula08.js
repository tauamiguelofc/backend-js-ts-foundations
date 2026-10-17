/*Array Methods (Avançado)
Conceito: .map(), .filter(), .reduce(). 
O padrão da indústria para manipular dados. 
O .filter é o rei do backend (usado para achar suspeitos).

Exemplo Humano: .map é como uma esteira de fábrica que pinta cada peça. 
.filter é uma peneira que só deixa passar pedras do tamanho X. 
.reduce é a soma de todo o faturamento da loja no fim do dia.*/

// aula08.js
const jogadores = [
  { nome: "Ana", kills: 20 },
  { nome: "Bia", kills: 5 },
  { nome: "Caio", kills: 15 }
];

// FILTER: Pega só os que têm mais de 10 kills
const highKills = jogadores.filter(jogador => jogador.kills > 10);
console.log(highKills); // [Ana, Caio]

// MAP: Pega só os nomes
const nomes = jogadores.map(jogador => jogador.nome);
console.log(nomes); // ["Ana", "Bia", "Caio"]