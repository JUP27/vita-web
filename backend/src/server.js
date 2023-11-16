// Importando o arquivo app
const app = require('./app');
// Importando a porta do servidor
const port = app.get('port');

// Testando API
app.listen(port, () => console.log(`Run on port ${port}!`));