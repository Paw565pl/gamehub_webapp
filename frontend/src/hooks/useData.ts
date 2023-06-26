import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import ApiClient from "../services/ApiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);

      ApiClient.get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then(({ data }) => setData(data.results))
        .catch((err) => {
          if (!(err instanceof CanceledError)) {
            setError(err.message);
          }
        })
        .finally(() => setIsLoading(false));

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
