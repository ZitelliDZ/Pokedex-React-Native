import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import { PokemonPaginatorResponse, Result, SimplePokemon } from "../interfaces/pokemonInterfaces";

export const useSearchPokemon = () => {
  const [isFeching, setIsFeching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );

  const loadPokemons = async () => {
    setIsFeching(true);
    const res = await pokemonApi.get<PokemonPaginatorResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200',
    );

    mapPokemonsListToSimplePokemon(res.data.results);
    setIsFeching(false);
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
    setSimplePokemonList(newPokemonList);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList,
    isFeching,
    loadPokemons,
  };
};
