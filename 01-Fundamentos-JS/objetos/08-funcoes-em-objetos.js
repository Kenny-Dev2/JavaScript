const estudante = {
  matricula: 457562,
  nome: 'Kennedy',
  cpf: '323452779820',
  curso: 'javascript',
  telefone: ['11-978207220', '11-952967533'],
  media: 3,

  estaAprovado: function(mediaBase) {
    return this.media >= mediaBase ? true : false;
  }
}

console.log(estudante.estaAprovado(7));
