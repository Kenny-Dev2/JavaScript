// Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

const frutas = ['goiaba', 'abacate', 'limao', 'abacaxi'];
const frutasNovas = ['manga', 'laranja', 'limao', 'goiaba'];

function atualizandoFrutas(...frutas) {
  const frutasAtualizadas = [...new Set(frutas.flat())]
  console.log(frutasAtualizadas);
}

atualizandoFrutas(frutas, frutasNovas);