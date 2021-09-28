import axios, { AxiosRequestConfig, Method } from "axios";
import { HttpResponse } from "../protocols/HttpResponse";

export class RequestHandler {
  constructor(private readonly method: string, private readonly url: string, private readonly data: any) {}

  async handle(): Promise<HttpResponse> {
    try {
      const options: AxiosRequestConfig = {
        method: this.method as Method,
        url: this.url,
        data: this.data,
      };

      const response = await axios.request(options);

      return { status: response.status, data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          status: error?.response?.status || 403,
          data: error?.response?.data || 403,

        };
      }
      return {
        status: 500,
        data: 'Internal Error',
      };
    }
  }
}
