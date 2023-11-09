import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {top} = useSafeAreaInsets();
  const {simplePokemon, color} = route.params;

  const {isLoading, pokemon} = usePokemon(simplePokemon.id);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: color,
          ...styles.headerContainer,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={{...styles.backButton, top: top + 10}}>
          <Icon name="arrow-back-outline" size={60} color="white" />
        </TouchableOpacity>
        <Text style={{...styles.pokemonName, top: top + 80}}>
          {simplePokemon.name + '\n'}#{simplePokemon.id}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage uri={simplePokemon.url} style={styles.pokemonImage} />
      </View>

      {isLoading ? (
        <View style={{...styles.activityIndicator}}>
          <ActivityIndicator size={50} color={color} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 400,
    zIndex: 999,

    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    left: 27,
    alignSelf: 'flex-start',
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -40,
    opacity: 0.8,
  },
  pokemonImage: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: -30,
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
