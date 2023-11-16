// Importando o arquivo app
const app = require('./app');
// Importando a porta do servidor
const port = app.get('port');

// Testando API - ao acessar pasta backend e dar npm start
app.listen(port, () => console.log(`Run on port ${port}!`));