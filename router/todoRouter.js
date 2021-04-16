const { Router } = require('express');
const findTask = require('../middlewares/findTask.mw');

const TaskController = require('../controllers/task.controller');

const todoRouter = Router();

todoRouter
  .route('/')
  .get(TaskController.getTasks)
  .post(TaskController.createTask);

todoRouter
  .route('/:id')
  .all(findTask)
  .get(TaskController.getTask)
  .patch(TaskController.updateTask)
  .delete(TaskController.deleteTask);

module.exports = todoRouter;
