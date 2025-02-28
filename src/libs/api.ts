import axios, { type AxiosInstance } from 'axios';

export class Api {
  constructor(private baseUrl: string) {}

  public getInstance(): AxiosInstance {
    return axios.create({
      baseURL: this.baseUrl
    });
  }
}
