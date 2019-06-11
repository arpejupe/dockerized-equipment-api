const bodyParser = require('body-parser');
const express = require('express');

const config = require('../../config/');
const database = require('../../config/database');
const auth = require('../../api/policies/auth.policy');

const beforeAction = async () => {
  const testapp = express();

  testapp.use(bodyParser.urlencoded({ extended: false }));
  testapp.use(bodyParser.json());

  testapp.use('/public', config.publicRoutes);
  testapp.use('/private', config.privateRoutes);

  testapp.all('/private/*', (req, res, next) => auth(req, res, next));

  await database.authenticate();
  await database.drop();
  await database.sync().then(() => console.log('Connection to the database has been established successfully'));

  return testapp;
};

const afterAction = async () => {
  await database.close();
};


module.exports = { beforeAction, afterAction };
