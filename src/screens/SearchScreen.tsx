import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import {useSearchPokemon} from '../hooks/useSearchPokemon';
import {FlatList} from 'react-native';
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {useEffect} from 'react';

const width = Dimensions.get('window').width;

const SearchScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isFeching, simplePokemonList} = useSearchPokemon();

  const [term, setTerm] = useState('');
  const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) return setPokemonsFiltered([]);

    if (isNaN(Number(term))) {
      setPokemonsFiltered(
        simplePokemonList.filter(pokemon =>
          pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(
        pokemon => pokemon.id === term,
      );
      setPokemonsFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isFeching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        //marginTop: top + 10,
      }}>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        {/**<SearchInput /> */}
        <SearchInput
          onDebaunce={value => setTerm(value)}
          style={{
            position: 'absolute',
            zIndex: 999,
            width: '100%',
            top: top + 10,
          }}
        />
      </View>

      <FlatList
        data={pokemonsFiltered}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: width / 2,
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <PokemonCard pokemon={item} />
            </View>
          );
        }}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              top: top + 20,
              marginBottom: 30,
              paddingHorizontal: 20,
              marginTop: top + 50,
            }}>
            Pokedex {term !== '' ? '- ' + term : ''}
          </Text>
        }
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokebolaBackG: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -100,
    right: -100,
    opacity: 0.5,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
