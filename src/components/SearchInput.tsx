import React, {useEffect, useState} from 'react';
import {StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebaunceValue} from '../hooks/useDebounceValue';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebaunce: (value: string) => void;
}

const SearchInput = ({style, onDebaunce}: Props) => {
  const [textValue, setTextValue] = useState('');

  const debaunceValue = useDebaunceValue(textValue, 500);

  useEffect(() => {
    onDebaunce(debaunceValue);
  }, [debaunceValue]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar Pokemon"
          style={styles.textInput}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" size={26} color={'grey'} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
    flex: 1,
  },
});
