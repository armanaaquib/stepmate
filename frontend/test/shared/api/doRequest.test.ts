import axios, { AxiosRequestConfig } from "axios";

import doRequest from "../../../src/shared/api/doRequest";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("api", () => {
  describe("doRequest", () => {
    it("should resolve response data as given type", () => {
      mockedAxios.request.mockResolvedValue({ data: { data: "data" } });

      const config: AxiosRequestConfig = { url: "/test-url", method: "GET" };
      doRequest<string>(config).then((data) => {
        expect(data).toBe("data");
      });

      expect(mockedAxios.request.mock.calls[0][0]).toStrictEqual(config);
    });

    it("should reject response erros as ResponseErrors", () => {
      const error = {
        response: {
          data: { errors: [{ code: "1000", message: "some error" }] },
        },
      };
      mockedAxios.request.mockRejectedValue(error);

      const config: AxiosRequestConfig = { url: "/test-url", method: "GET" };
      doRequest(config).catch((errors) => {
        expect(errors).toStrictEqual(error.response.data.errors);
      });

      expect(mockedAxios.request.mock.calls[0][0]).toStrictEqual(config);
    });

    it("should reject [] response erros when there is no response", () => {
      mockedAxios.request.mockRejectedValue({});

      const config: AxiosRequestConfig = { url: "/test-url", method: "GET" };
      doRequest(config).catch((errors) => {
        expect(errors).toStrictEqual([]);
      });

      expect(mockedAxios.request.mock.calls[0][0]).toStrictEqual(config);
    });
  });
});
