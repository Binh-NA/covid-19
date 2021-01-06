import { IResponse } from "./response.module";

export interface ICallAPI {
  method: string;
  url: string;
  args: any;
}

export interface IAPIWrapper {
  get:  <T,>(url: string, args: object | undefined | null) => Promise<IResponse<T>>;
  post: <T,>(url: string, args: object) => Promise<IResponse<T>>;
}
