const estudante = {
  matricula: 457562,
  nome: 'Kennedy',
  cpf: '323452779820',
  curso: 'javascript',
}

function mostrarInfo(estudante, info) {
  console.log(`Meu nome é ${estudante[info]}`)
}

mostrarInfo(estudante, 'nome')