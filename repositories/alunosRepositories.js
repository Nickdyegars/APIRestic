const {v4: uuidv4} = require('uuid');

let alunos = []

function update (id, {nome, email, nome_curso }) {
  const index = alunos.findIndex(aluno => aluno.id === id)
  if(index === -1) {
    return null
  }
  alunos[index] = {
    id,
    nome, 
    email, 
    nome_curso
  }

  return alunos[index]
}

module.exports = {
  update
}