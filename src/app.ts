import 'express-async-errors';
import express, { json, Express } from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import { connectDb, disconnectDb } from './config/database.js';

const app = express();

app.use(cors());
app.use(json());
app.use(cookieParser());
app.use(routes);
app.use(errorMiddleware);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}

export default app;
