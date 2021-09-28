import { RequestHandler } from "../adapters/RequestHandler";
import { HttpResponse } from "../protocols/HttpResponse";

export abstract class AbstractUseCases {
  //   private url: string;
  //   private method: string;
  //   private data: any;

  constructor(private url: string, private method: string, private data: any) {}

  async handle(): Promise<HttpResponse> {
    const http = new RequestHandler(this.method, this.url, this.data);
    const response = await http.handle();
    return response;
  }
}
