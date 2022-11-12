'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Smer}) {
      // define association here

      this.belongsTo(Smer, {
        foreignKey: 'smerID',
        as: 'smer'
      });
    }
  }
  Student.init({
    ime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prezime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zvanje: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tema_rada: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mentor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    godina: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};