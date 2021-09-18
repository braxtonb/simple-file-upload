import { createFakeSimpleFormDataResponse } from '../mocks/simple-form-mocks';
import FileUploadClient from './file-upload-client';
import type { ApiResponse, SimpleFormDataResponse } from '../typings/types';

describe('file-upload-client', () => {
  describe('uploadSimpleFormData', () => {
    // relative API calls to prevent options requests for CORS
    FileUploadClient.API_URL = '';

    it('should make a POST request to upload form data', async () => {
      // https://stackoverflow.com/a/46103886
      const responseStructure: SimpleFormDataResponse = {
        firstName: expect.any(String),
        lastName: expect.any(String),
        filename: expect.any(String),
      };

      const response = await FileUploadClient.uploadSimpleFormData(
        new FormData(),
      );

      expect(response).toEqual(expect.objectContaining(responseStructure));
    });
  });
});
