import axios, { type AxiosInstance } from 'axios';

const defaultBaseUrl =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: defaultBaseUrl });
  }

  public async getHello(): Promise<string> {
    const response = await this.get('/api');
    return response as string;
  }

  private async get(path: string): Promise<unknown> {
    return this.axiosInstance.get(path).then((response) => response.data);
  }

  private async post(path: string, body: unknown): Promise<unknown> {
    return this.axiosInstance
      .post(path, body)
      .then((response) => response.data);
  }

  private async patch(path: string, body: unknown): Promise<unknown> {
    return this.axiosInstance
      .patch(path, body)
      .then((response) => response.data);
  }

  private async delete(path: string): Promise<unknown> {
    return this.axiosInstance.delete(path).then((response) => response.data);
  }

  public async getTasks(): Promise<string[]> {
    const response = await this.get('/api/tasks/task');
    return response as string[];
  }

  public async updateTaskCategory(id: number, body: unknown): Promise<string> {
    return this.patch(`/api/tasks/${id}/category`, body) as Promise<string>;
  }
}

export default new ApiClient();
