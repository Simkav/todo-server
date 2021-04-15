const { Router } = require('express');
const todoRouter = require('./todoRouter');

const Router = Router();

Router.use('/todo', todoRouter);

module.exports = Router;
