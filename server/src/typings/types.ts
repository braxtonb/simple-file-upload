export interface ApiResponse {
  statusCode: number;
  message: string;
  data: any;
  error: any;
}

export interface FileUploadData {
  firstName: string;
  lastName: string;
  filename: string;
}