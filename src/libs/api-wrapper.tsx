import { IResponse } from "../types/apis/response.module";
import { IAPIWrapper, ICallAPI } from "../types/apis/api-wrapper.module";

export const convertParams = (param: any): string => {
  if (!param) {
    return "";
  }

  return Object.keys(param)
    .map((k) => {
      return encodeURIComponent(k) + "=" + encodeURIComponent(param[k]);
    })
    .join("&");
};

const GetAPI = <T,>({ method, url, args }: ICallAPI): Promise<IResponse<T>> => {
  const _response: IResponse<T> = {
    success: false,
    data: null,
    error: {},
  };

  return new Promise(
    (
      resolve: (response: IResponse<T>) => void,
      reject: (error: TypeError) => void,
    ) => {
      fetch(url + (args ? `?${convertParams(args)}` : ""), {
        method: method,
        headers: {
          "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
        },
      })
      .then((response) => {
        response.json().then((resThen) => {
          _response.success = true;
          _response.data = resThen;
          _response.error = {};
          resolve(_response);
        }).catch((err: TypeError) => {
          reject(err);
        });
      })
      .catch((error: TypeError) => {
        reject(error);
      });
    },
  );
};

const PostAPI = <T,>({ method, url, args }: ICallAPI): Promise<IResponse<T>> => {
  const _response: IResponse<T> = {
    success: false,
    data: null,
    error: {},
  };

  return new Promise (
    (
      resolve: (response: IResponse<T>) => void,
      reject: (error: TypeError) => void,
    ) => {
      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "X-Access-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
        },
        body: args ? JSON.stringify(args) : null,
      })
      .then((response) => {
        response.json().then((resThen) => {
          _response.success = true;
          _response.data = resThen;
          _response.error = {};
          resolve(_response);
        }).catch((err: TypeError) => {
          reject(err);
        });
      })
      .catch((error: TypeError) => {
        reject(error);
      });
    },
  );
};

export const APIWrapper: IAPIWrapper = {
  get: (url, args) =>
    GetAPI({
      method: "GET",
      url,
      args,
    }),
  post: (url, args) =>
    PostAPI({
      method: "POST",
      url,
      args,
    }),
};
