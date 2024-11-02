const express = require("express");
const { create, update, remove, findAll } = require('./repositories/alunosRepositories')
const app = express();
const port = 3000;

app.use(express.json());

app.put("/alunos/:id", (req, res) => {
  const { id } = req.params;
  const {nome, email, nome_curso } = req.body;
  const aluno = update(id, {nome, email, nome_curso });
  res.status(200).json(aluno);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});