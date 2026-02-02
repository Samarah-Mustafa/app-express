import express from 'express';
import cors from 'cors';
import itensRouter from './routers/itens-router.js';
import './database.js';
// Porta do servidor
const PORT = process.env.PORT || 4000;
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
// App Express
const app = express();
// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cors
app.use(
    cors({
        origin: ['http://localhost:3000'],
    }),
);
// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});
// Rotas
app.use('/api', itensRouter);
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404).send('Página não encontrada');
});
// Middleware global de erros (deve ser o último)
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});
// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em ${HOSTNAME}:${PORT}`);
});
