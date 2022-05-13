import { useEffect, useState } from 'react';
import { IProduct, IRootObject } from './models';

export const API = 'https://teknasyon.netlify.app/.netlify/functions/products';

const myHeaders = new Headers();
myHeaders.append('X-Access-Token', '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');

export const requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

const useFetch = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response: Response = await fetch(API, requestOptions);

      if (!response.ok) {
        const message = `An error occured: ${response.status}`;
        setError(message);
        setIsLoading(false);
        throw new Error(message);
      }

      const responseData: IRootObject = await response.json();
      setData(responseData.products);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
