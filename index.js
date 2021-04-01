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
    // const {title, owner} = req.query;
    return res.json(projects)
});



app.post('/projects', (req,res) =>{
    const {title, owner} = req.body

    const project = {id: uuidv4(), title, owner};

    projects.push(project); // esse push vai jogar a criação do nosso projeto para o nosso array

    return res.json(project) // sempre retornar o projeto recém criado e nunca exibir a lista completa
})


app.put('/projects/:id', (req,res) =>{
    const {id} = req.params; // aqui pegamos nosso ID
    const {title, owner} = req.body // retornando uma nova informação

    // aqui usamos o findIndex para percorrer todo array atrás do id
    // findIndex vai percorrer todos os projetos, e toda vez que ele percorrer na variável project
    // caso ela for satisfeita retornará true, ela vai retornar o id que estou passando (project => project.id === id)

    const projectIndex = projects.findIndex(project => project.id === id);
    if (projectIndex < 0){
        return res.status(400).json({error: 'Projeto não foi encontrado'})
    }

    // agora que tenho índice vou criar uma nova informação do projeto

    const project = {
        id,
        title,
        owner,
    }

    projects[projectIndex] = project;

    return res.json(project)
})

app.delete('/projects/:id', (req,res) =>{
    const {id} = req.params

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({ error: 'Projeto não encontrado'})
    }

    projects.splice(projectIndex, 1);


    return res.status(204).send();
});


app.listen(3000, () => {
    console.log('Servidor rodando!')
})