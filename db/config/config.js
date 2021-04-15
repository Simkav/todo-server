module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASS,
    database: 'todo',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {},
  production: {},
};
