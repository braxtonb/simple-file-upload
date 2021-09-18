import express from 'express';
import { ApiResponse } from './typings/types';
import FileUploadRouter from './FileUpload/fileupload.router';
import errorMiddleware from './lib/middleware/error-middleware';

const router = (app: express.Application) => {
  app.use('/api/fileupload', FileUploadRouter);
  app.get('/', (req: express.Request, res: express.Response) => {
    const apiResponse: ApiResponse = {
      statusCode: 200,
      message: 'File Upload API',
      data: null,
      error: null,
    };

    res.status(apiResponse.statusCode).send(apiResponse);
  });

  app.use(errorMiddleware);
};

export default router;