import {useEffect, useState} from 'react';

export const useDebaunceValue = (input: string = '', time: number = 500) => {
  const [debaunceValue, setDebaunceValue] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebaunceValue(input);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return debaunceValue;
};
