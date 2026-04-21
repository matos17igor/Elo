const StatsRepository = require("../repositories/StatsRepository");

const getStats = async (req, res) => {
  try {
    const stats = await StatsRepository.getDashboardStats();
    return res.status(200).json(stats);
  } catch (error) {
    console.error("Erro ao buscar estatísticas:", error);
    return res
      .status(500)
      .json({ error: "Erro interno ao gerar o dashboard." });
  }
};

module.exports = { getStats };
