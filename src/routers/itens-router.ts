import express from 'express';
import { itensController } from '../controllers/itens-controller.js';

const itensRouter = express.Router();

itensRouter.post('/itens', itensController.criar);

itensRouter.get('/itens', itensController.listar);

itensRouter.get('/itens/:id', itensController.buscarPorId);

itensRouter.put('/itens/:id', itensController.atualizar);

itensRouter.delete('/itens/:id', itensController.apagar);

export default itensRouter;
