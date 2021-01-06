export interface IError {
  code?: string,
  message?: string,
  dev_message?: string,
}

export interface IResponse<T> {
  success: boolean,
  data: T | null,
  error: IError,
}
