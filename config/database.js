const Sequelize = require('sequelize');

const connection = require('./connection');

const options = {
  host: connection.settings.host,
  dialect: connection.settings.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
};

switch (process.env.NODE_ENV) {
  case 'production':
    console.info('Using production database...');
    options.pool.max = 30;
    options.pool.min = 5;
    break;
  case 'testing':
    console.info('Using test database...');
    options.pool.max = 10;
    options.pool.min = 5;
    break;
  default:
    console.info('Using default database...');
}

const database = new Sequelize(
  connection.settings.database,
  connection.settings.username,
  connection.settings.password,
  options,
);

module.exports = database;
