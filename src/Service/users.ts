import { User } from '../domain/Users';
import { Api } from './api';

type Stacks = {
  language: string;
  framework: string;
}

class ProductService extends Api {
  /**
   * @author Tony Silva
   * @Params url
   * @return Objects Users
   */
  async getAllUsers(url: string) {
    const config = this.myHeader();
    const response = await this.api.get(`${url}`, {
      ...config,
    });

    return response;
  }

  async getUserById(url: string) {
    const config = this.myHeader();
    const response = await this.api.get(`${url}`, {
      ...config,
    });

    return response;
  }

  async saveUser(
    url: string,
    params: {
      nome: string;
      email: string;
      telefone: string;
      stacks: Array<Stacks>;
    },
  ) {
    const config = this.myHeader();
    const response = await this.api.post(`${url}`, params, {
      ...config,
    });

    return response;
  }

  async updateUser(url: string, id: number, params: User) {
    const config = this.myHeader();
    const response = await this.api.put(`${url}/${id}`, params, {
      ...config,
    });

    return response;
  }

  async deleteUser(user: string) {
    const config = this.myHeader();
    const response = await this.api.delete(`${user}`, {
      ...config,
    });

    return response;
  }
}

export const userService = new ProductService();
