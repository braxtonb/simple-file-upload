import type { FileUploadData } from '../typings/types';

class FileUploadService {
  private localData: Record<string, FileUploadData> = {};

  public saveFile = (fileUploadData: FileUploadData) => {
    console.log('saving file...');
    this.localData[fileUploadData.filename] = fileUploadData;
    console.log(`saved file to ${fileUploadData.filename}`);
    console.log(JSON.stringify(this.localData, null, 2));
  };
}

export default FileUploadService;
