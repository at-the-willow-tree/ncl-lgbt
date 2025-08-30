export interface ServiceResponseGetDto<T> {
  status: ServiceResponseStatus;
  results?: number;
  data: {
    data: T;
  };
  message?: string;
  statusCode?: number;
  isOperational?: boolean;
}

export enum ServiceResponseStatus {
  Success = 'success',
  Failure = 'failure',
  Error = 'error',
}

export class FilterOption {
  id: string = '';
  value: string = '';
}
