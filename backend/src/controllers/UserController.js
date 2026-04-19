const UserRepository = require("../repositories/UserRepository");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email) {
      return res
        .status(400)
        .json({ error: "Por favor, preencha os campos obrigatórios." });
    }
    if (!senha) {
      return res.status(400).json({ error: "Digite uma senha." });
    }

    const userExists = await UserRepository.findByEmail(email);
    if (userExists) {
      return res.status(400).json({ error: "Esse e-mail já está em uso." });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    await UserRepository.createUser({ nome, email, senha: senhaCriptografada });
    return res.status(201).json({ message: "Usuario cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar usuario:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao tentar salvar o registro." });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await UserRepository.getAll();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro no getAll:", error);
    return res.status(500).json({ error: "Erro ao buscar usuarios" });
  }
};

module.exports = { createUser, getAllUsers };
