const dbPromise = require("../database/database");

const createUser = async (userData) => {
  const db = await dbPromise;

  const sql = `
    INSERT INTO Users (nome, email, senha)
    VALUES (?, ?, ?)
  `;

  const values = [userData.nome, userData.email, userData.senha];
  await db.run(sql, values);
};

const getAll = async () => {
  const db = await dbPromise;

  const sql = `
    SELECT id, nome, email FROM Users
  `;

  const users = await db.all(sql);
  return users;
};

const findById = async (id) => {
  const db = await dbPromise;

  const sql = `
    SELECT id, nome, email FROM Users
    WHERE id = ?
  `;

  const user = await db.get(sql, [id]);
  return user;
};

const findByEmail = async (email) => {
  const db = await dbPromise;

  const sql = `
    SELECT id, nome, email, senha FROM Users
    WHERE email = ?
  `;

  const user = await db.get(sql, [email]);
  return user;
};

module.exports = { createUser, getAll, findById, findByEmail };
