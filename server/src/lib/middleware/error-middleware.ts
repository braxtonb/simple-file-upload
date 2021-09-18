import express from 'express';
import { ApiResponse } from '../../typings/types';

const errorMiddleware = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const apiResponse: ApiResponse = {
    statusCode: 500,
    message: error.message,
    data: null,
    error: error.message,
  };

  res.status(apiResponse.statusCode).send(apiResponse);
}

export default errorMiddleware;