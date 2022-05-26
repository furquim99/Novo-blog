class Novosposts {
    init(ligarbanco){
        this.ligarbanco = ligarbanco;
        this.Postcriado();
    }
    Postcriado(){
        const sql = `CREATE TABLE IF NOT EXISTS post (id int NOT NULL AUTO_INCREMENT,
        nome varchar(50) NOT NULL,
        foto varchar(300) NOT NULL,
        titulo varchar(60) NOT NULL, 
        descricao varchar(500) NOT NULL, PRIMARY KEY(id))`
        
        this.ligarbanco.query(sql, error => {
            if(error) {
                throw error
            }
        });
    }
}
module.exports = new Novosposts;