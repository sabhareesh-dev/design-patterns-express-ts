import express from 'express';
import router from './routes/index.js';
import { errorHandler } from './middlewares/error-handler.js';

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

export default app;
