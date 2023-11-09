import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import { PokemonPaginatorResponse, Result, SimplePokemon } from "../interfaces/pokemonInterfaces";

export const usePokemonPaginator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const nextPageUrl = useRef(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40',
  );

  const loadPokemons = async () => {
    setIsLoading(true);
    const res = await pokemonApi.get<PokemonPaginatorResponse>(
      nextPageUrl.current,
    );

    nextPageUrl.current = res.data.next;

    mapPokemonsListToSimplePokemon(res.data.results);
    setIsLoading(false);
  };

  const mapPokemonsListToSimplePokemon = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const url2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {
        id,
        name,
        url: url2,
      };
    });
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
    isLoading,
    loadPokemons,
  };
};
