class TestsControllers {
  static async getAll(req, res) {
    try {
      return res
        .status(200)
        .json({ mensagem: `O jogo do id foi apagado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TestsControllers;
