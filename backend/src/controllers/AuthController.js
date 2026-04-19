const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRepository = require("../repositories/UserRepository");

const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await UserRepository.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "E-mail ou senha incorretos." });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "E-mail ou senha incorretos." });
    }

    const token = jwt.sign(
      { id: user.id, nome: user.nome },
      process.env.SEGREDO_DO_JWT,
      { expiresIn: "8h" }
    );

    return res.status(200).json({
      message: "Login bem-sucedido!",
      token: token,
      usuario: { id: user.id, nome: user.nome, email: user.email },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
};

module.exports = { login };
