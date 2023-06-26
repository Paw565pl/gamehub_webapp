import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import ApiClient from "../services/ApiClient";

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

      ApiClient.get<T[]>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
        .then(({ data }) => setData(data))
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
