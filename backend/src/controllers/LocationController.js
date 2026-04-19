const LocationRepository = require("../repositories/LocationRepository");

const createLocation = async (req, res) => {
  try {
    const { nome, endereco, capacidade, contato } = req.body;
    if (!nome || !endereco) {
      return res
        .status(400)
        .json({ error: "Nome e endereço são obrigatórios." });
    }
    await LocationRepository.create({ nome, endereco, capacidade, contato });
    return res.status(201).json({ message: "Abrigo cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao criar abrigo:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
};

const getAllLocations = async (req, res) => {
  try {
    const result = await LocationRepository.getAll();
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao buscar abrigos:", error);
    return res.status(500).json({ error: "Erro ao buscar abrigos." });
  }
};

module.exports = { createLocation, getAllLocations };
