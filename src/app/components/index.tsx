import React from 'react';

import * as routes from '@constants/routes';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Image, Button } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { secondaryBlue } from '@constants/colors';
import Test from '../screens/test';
import BookDetail from '../screens/Home/screens/BookDetail';
import HomeScreen from '../screens/Home';
import backgroundImage from '../assets/bc_nav_bar@2x.png.png';
import backButtonImage from '../assets/ic_back@1x.png.png';
import styles from '../styles';

const screenOpts: StackHeaderOptions = {
  headerStyle: { height: 100, backgroundColor: 'red' },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 25
  },
  headerBackground: () => <Image source={backgroundImage} style={styles.imageStyle} />,
  headerBackImage: () => <Image source={backButtonImage} />,
  headerRight: () => <Button title="hola" onPress={() => null} />
};

const TabNavigator = createBottomTabNavigator();

function TabNavigation() {
  return (
    <TabNavigator.Navigator screenOptions={screenOpts}>
      <TabNavigator.Screen component={Test} name="Tes2t" />
      <TabNavigator.Screen component={HomeScreen} name="Home" />
    </TabNavigator.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={screenOpts}>
      <HomeStack.Screen name={routes.Home} component={TabNavigation} />
      <HomeStack.Screen name={routes.BookDetail} component={BookDetail} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
