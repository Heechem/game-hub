import { useEffect, useState } from 'react';
import apiClient from '../Services/api-client';
import { Axios, AxiosRequestConfig, CanceledError } from 'axios';

export interface FetchResponses<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controler = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponses<T>>(endpoint, {
          signal: controler.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;

          setError(err.message);
          setLoading(false);
        });

      return () => controler.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
