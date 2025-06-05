const estudante = {
  matricula: 457562,
  nome: 'Kennedy',
  cpf: '323452779820',
  curso: 'javascript',
}

console.log(estudante);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`O nome do estudante é ${estudante.nome} e o tres primerios digitos do cpf é ${estudante.cpf.substring(0, 3)}`);
