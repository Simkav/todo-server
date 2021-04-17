const { Router } = require('express');
const todoRouter = require('./todoRouter');
const errHandler = require('../middlewares/errHandler.mw');

const rootRouter = Router();

rootRouter.use('/todo', todoRouter);
rootRouter.use(errHandler);

module.exports = rootRouter;
