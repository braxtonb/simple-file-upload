import React from 'react';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import SimpleForm from './';
import FileUploadClient from '../../clients/file-upload-client';
import { createFakeSimpleFormData } from '../../mocks/simple-form-mocks';

class GetSimpleFormElements {
  public static getFirstName = () => {
    return screen.getByLabelText(/first name/i);
  };
  public static getLastName = () => {
    return screen.getByLabelText(/last name/i);
  };
  public static getPhoto = () => {
    return screen.getByLabelText(/photo/i);
  };
  public static getSaveButton = () => {
    return screen.getByRole('button', { name: /^save$/i });
  };
  public static getForm = () => {
    return screen.getByRole('form', { name: /simple form/i });
  };
}

describe('SimpleForm', () => {
  const uploadSimpleFormData = jest
    .spyOn(FileUploadClient, 'uploadSimpleFormData')
    .mockName('uploadSimpleFormData');

  beforeEach(() => {
    uploadSimpleFormData.mockClear();
  });

  it('should render', () => {
    render(<SimpleForm />);
  });

  it('should not submit an incomplete form', async () => {
    render(<SimpleForm />);

    await waitFor(async () => {
      fireEvent.click(GetSimpleFormElements.getSaveButton());
    });

    expect(uploadSimpleFormData).toHaveBeenCalledTimes(0);
  });

  it('should submit a completed form', async () => {
    const fakeSimpleFormData = createFakeSimpleFormData();
    const fakeUploadSimpleFormDataResponse = {
      firstName: fakeSimpleFormData.firstName,
      lastName: fakeSimpleFormData.lastName,
      filename: 'example.png',
    };

    render(<SimpleForm />);

    const formElement = GetSimpleFormElements.getForm() as HTMLFormElement;
    const formElementReset = jest
      .spyOn(formElement, 'reset')
      .mockName('formElementReset')
      .mockImplementation(() => null);
    uploadSimpleFormData.mockResolvedValue(fakeUploadSimpleFormDataResponse);

    await waitFor(async () => {
      fireEvent.change(GetSimpleFormElements.getFirstName(), {
        target: { value: fakeSimpleFormData.firstName },
      });
    });

    await waitFor(async () => {
      fireEvent.change(GetSimpleFormElements.getLastName(), {
        target: { value: fakeSimpleFormData.lastName },
      });
    });

    await waitFor(async () => {
      fireEvent.change(GetSimpleFormElements.getPhoto(), {
        target: { files: [fakeSimpleFormData.photo] },
      });
    });

    await waitFor(async () => {
      fireEvent.click(GetSimpleFormElements.getSaveButton());
    });

    expect(uploadSimpleFormData).toHaveBeenCalledWith(
      new FormData(formElement),
    );
    expect(formElementReset).toHaveBeenCalledTimes(1);
  });
});
