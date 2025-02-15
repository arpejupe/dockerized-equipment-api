/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const cors = require('cors');

/**
 * server configuration
 */
const config = require('../config/');
const swagger = require('../config/swagger');
const dbService = require('./services/db.service');
const auth = require('./policies/auth.policy');

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const app = express();
const server = http.Server(app);
const DB = dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * initialize routes
 */
const publicRoutes = require('../config/routes/publicRoutes');
const privateRoutes = require('../config/routes/privateRoutes');

// secure your private routes with jwt authentication middleware
app.all('/api/private/*', (req, res, next) => auth(req, res, next));

// fill routes for express application
app.use('/api/public', publicRoutes);
app.use('/api/private', privateRoutes);

// setup swagger
swagger(app);

server.listen(config.port, () => {
  if (environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
    process.exit(1);
  }
  return DB;
});
