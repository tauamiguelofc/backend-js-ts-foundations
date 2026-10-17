/*Assincronismo (async, await)
Conceito: O JavaScript é de thread única. 
Se ele esperar uma resposta do banco de dados, a tela do jogo congela. 
O async/await permite que o código "espere" sem travar o resto.

Exemplo Humano: Você pede uma pizza (Promise). 
Você não fica parado na porta olhando para o nada (travando o sistema). 
Você vai fazer outras coisas e, quando a pizza chega, você vai comer (await).*/

// aula10.js
// Simula uma chamada à API do jogo que demora 2 segundos
function buscarDadosDoServidor() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Dados do jogador carregados com sucesso!");
    }, 2000);
  });
}

async function iniciarJogo() {
  console.log("Carregando tela de loading...");
  const dados = await buscarDadosDoServidor(); // O código espera aqui
  console.log(dados);
}

iniciarJogo();