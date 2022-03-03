import axios, { AxiosInstance } from 'axios';

export class Api {
  api: AxiosInstance;

  constructor() {
    const api: AxiosInstance = axios.create({
      baseURL: `http://localhost:3333`,
    });

    this.api = api;
    console.log(api)
  }

  myHeader() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    return config;
  }
}
