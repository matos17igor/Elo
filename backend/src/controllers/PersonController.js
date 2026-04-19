const PersonRepository = require("../repositories/PersonRepository");

const createPerson = async (req, res) => {
  try {
    const {
      nome_completo,
      idade,
      caracteristicas,
      ultimo_local,
      status,
      telefone,
      usuario_id,
    } = req.body;

    if (!nome_completo || !status || !usuario_id) {
      return res.status(400).json({
        error: "Nome completo, status e usuario_id são obrigatórios.",
      });
    }
    await PersonRepository.create({
      nome_completo,
      idade,
      caracteristicas,
      ultimo_local,
      status,
      telefone,
      usuario_id,
    });

    return res.status(201).json({ message: "Registro salvo com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar pessoa:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao tentar salvar o registro." });
  }
};

const getAll = async (req, res) => {
  try {
    const result = await PersonRepository.getAllPersons();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro no getAll:", error);
    return res.status(500).json({ error: "Erro ao buscar pessoas" });
  }
};

const getPersonById = async (req, res) => {
  try {
    const id = req.params.id;

    const person = await PersonRepository.findById(id);

    if (!person) {
      return res
        .status(404)
        .json({ error: "Nao existe uma pessoa com esse id." });
    }
    return res.status(200).json(person);
  } catch (error) {
    console.error("Erro ao buscar pessoa por ID:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao buscar o registro." });
  }
};

const updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: "O novo status é obrigatório." });
    }

    await PersonRepository.updateStatus(id, status);
    return res.status(200).json({ message: "Status atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao atualizar o registro." });
  }
};

module.exports = { createPerson, getAll, getPersonById, updateStatus };
