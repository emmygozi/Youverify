import debug from 'debug';
import express from 'express';
import logger from 'morgan';
import apis from '@routes/index';
import dbConfig from '@config/index';
// import errorHandler from '@middlewares/errorHandler';
import { config } from 'dotenv';

const debugged = debug('app');
config();

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json()) //For JSON requests
app.use(express.urlencoded({extended: true}));

app.use('/api/v1', apis);

app.use((request, response, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
// app.use(errorHandler);

app.listen(port, () => {
  debugged(`Listening from port ${port}`);
});

export default app;