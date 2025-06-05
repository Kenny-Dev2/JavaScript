const alunos = ['kennedy', 'joao', 'marcos', 'maria', 'priscila', 'keren'];
const notas = [5, 4, 10, 8, 7, 8];

const reprovados = alunos.filter((_, indice) => {
  return notas[indice] <= 7;
})

console.log(reprovados);

function filtrarPelaPrimeiraLetra(letra) {
  return alunos.filter((aluno) => {
    return aluno.charAt(0) == letra;
  })
}

console.log(filtrarPelaPrimeiraLetra('m'));
