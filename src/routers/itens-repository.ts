import database from '../database.js';
import Item from '../models/item.js';

/**
 * Função para criar um novo item no banco de dados.
 * @param item O objeto Item a ser criado.
 * @returns O ID do item recém-criado.
 */
const criar = async (item: Item): Promise<number> => {
    const db = await database;
    const result = await db.run('INSERT INTO itens (nome, descricao) VALUES (?, ?)', item.nome, item.descricao);
    return result.lastID!;
};

/**
 * Função para ler todos os itens do banco de dados.
 * @returns Uma lista de todos os itens.
 */
const lerTodos = async (): Promise<Item[]> => {
    const db = await database;
    return db.all<Item[]>('SELECT * FROM itens');
};

/**
 * Função para ler um item específico pelo seu ID.
 * @param id O ID do item a ser lido.
 * @returns O objeto Item, ou undefined se não for encontrado.
 */
const ler = async (id: number): Promise<Item | undefined> => {
    const db = await database;
    return db.get<Item>('SELECT * FROM itens WHERE id = ?', id);
};

/**
 * Função para atualizar um item existente.
 * @param id O ID do item a ser atualizado.
 * @param item O objeto Item com os novos dados.
 * @returns true se a atualização foi bem-sucedida, false caso contrário.
 */
const atualizar = async (id: number, item: Item): Promise<boolean> => {
    const db = await database;
    const result = await db.run('UPDATE itens SET nome = ?, descricao = ? WHERE id = ?', item.nome, item.descricao, id);
    return (result.changes ?? 0) > 0;
};

/**
 * Função para apagar um item do banco de dados.
 * @param id O ID do item a ser apagado.
 * @returns true se a exclusão foi bem-sucedida, false caso contrário.
 */
const apagar = async (id: number): Promise<boolean> => {
    const db = await database;
    const result = await db.run('DELETE FROM itens WHERE id = ?', id);
    return (result.changes ?? 0) > 0;
};

export default { criar, lerTodos, ler, atualizar, apagar };
