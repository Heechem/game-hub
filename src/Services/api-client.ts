import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponses<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axioisInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7c1cbc0d9af24f6cb6293c4c41a71183",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axioisInstance
      .get<FetchResponses<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default APIClient;
