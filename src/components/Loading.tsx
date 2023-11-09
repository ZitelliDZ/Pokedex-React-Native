import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size={50} color={'grey'} />
      <Text>Carregando...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
