const express = require('express');
const cors = require('cors');

const Router = require('./router');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', Router);

module.exports = app;
