const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Comments = sequelize.define('Comments', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Comments;

