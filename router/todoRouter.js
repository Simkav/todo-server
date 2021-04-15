const { Router } = require('express');

const todoRouter = Router();

todoRouter
  .route('/')
  .get()
  .post();

todoRouter
  .route('/:id')
  .get()
  .patch()
  .delete();

module.exports = todoRouter;
