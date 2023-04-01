require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const app = express();

app.use(logger('dev'));



//** Error handling */
app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((error, req, res, next) => {
  if (!error.status) {
    error = createError(500, error);
  }
  console.error(error)

  const data = {
    message: error.message
  }

  res.status(error.status)
    .json(data)
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`The port is mooing 🐮 on port ${port}`));