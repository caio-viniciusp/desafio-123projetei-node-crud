const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        cpf: { type: DataTypes.BIGINT(11), primaryKey: true },
        name: DataTypes.STRING,
        phone: DataTypes.INTEGER(11),
        birth: DataTypes.DATEONLY,
      },
      { sequelize, tableName: 'Pessoas' }
    );
  }
}

module.exports = Pessoa;