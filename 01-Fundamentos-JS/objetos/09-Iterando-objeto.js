const estudante = {
  matricula: 457562,
  nome: 'Kennedy',
  cpf: '323452779820',
  curso: 'javascript',
  telefone: ['11-978207220', '11-952967533'],
  endereco: [
    {
      rua: 'Rua do banzo',
      numero: '50',
      complemento: 'casa 1',
      tipo: 'residencial'
    },
    {
      rua: 'Rua teodoro sampaio',
      numero: '1933',
      complemento: 'mercado',
      tipo: 'trabalho'
    }
  ]
}

for (let chave in estudante) {
  console.log(chave);
  console.log(estudante[chave]);
  
}