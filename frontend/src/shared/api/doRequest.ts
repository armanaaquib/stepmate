import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

type ResponseErrors = { code: number; message: string }[];

const doRequest = <T>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    axios
      .request(config)
      .then((response: AxiosResponse) => {
        resolve(response.data.data as T);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          reject(error.response.data.errors as ResponseErrors);
        }
        reject([]);
      });
  });
};

export default doRequest;
