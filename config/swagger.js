const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Dockerized Equipment API',
      version: '1.0.0',
      description: 'Equipment CRUD operations',
    },
    basePath: '/',
  },
  apis: ['config/routes/*Routes.js', 'api/models/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api', swaggerUI.serve, swaggerUI.setup(specs));
};

