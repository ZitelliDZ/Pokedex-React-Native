import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginator} from '../hooks/usePokemonPaginator';
import PokemonCard from '../components/PokemonCard';

const width = Dimensions.get('window').width;

const colors = [
  '#FF5733', // Rojo
  '#238F23', // Verde
  '#4169E1', // Azul
  '#e6e600', // Amarillo
  '#FF69B4', // Rosa
  '#FFA500', // Naranja
  '#800080', // Morado
  '#808080', // Gris
  '#8B4513', // Marrón
  '#40E0D0', // Turquesa
  '#EE82EE', // Violeta
  '#87CEEB', // Azul claro
  '#F08080', // Coral
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const {top} = useSafeAreaInsets();

  const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginator();
  let index = 0;

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={{
          ...styles.pokebolaBackG,
        }}
      />

      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
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
                <PokemonCard
                  color={colors[Number(item.id) % 12]}
                  pokemon={item}
                />
              </View>
            );
          }}
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: 30,
              }}>
              Pokedex
            </Text>
          }
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoading ? (
              <ActivityIndicator
                style={{height: 100}}
                size={40}
                color={'grey'}
              />
            ) : (
              <></>
            )
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;
