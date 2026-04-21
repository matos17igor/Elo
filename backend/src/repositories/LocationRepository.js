const dbPromise = require("../database/database");

const create = async (locationData) => {
  const db = await dbPromise;
  const sql = `INSERT INTO Locations (nome, endereco, capacidade, contato) VALUES (?, ?, ?, ?)`;
  await db.run(sql, [
    locationData.nome,
    locationData.endereco,
    locationData.capacidade || null,
    locationData.contato || null,
  ]);
};

const getAll = async () => {
  const db = await dbPromise;
  return await db.all(`SELECT * FROM Locations`);
};

module.exports = { create, getAll };
