import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View style={{...styles.container, marginTop: 430}}>
        <Text style={{...styles.title}}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => {
            return (
              <Text
                style={{...styles.regularText, marginRight: 10}}
                key={type.name}>
                {type.name}
              </Text>
            );
          })}
        </View>
        <Text style={{...styles.title}}>Peso</Text>
        <Text style={{...styles.regularText}}>{pokemon.weight} lb</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{...styles.title, marginHorizontal: 20}}>Sprites</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.basicSprite}
          />
          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.basicSprite}
          />
        </ScrollView>
      </View>

      <View style={{...styles.container, marginTop: 20}}>
        <Text style={{...styles.title}}>Habilidades Base</Text>

        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => {
            return (
              <Text
                style={{...styles.regularText, marginRight: 10}}
                key={ability.name}>
                {ability.name}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={{...styles.container, marginTop: 20}}>
        <Text style={{...styles.title}}>Movimientos</Text>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => {
            return (
              <Text
                style={{...styles.regularText, marginRight: 10}}
                key={move.name}>
                {move.name}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={{...styles.container, marginTop: 20}}>
        <Text style={{...styles.title}}>Stats</Text>

        <View>
          {pokemon.stats.map((item, i) => {
            return (
              <View style={{flexDirection: 'row'}} key={item.stat.name + i}>
                <Text style={{...styles.regularText, width: 150}}>
                  {item.stat.name}
                </Text>
                <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                  {item.base_stat}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={{marginTop: 20, alignItems: 'center'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
        </ScrollView>
      </View>
      <View style={{height: 100}} />
    </ScrollView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  regularText: {
    fontSize: 17,
    color: 'black',
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
