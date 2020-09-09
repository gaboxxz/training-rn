import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

import * as routes from '@constants/routes';
import HomeScreen from '../../screens/Home';
import BookDetail from '../../screens/Home/screens/BookDetail';
import backgroundImage from './assets/bc_nav_bar.png';
import backButtonImage from './assets/ic_back.png';
import styles from './styles';

const Stack = createStackNavigator();

const defaultHeaderOpts: StackHeaderOptions = {
  headerStyle: { height: 100 },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 25
  },
  headerBackground: () => <Image source={backgroundImage} style={styles.imageStyle} />,
  headerBackImage: () => (
    <Image source={backButtonImage} resizeMode="contain" style={styles.headerBackImage} />
  )
};

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={routes.Home} screenOptions={defaultHeaderOpts}>
      <Stack.Screen name={routes.Home} component={HomeScreen} />
      <Stack.Screen name={routes.BookDetail} component={BookDetail} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
