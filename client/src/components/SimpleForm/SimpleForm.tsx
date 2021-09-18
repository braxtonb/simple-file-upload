import React, { useState } from 'react';
import FileUploadClient from '../../clients/file-upload-client';
import './SimpleForm.css';

const INITIAL_FILE: string = '';
const INITIAL_FILE_PATH: string = '';

const SimpleForm: React.VFC = () => {
  const [file, setFile] = useState<string>(INITIAL_FILE);
  const [filePath, setFilePath] = useState<string>(INITIAL_FILE_PATH);

  /**
   * Handlers
   */
  const _handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(event.currentTarget);

    if (!_isValidForm(formData)) {
      // form is invalid
      // console.warn('invalid form')
      return;
    }

    try {
      const { filename } = await FileUploadClient.uploadSimpleFormData(
        formData,
      );
      const filePathURL = `http://localhost:4000/media/${filename}`;

      setFilePath(filePathURL);
      console.log('successfully uploaded form! clearing form...');
      currentTarget.reset();
    } catch (error) {
      console.error('error uploading form', error);
    }
  };

  const _handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files?.length) {
      // console.warn('Unable to preview selected file');
      return;
    }

    if (!URL.createObjectURL) {
      // console.warn('URL.createObjectURL is undefined');
      return;
    }

    setFile(URL.createObjectURL(files[0]));
  };

  /**
   * Getters / setters
   */
  const _isValidForm = (formData: FormData): boolean => {
    const fields = ['firstName', 'lastName', 'photo'];
    const missingFields = [];

    for (const field of fields) {
      if (!formData.has(field) || !formData.get(field)) {
        missingFields.push(field);
      }
    }

    return missingFields.length === 0;
  };

  return (
    <div className="container">
      {file ? (
        <img className="img-preview" src={file} alt="File goes here" />
      ) : (
        <div className={`img-preview ${!file && 'img-preview__empty'}`}>Image preview here</div>
      )}

      <form className="form" aria-label="simple form" onSubmit={_handleSubmit}>
        <label className="input-label" htmlFor="firstName">
          First name
        </label>
        <input
          className="input-text"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Fred"
        />
        <label className="input-label" htmlFor="lastName">
          Last name
        </label>
        <input
          style={{ backgroundImage: file }}
          className="input-text"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Flintstone"
        />
        <label className="input-label" htmlFor="photo">
          Photo
        </label>
        <input
          className="input-file"
          type="file"
          id="photo"
          name="photo"
          onChange={_handleFileChange}
        />

        <button className="button-submit">Save</button>
      </form>

      {filePath && (
        <p className="file-path">
          The file is now hosted here:
          <br />
          <a
            className="file-path__link"
            href={filePath}
            target="_blank"
            rel="noreferrer"
          >
            {filePath}
          </a>
        </p>
      )}
    </div>
  );
};

export default SimpleForm;
