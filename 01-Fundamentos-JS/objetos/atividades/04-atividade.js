// Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
  return numero % 2 == 0;
})

const numerosImpares = numeros.filter((numero) => numero % 2 ==1 );

console.log(numerosPares);
console.log(numerosImpares);
