import { Database } from 'sqlite3';
import { open } from 'sqlite';

const DBSOURCE = './db.sqlite';

// Esta função encapsula a lógica de conexão e inicialização.
async function initializeDatabase() {
    try {
        const db = await open({
            filename: DBSOURCE,
            driver: Database
        });

        await db.exec(`
            CREATE TABLE IF NOT EXISTS itens (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                descricao TEXT
            )
        `);
        console.log('Base de dados conectada e tabela "itens" pronta.');
        return db;
    } catch (err) {
        console.error('Erro ao inicializar a base de dados:', (err as Error).message);
        // Encerra o processo se o banco de dados não puder ser iniciado.
        process.exit(1);
    }
}

const database = initializeDatabase();

export default database;