const Pessoa = require('../models/Pessoa');

module.exports = {

  async list(req, res) {
    try {
      const Pessoas = await Pessoa.findAll();
      return res.json(Pessoas);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  async view(req, res) {
    try {
      const { cpf } = req.params;
      const Pessoas = await Pessoa.findByPk(cpf);
      return res.json(Pessoas);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },

  async store(req, res) {
    try {
      const { cpf, name, phone, birth } = req.body;
      const Pessoas = await Pessoa.create({
        cpf,
        name,
        phone,
        birth,
      });
      return res.json(Pessoas);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
  
  async update(req, res) {
    try {
      const { cpf } = req.params;
      const { name, phone, birth } = req.body;
      const PessoaUpdate = await Pessoa.update(
        { name, phone, birth },
        {
          where: {
            cpf: cpf,
          },
        }
      );
      return res.json(PessoaUpdate);
    } catch (error) {
      return res.json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { cpf } = req.params;
      const PessoaDelete = await Pessoa.destroy({
        where: {
          cpf: cpf,
        },
      });
      return res.json({ message: 'O cadastro foi deletado com sucesso' });
    } catch (error) {
      return res.json({ message: error.message });
    }
  },
};