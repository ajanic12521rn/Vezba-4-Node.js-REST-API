'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Smer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Student}) {
      // define association here
      this.hasMany(Student, {
        foreignKey: 'smerID',
        as: 'students'
      });
    }
  }
  Smer.init({
    naziv: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Smer',
  });
  return Smer;
};