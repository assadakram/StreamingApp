import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieType } from '../types';


const useFetchSnippet = () => {
const url = 'https://api.pastecode.io/anon/raw-snippet/4owen59r?raw=inline&api=true&ticket=21e41282-407e-419e-a6a1-707bac295d01';
  const [data, setData] = useState<MovieType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError("Fetch Failed");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchSnippet;
