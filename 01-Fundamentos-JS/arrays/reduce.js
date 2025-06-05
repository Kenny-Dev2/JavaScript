const notas = [6, 5, 8, 10]

const notasSomadas = notas.reduce((acumulador, nota) => {
  return acumulador + nota;
}, 0);

console.log(notasSomadas);

const precos = [19.29, 20.99, 10.00, 9.99, 7.29, 2.49]

const precosSomados = precos.reduce((ac, preco) => {
  return ac + preco;
}, 0)

console.log(precosSomados);
