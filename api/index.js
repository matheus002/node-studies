import express from 'express'
import sqlite3 from 'sqlite3'

const app = new express()
app.use(express.json())


app.get('/hello', (req, res) => {
  res.send({"mensagem":"O servidor esta funcionando..."})
})

app.post('/user/create', (req, res) => {
  console.log(req.body)
  res.status(201).send(req.body)
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})