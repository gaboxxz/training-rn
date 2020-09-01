import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as routes from '@constants/routes';
import { Image } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import BookList from './components/BookList';

import BookDetail from './screens/BookDetail';
import backgroundImage from '../../assets/bc_nav_bar@2x.png.png';
import backButtonImage from '../../assets/ic_back@1x.png.png';
import styles from './styles';

const screenOpts: StackHeaderOptions = {
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 25
  },
  headerStyle: { height: 101 },
  headerBackground: () => <Image source={backgroundImage} style={styles.imageStyle} />,
  headerBackImage: () => <Image source={backButtonImage} />
};

const Stack = createStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator initialRouteName={routes.Home} screenOptions={screenOpts}>
      <Stack.Screen name={routes.Home} component={BookList} />
      <Stack.Screen name={routes.BookDetail} component={BookDetail} />
    </Stack.Navigator>
  );
};

export default Home;
