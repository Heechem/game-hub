import axios from 'axios';

export interface FetchResponses<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7c1cbc0d9af24f6cb6293c4c41a71183',
  },
});
