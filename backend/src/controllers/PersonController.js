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
      location_id,
    } = req.body;

    const usuario_id = req.usuarioId;

    if (!nome_completo || !status) {
      return res.status(400).json({
        error: "Nome completo e status são obrigatórios.",
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
      location_id,
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
    const { status, location_id } = req.body;

    if (!status) {
      return res.status(400).json({ error: "O novo status é obrigatório." });
    }

    if (!location_id) {
      return res.status(400).json({ error: "O abrigo é obrigatório." });
    }

    await PersonRepository.updateStatus(id, location_id, status);
    return res.status(200).json({ message: "Status atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao atualizar o registro." });
  }
};

const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    await PersonRepository.deletePerson(id);
    return res.status(200).json({ message: "Registro apagado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao apagar o registro." });
  }
};

const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nome_completo,
      idade,
      caracteristicas,
      ultimo_local,
      status,
      telefone,
      location_id,
    } = req.body;

    if (!nome_completo || !status) {
      return res.status(400).json({ error: "Nome e Status são obrigatórios." });
    }

    const updatedData = {
      nome_completo,
      idade,
      caracteristicas,
      ultimo_local,
      status,
      telefone,
      location_id: location_id || null,
    };

    await PersonRepository.update(id, updatedData);

    return res
      .status(200)
      .json({ message: "Registro atualizado com sucesso!" });
  } catch (error) {
    console.error("Erro no updatePerson:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao atualizar registro." });
  }
};

module.exports = {
  createPerson,
  getAll,
  getPersonById,
  updateStatus,
  deletePerson,
  updatePerson,
};
