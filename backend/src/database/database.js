const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const dbPromise = open({
  filename: "./database.db",
  driver: sqlite3.Database,
});

const criarBanco = async () => {
  const db = await dbPromise;

  await db.exec(`
    CREATE TABLE IF NOT EXISTS Persons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_completo TEXT NOT NULL,
    idade INTEGER,
    caracteristicas TEXT,
    ultimo_local TEXT,
    status TEXT NOT NULL,
    telefone TEXT,
    data_registro TEXT DEFAULT CURRENT_TIMESTAMP
    )
    `);

  console.log("Tabela Persons criada com sucesso!");
};

criarBanco();
module.exports = dbPromise;
