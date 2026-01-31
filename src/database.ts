import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const database = open({
    filename: './db.sqlite',
    driver: sqlite3.Database,
});

database.then((db) => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS itens (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            descricao TEXT
        )
    `);
});

export default database;
