// Importando  pacote express (servidor)
const express = require('express');
// Importando  cors para lidar com requisições externas
const cors = require('cors');
// Importando  rotas para serem executadas na aplicação
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const commentRouter   = require('./routes/commentsRouter');
// Importando  pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitando recebimento de requests em formato JSON
app.use(express.json());
// Habilitando o uso dos cors no servidor
app.use(cors())
// Habilitando as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api', commentRouter);
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 3333);

module.exports = app;