class FileUploadClient {
  public static API_URL = 'http://localhost:4000';

  public static uploadSimpleFormData = async (formData: FormData) => {
    try {
      const URL = `${FileUploadClient.API_URL}/api/fileupload`;
      const fetchConfig: RequestInit = {
        method: 'POST',
        body: formData,
      };
      const { data } = await fetch(URL, fetchConfig).then(res => res.json());

      return data;
    } catch (error) {
      console.error('[uploadSimpleFormData] error uploading simple form data', error);

      throw error;
    }
  }
}

export default FileUploadClient;