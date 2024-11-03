const express = require("express");
const { create, update, remove, findAll, findById } = require('./repositories/alunosRepositories')
const app = express();
const port = 3000;

app.use(express.json());

app.post('/alunos', (req, res) => {
  const { nome, email, nome_curso } = req.body;

  if (!nome || !email || !nome_curso) {
    return res.status(400).json({ error: 'Todos os campos (nome, email, nome_curso) devem estar preenchidos.'});
  }

  const aluno = create({ nome, email, nome_curso});
  res.status(201).json(aluno);
});


app.get('/alunos', (req, res) => {
  const alunos = findAll();
  res.json(alunos);
});

app.get('/alunos/:id', (req, res) => {
  const { id } = req.params;
  const alunos = findById(id);
  res.json(alunos);
});


app.put("/alunos/:id", (req, res) => {
  const { id } = req.params;
  const {nome, email, nome_curso } = req.body;
  const aluno = update(id, {nome, email, nome_curso });
  res.status(200).json(aluno);
});

app.delete("/alunos/:id", (req, res) => {
  const { id } = req.params;
  const aluno = remove(id);
  if(!aluno){
    res.status(404).json({error: 'Aluno não encontrado'})
  }else{
    res.status(204).send();
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});