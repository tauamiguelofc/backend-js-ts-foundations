# Backend Foundations: JavaScript & TypeScript 🚀

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**🌐 Acesse a plataforma de ensino interativa:** [Clique aqui para abrir o Web App](https://tauamiguelofc.github.io/backend-js-ts-foundations/)

Este repositório documenta a minha transição de carreira (de Engenharia Química para Desenvolvimento de Software). O foco não é apenas escrever código que funcione, mas sim dominar a lógica, arquitetura backend e as boas práticas necessárias para construir sistemas escaláveis.

---

## 💻 A Plataforma (Web App LMS)

O grande destaque do projeto é o arquivo `index.html`. Ele não é apenas uma página estática, mas sim uma **Plataforma de Ensino (Learning Management System)** construída do zero com HTML, CSS e JavaScript puro.

### Funcionalidades da Plataforma:
* **45 Aulas Interativas:** Conteúdo dividido em módulos (Fundamentos, Estruturas de Dados, Funções, Assincronismo e Desafios).
* **Playground de Código (Monaco Editor):** Integração do mesmo motor do VS Code diretamente no navegador, permitindo que o aluno edite o código e veja o resultado no console na mesma hora.
* **Gamificação (XP e Streak):** Sistema de experiência (XP) e contagem de dias seguidos de estudo (🔥 Streak).
* **Progresso Salvo:** Utilização de `LocalStorage` para salvar o progresso, anotações pessoais e favoritos do aluno.
* **Modo Dark/Light:** Alternância de temas com persistência de escolha.
* **Trilha JS PRO:** O conteúdo ensina conceitos como Escopo, Tipagem, `map/filter/reduce`, `try/catch`, `async/await` e POO com contextos reais do desenvolvimento de jogos e backend.

*Nota: Atualmente, o conteúdo das 45 aulas está estruturado dentro do objeto de dados do `index.html` para facilitar a entrega do Web App. Os arquivos `.js` e `.ts` espalhados nas pastas representam a base bruta e os rascunhos lógicos que originaram esse ecossistema.*

---

## 📂 Estrutura do Repositório

*   **`index.html`**: O código-fonte da plataforma de ensino (HTML, CSS e JS).
*   **`jsbase.gif`**: Logo animada do projeto.
*   **`qrcode.jpeg`**: QR Code para doações (PIX).
*   **`01-aulas/`**: Arquivos teóricos de código bruto (`.js`) super comentados. Podem ser rodados no terminal.
*   **`02-exercicios/`**: Resolução de desafios práticos rodando diretamente no Node.
*   **`03-projetos/`**: *(Em breve)* API real de estatísticas de jogos.

---

## 📚 O que é abordado no Currículo?

O material leva do absoluto zero até a preparação para o backend moderno. Cada tópico conta com conceito teórico, analogias do mundo real (jogos) e código comentado.

1. **Fundamentos:** Variáveis (`const/let`), Tipagem, Operadores (Aritméticos e Lógicos), Condicionais, Switch Case, Loops (`for/while`) e Escopo.
2. **Estruturas de Dados:** Arrays, Métodos (`push/pop/slice/splice`), Objetos, JSON, Higher-Order Functions (`map`, `filter`, `reduce`, `find`) e Spread Operator.
3. **Funções e POO:** Funções Clássicas, Arrow Functions, Parâmetros Default, Callbacks, Closures, Hoisting, `this`, Classes e Construtores.
4. **Tratamento e Assincronismo:** `try/catch`, `throw`, Síncrono vs Assíncrono, Promises, `then/catch`, `async/await`, `fetch`, Event Loop, `setInterval`, `LocalStorage`, DOM e Eventos.
5. **Desafios Práticos:** Cálculo de KDA, Filtro de Banidos, Kill Streak, Validação de Login e Async Timeout.

---

## ⚙️ Como rodar os arquivos locais

Se você quiser testar os códigos brutos (`.js`) fora do navegador, certifique-se de ter o **Node.js** instalado na sua máquina.

1. Clone o repositório:
```bash
git clone https://github.com/tauamiguelofc/backend-js-ts-foundations.git
