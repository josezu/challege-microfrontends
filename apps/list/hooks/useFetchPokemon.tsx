import { ITransformData, transformData } from '@list/utils/transformData';
import { IRequestEvent, WindowEventService, WindowEvents } from '@shared/ui';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetchPokemon = () => {
  const [items, setPosts] = useState<Array<ITransformData>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(0);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_POKEMON_URL}/pokemon`;

      const responsePokemons = await axios.get(url, {
        params: { offset, limit: 3 },
      });

      const promises = responsePokemons.data.results.map((pokemon: any) => {
        return axios.get(pokemon.url);
      });

      Promise.all(promises).then((responses) => {
        const data1 = responses[0].data;
        const data2 = responses[1].data;
        const data3 = responses[2].data;

        const combinedData = [];

        combinedData.push(transformData(data1));
        combinedData.push(transformData(data2));
        combinedData.push(transformData(data3));

        setPosts(combinedData);
      });
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const handleNext = (event: Event) => {
    const {
      detail: { request },
    } = event as CustomEvent<IRequestEvent>;
    if (request) {
      setPosts([]);
      setOffset((prevOffset) => prevOffset + 3);
    }
  };

  useEffect(() => {
    WindowEventService.subscribe(WindowEvents.REQUEST, handleNext);

    return () => {
      WindowEventService.unsubscribe(WindowEvents.REQUEST, handleNext);
    };
  }, []);

  return { items, isLoading, error };
};
