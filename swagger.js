const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'ke6ch',
      version: '1.0.0',
      description: 'Lorem ipsum'
    },
//    host: 'example.com',
//    basePath: '/api/v2',
    schemes: ["http","https"],
  },
  apis: ['./routes/*.js'],
};
 
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

module.exports = app;
