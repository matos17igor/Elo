const PersonRepository = require("../repositories/PersonRepository");

const createPerson = async (req, res) => {
  try {
    console.log("O que o Express recebeu no body:", req.body);
    const {
      nome_completo,
      idade,
      caracteristicas,
      ultimo_local,
      status,
      telefone,
    } = req.body;

    if (!nome_completo) {
      return res.status(400).json({ error: "O nome completo é obrigatório." });
    }
    await PersonRepository.create({
      nome_completo,
      idade,
      caracteristicas,
      ultimo_local,
      status,
      telefone,
    });

    return res.status(201).json({ message: "Registro salvo com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar pessoa:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao tentar salvar o registro." });
  }
};

module.exports = { createPerson };
