const { Router } = require('express');
const todoRouter = require('./todoRouter');

const rootRouter = Router();

rootRouter.use('/todo', todoRouter);

module.exports = rootRouter;
