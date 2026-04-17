const dbPromise = require("../database/database");

const create = async (personData) => {
  const db = await dbPromise;

  const sql = `
    INSERT INTO Persons (nome_completo, idade, caracteristicas, ultimo_local, status, telefone)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  // Os valores vao vir do frontend do objeto personData
  const values = [
    personData.nome_completo,
    personData.idade,
    personData.caracteristicas,
    personData.ultimo_local,
    personData.status,
    personData.telefone,
  ];

  await db.run(sql, values);
};

const getAllPersons = async () => {
  const db = await dbPromise;

  const sql = `
    SELECT id, nome_completo, idade, caracteristicas, ultimo_local, status, telefone FROM Persons
  `;

  const persons = await db.all(sql);
  return persons;
};

module.exports = { create, getAllPersons };
