import express from 'express';
import { join } from 'path';
import FileUploadController from './fileupload.controller';
import { uploadMediaFile } from '../lib/middleware/multer-file-upload';

const FileUploadRouter = express.Router();
const fileUploadController = new FileUploadController();

// layer path /api/fileupload
FileUploadRouter.post(
  '/',
  uploadMediaFile.single('photo'),
  fileUploadController.handlePostFileUpload,
);

export default FileUploadRouter;
