// Crie uma função que receba um array de números e retorne a soma de todos os elementos.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaOsElementos = function (listaNumeros) {
  return listaNumeros.reduce((acu, numero) => acu + numero, 0);
}

console.log(somaOsElementos(numeros));

