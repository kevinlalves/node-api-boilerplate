import chalk from 'chalk';
import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let statusCode: number;

  switch (err.name) {
    case 'UnauthorizedError':
    case 'InvalidCredentialsError':
      statusCode = 401;
      break;
    case 'UnprocessableEntityError':
      statusCode = 422;
      break;
    case 'ConflictError':
      statusCode = 409;
      break;
    case 'NotFoundError':
      statusCode = 404;
      break;
    default:
      statusCode = 500;
      err.message = 'There was an unexpected error, try again in a few minutes';
  }

  console.error(err);
  res.status(statusCode).send({ message: err.message });
};

export default errorMiddleware;
