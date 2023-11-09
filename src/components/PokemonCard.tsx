import React, {useState} from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

interface Props {
  color?: string;
  pokemon: SimplePokemon;
}
const PokemonCard = ({pokemon, color = 'grey'}: Props) => {
  const [bgColor, setBgColor] = useState('grey');

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate('PokemonScreen', {simplePokemon: pokemon, color});
      }}>
      <View>
        <View style={{...styles.cardContainer, backgroundColor: color}}>
          <View>
            <Text style={styles.name}>
              {pokemon.name}
              {'\n' + pokemon.id}
            </Text>
          </View>

          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.url} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    //backgroundColor: 'red',
    height: 120,
    width: width * 0.4,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    overflow: 'hidden',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -20,
    right: -20,
    opacity: 0.6,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: 0,
    right: -5,
    borderRadius: 10,
  },
});
