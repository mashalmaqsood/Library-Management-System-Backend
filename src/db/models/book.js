'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Copy,{
        foreignKey : 'bookId',
        as : "copies"
      })
    }
  }

  Book.init({
    title:{ type: DataTypes.STRING,allowNull: false},
    author: {type: DataTypes.STRING,allowNull: false},
    ISBN:{type: DataTypes.STRING,allowNull: false},
    genre: {type:DataTypes.STRING,allowNull: false},
    publishedYear:{type: DataTypes.INTEGER,allowNull: false},
    publisher: {type:DataTypes.STRING,allowNull: false}
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};