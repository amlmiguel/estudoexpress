const express = require('express')
const app = express()


// console.log(app)

app.get('/', (req,res) => {
    res.send('Olá, pessoal');
})

app.listen(3000, () => {
    console.log('Servidor rodando!')
})