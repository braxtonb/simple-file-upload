import { rest } from 'msw';
import { createFakeSimpleFormDataResponse } from '../../mocks/simple-form-mocks';
import type { ApiResponse } from '../../typings/types';

export const handlers = [
  rest.post('/api/fileupload', async (req, res, ctx) => {
    const fakeSimpleFormDataResponse = createFakeSimpleFormDataResponse();
    const apiResponse: ApiResponse = {
      statusCode: 200,
      message: 'Upload successful',
      data: fakeSimpleFormDataResponse,
      error: null,
    };

    return res(ctx.status(apiResponse.statusCode),ctx.json(apiResponse));
  }),
];