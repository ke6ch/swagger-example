const dotenv = require('dotenv');
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const swaggerJSDoc = require('./swagger');

dotenv.config();

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  app.use('/api-docs', swaggerJSDoc);
}
app.use('/', indexRouter);
app.listen(port, () => console.log(`Listen on port ${port}.`))
