import express from 'express';
import Item from '../models/item.js';
import itensRepository from './itens-repository.js';

const itensRouter = express.Router();

itensRouter.post('/itens', async (req, res) => {
    try {
        const item: Item = req.body;
        // Adicionar validação básica para o corpo da requisição
        if (!item || !item.nome) {
            return res.status(400).json({ message: 'O campo "nome" é obrigatório.' });
        }
        const id = await itensRepository.criar(item);
        res.status(201)
            .location(`/api/itens/${id}`)
            .json({ id, ...item });
    } catch (error) {
        res.status(500).json({ message: 'Erro interno ao criar item.', error: (error as Error).message });
    }
});

itensRouter.get('/itens', async (req, res) => {
    try {
        const itens = await itensRepository.lerTodos();
        res.json(itens);
    } catch (error) {
        res.status(500).json({ message: 'Erro interno ao buscar itens.', error: (error as Error).message });
    }
});

itensRouter.get('/itens/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const item = await itensRepository.ler(id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Item não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro interno ao buscar item.', error: (error as Error).message });
    }
});

itensRouter.put('/itens/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const success = await itensRepository.atualizar(id, req.body);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Item não encontrado para atualização.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro interno ao atualizar item.', error: (error as Error).message });
    }
});

itensRouter.delete('/itens/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const success = await itensRepository.apagar(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Item não encontrado para exclusão.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro interno ao apagar item.', error: (error as Error).message });
    }
});

export default itensRouter;
