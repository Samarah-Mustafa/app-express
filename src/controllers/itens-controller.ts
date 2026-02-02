import { Request, Response } from 'express';
import { z } from 'zod';
import itensRepository from '../routers/itens-repository.js';

// Esquema de validação com Zod
// Aqui definimos as regras: nome deve ser string e ter min 3 letras.
const itemSchema = z.object({
    nome: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres.' }),
    descricao: z.string().optional(),
});

export const itensController = {
    criar: async (req: Request, res: Response) => {
        try {
            // Valida os dados recebidos. Se falhar, o Zod lança um erro.
            const itemValidado = itemSchema.parse(req.body);

            const id = await itensRepository.criar(itemValidado);
            res.status(201)
                .location(`/api/itens/${id}`)
                .json({ id, ...itemValidado });
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Se for erro de validação, retorna 400 (Bad Request)
                res.status(400).json({ message: 'Dados inválidos', erros: error.errors });
            } else {
                res.status(500).json({ message: 'Erro interno ao criar item.' });
            }
        }
    },

    listar: async (req: Request, res: Response) => {
        try {
            const itens = await itensRepository.lerTodos();
            res.json(itens);
        } catch (error) {
            res.status(500).json({ message: 'Erro interno ao buscar itens.' });
        }
    },

    buscarPorId: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const item = await itensRepository.ler(id);
            if (item) {
                res.json(item);
            } else {
                res.status(404).json({ message: 'Item não encontrado.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro interno ao buscar item.' });
        }
    },

    atualizar: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            // Validamos também na atualização!
            const itemValidado = itemSchema.parse(req.body);

            const success = await itensRepository.atualizar(id, itemValidado);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Item não encontrado para atualização.' });
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({ message: 'Dados inválidos', erros: error.errors });
            } else {
                res.status(500).json({ message: 'Erro interno ao atualizar item.' });
            }
        }
    },

    apagar: async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const success = await itensRepository.apagar(id);
            if (success) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Item não encontrado para exclusão.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erro interno ao apagar item.' });
        }
    },
};