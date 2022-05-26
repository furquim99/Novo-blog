const express = require('express');
const consign = require('consign');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views','./app/views');
app.use(express.static('public'))

module.exports = () =>{
    app.use(express.json())
    consign()
    .include('./app/routes')
    .into(app)
    
        return app;
};
app.listen(port, () => console.log(`porta ${port}`));
