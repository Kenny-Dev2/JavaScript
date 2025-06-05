// Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [10.99, 9.99, 24.99, 13.50, 7.19, 2.15];

const valoresSomados = valores.reduce((acu, valor) => acu + valor, 0)
console.log(valoresSomados);
