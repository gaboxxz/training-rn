import { loadOptions } from '@babel/core';
import { Home } from '@constants/routes';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  SliderComponent,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { onChange } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

function AuthLoadingScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    setTimeout(() => {
      return navigation.navigate('App');
    }, 10000);
  });

  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Hola</Text>
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingScreen;
