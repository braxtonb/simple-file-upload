import faker from 'faker';
import type { SimpleFormData, SimpleFormDataResponse } from '../typings/types';

const _createFakePhoto = (fileContent = faker.lorem.words(5)) => {
  const file = new File([fileContent], 'fake-photo.png', {
    type: 'image/png',
  });

  return file;
};

const _createDefaultFakeSimpleFormData = (): SimpleFormData => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    photo: _createFakePhoto(),
  };
};

export const createFakeSimpleFormData = (
  simpleFormData: Partial<SimpleFormData> = {},
) => {
  return {
    ..._createDefaultFakeSimpleFormData(),
    ...simpleFormData,
  };
};

const _createDefaultFakeSimpleFormDataResponse = (): SimpleFormDataResponse => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    filename: `${Date.now()}-${faker.music.genre()}`,
  };
};

export const createFakeSimpleFormDataResponse = (
  simpleFormDataResponse: Partial<SimpleFormDataResponse> = {},
) => {
  return {
    ..._createDefaultFakeSimpleFormDataResponse(),
    ...simpleFormDataResponse,
  };
};
