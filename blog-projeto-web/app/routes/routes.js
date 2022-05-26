const Joi = require('joi');
const Post = require('../controllers/Post');

module.exports = app => {
    app.get('/', (req, res) => {
        res.render('blog.ejs');
    });

    app.get('/post', (req, res) => {
        Post.listar(res);
    });

    app.get('/post/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Post.buscaId(id, res)
    });

    app.put('/post/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const post = req.body;
        const schema = Joi.object({
            nome: Joi.string().min(1).max(60).required(),
            foto: Joi.string().max(300).required(),
            titulo: Joi.string().max(60).required(),
            descricao: Joi.string().min(1).max(500).required(),

        });
        const result = schema.validate(req.body);
        if (result.error) return res.status(400).send(result.error.details[0].message);
        Post.alteraId(id, post, res);
    });
    
    app.post('/post', (req, res) => {

        const schema = Joi.object({
            nome: Joi.string().min(1).max(50).required(),
            foto: Joi.string().max(300).required(),
            titulo: Joi.string().max(60).required(),
            descricao: Joi.string().min(1).max(500).required()

        });

        const result = schema.validate(req.body);

        if (result.error) return res.status(400).send(result.error.details[0].message);
        const post = req.body;
        res.send(post);
        Post.inserir(post, res); 
        
    })

    app.delete('/post/:id', (req,res) => {
        const id = parseInt(req.params.id);
        Post.remover(id, res);
    });

};
