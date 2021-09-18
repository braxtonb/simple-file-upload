export interface SimpleFormData {
  firstName: string;
  lastName: string;
  photo: File;
}

export interface SimpleFormDataResponse {
  firstName: string;
  lastName: string;
  filename: string;
}

export interface ApiResponse {
  statusCode: number;
  message: string;
  data: any;
  error: any;
}
