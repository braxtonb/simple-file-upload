import express from 'express';
import { ApiResponse, FileUploadData } from '../typings/types';
import FileUploadService from './fileupload.service';

class FileUploadController {
  private fileUploadService = new FileUploadService();

  public handlePostFileUpload = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    try {
      console.log('request:', req.body, req.file);
      const { firstName, lastName } = req.body;

      if (!req.file?.path) {
        res.status(500).send({ message: 'Unable to create file path' });
        return;
      }

      const fileUploadData: FileUploadData = {
        firstName,
        lastName,
        filename: req.file?.filename,
      };
      this.fileUploadService.saveFile(fileUploadData);

      const apiResponse: ApiResponse = {
        statusCode: 200,
        message: 'Upload successful',
        data: fileUploadData,
        error: null,
      };

      res.status(apiResponse.statusCode).send(apiResponse);
    } catch (error) {
      console.error('Error uploading file', error);
      next(error);
    }
  };
}

export default FileUploadController;
