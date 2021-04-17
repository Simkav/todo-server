const createError = require('http-errors');
const { Todo } = require('../db/models');
module.exports = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id);
    const task = await Todo.findByPk(id);
    if (!task) {
      return next(createError(400, 'Task not found'));
    }
    req.task = task;
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};
