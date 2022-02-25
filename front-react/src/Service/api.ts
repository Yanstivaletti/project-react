import axios, { AxiosInstance } from 'axios';

export class Api {
  api: AxiosInstance;

  constructor() {
    const api: AxiosInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });

    this.api = api;
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
