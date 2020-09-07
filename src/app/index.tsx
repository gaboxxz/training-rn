import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Image } from 'react-native';

import * as routes from '@constants/routes';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import BookDetail from './screens/Home/screens/BookDetail';
import HomeScreen from './screens/Home';
import styles from './styles';
import backgroundImage from './assets/bc_nav_bar@2x.png.png';
import backButtonImage from './assets/ic_back@1x.png.png';
import Navigation from './components';
import RootNavigator from './components';

const Stack = createStackNavigator();

const screenOpts: StackHeaderOptions = {
  headerStyle: { height: 100, backgroundColor: 'red' },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 25
  },
  headerBackground: () => <Image source={backgroundImage} style={styles.imageStyle} />,
  headerBackImage: () => <Image source={backButtonImage} />
};

function App() {
  return (
    <>
      <SafeAreaView style={styles.topAreaView} />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
export default App;
