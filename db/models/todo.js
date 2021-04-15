'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate (models) {}
  }
  Todo.init(
    {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        field: 'is_done',
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Todo',
      tableName: 'todo',
      underscored: true,
    }
  );
  return Todo;
};
