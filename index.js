const { response } = require('express');
const express = require('express')
const app = express()
const {v4:uuidv4} = require('uuid')

app.use(express.json()); 

const projects = [];

/**
 * 
 * 
 * CRUD - CREATE, READ, UPDATE E DELETE
 * 
 * 
 */

/**
 * 
 * GET: Busca informações do back-end
 * POST: Criar informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar informação no back-end
 * 
 */

/**
 * Query Params: Vamos usar principalmente para filtros e paginação
 * Route Params: Identifica recursos na hora de atualizar ou deletar
 * Request Body: Resto do conteúdo na hora de criar ou editar um recurso
 */
// console.log(app)

app.get('/projects', (req,res) => {
    const {title, owner} = req.query;
    
    console.log(title)
    console.log(owner)

    return res.json([
        'projeto 1',
        'projeto 2',
        'projeto 100'
    ])
});



app.post('/projects', (req,res) =>{
    const {title, owner} = req.body

    const project = {id: uuidv4(), title, owner};

    projects.push(project); // esse push vai jogar a criação do nosso projeto para o nosso array

    return res.json(project) // semprer retornar o projeto recém criado e nunca exibir a lista completa
})


app.put('/projects/:id', (req,res) =>{
    const params = req.params;

    console.log(params)

    return res.json([
        'projeto 50',
        'projeto 2',
        'projeto 3',
        'projeto 4',
        'projeto 5'

    ])
})

app.delete('/projects/:id', (req,res) =>{
    return res.json([
        'projeto 50',
        'projeto 2'

    ])
})




app.listen(3000, () => {
    console.log('Servidor rodando!')
})