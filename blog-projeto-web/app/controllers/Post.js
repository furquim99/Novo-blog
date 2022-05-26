const { render } = require('express/lib/response');
const ligarbanco = require('../../config/dbServer');

class Posts {
    listar(res) {
        const sql = 'SELECT * FROM post';

        ligarbanco.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error)
            }

            res.render('listarPost.ejs', { dados : results });
        });
    };
    buscaId(id, res){
        const sql = `SELECT * FROM post WHERE id = ${id}`; 
        ligarbanco.query(sql, id, (error, result) =>{
            if(error){
                res.status(400).json(error);
            }
            res.status(201).json(result);
            
        });
    }
    alteraId(id, valores, res){
        const sql = `UPDATE post SET ? WHERE id = ${id}`;        
        ligarbanco.query(sql, [valores,id], (error, result) =>{
            if(error){
                res.status(400).json(error);
            }
            res.status(201).json(result);
        });
    }
    remover(id, res){
        const sql = `DELETE FROM post WHERE id = ${id}`;

        ligarbanco.query(sql, id, (error, results) => {
            if(error){
                res.status(400).json(error)
            }
            res.status(201).json(results)
        });
    };
    inserir(post,req) {
        const sql = `INSERT INTO post SET ?`;

        ligarbanco.query(sql, post, (res, error, results) => {
           
        });
        res.render('inserirPost.ejs', { dados : results });
    }
}

module.exports = new Posts; 