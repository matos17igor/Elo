const dbPromise = require("../database/database");

const create = async (personData) => {
  const db = await dbPromise;

  const sql = `
    INSERT INTO Persons (nome_completo, idade, caracteristicas, ultimo_local, status, telefone, usuario_id, location_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Os valores vao vir do frontend do objeto personData
  const values = [
    personData.nome_completo,
    personData.idade,
    personData.caracteristicas,
    personData.ultimo_local,
    personData.status,
    personData.telefone,
    personData.usuario_id,
    personData.location_id || null,
  ];

  await db.run(sql, values);
};

const getAllPersons = async () => {
  const db = await dbPromise;

  const sql = `
    SELECT Persons.*, Locations.nome as nome_abrigo FROM Persons 
    LEFT JOIN Locations ON Persons.location_id = Locations.id
  `;

  const persons = await db.all(sql);
  return persons;
};

const findById = async (id) => {
  const db = await dbPromise;

  const sql = `
        SELECT * FROM Persons 
        WHERE id = ?
    `;
  const person = await db.get(sql, [id]);
  return person;
};

const updateStatus = async (id, status, location_id) => {
  const db = await dbPromise;

  const sql = `
    UPDATE Persons SET status = ?, location_id = ?
    WHERE id = ?
  `;

  await db.run(sql, [status, location_id, id]);
};

const deletePerson = async (id) => {
  const db = await dbPromise;

  const sql = `
    DELETE FROM Persons WHERE id = ?
  `;

  await db.run(sql, [id]);
};

module.exports = {
  create,
  getAllPersons,
  findById,
  updateStatus,
  deletePerson,
};
