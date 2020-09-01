import React from 'react';
import { SafeAreaView, Image } from 'react-native';

import * as routes from '@constants/routes';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import BookDetail from './screens/Home/screens/BookDetail';
import HomeScreen from './screens/Home';
import styles from './styles';

import Test from './screens/test';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={styles.topAreaView} />
        <SafeAreaView style={styles.container}>
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: {
                fontSize: 20
              },
              tabStyle: { justifyContent: 'center' }
            }}>
            <Tab.Screen name="Library" component={HomeScreen} />
            <Tab.Screen name="Profile" component={Test} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}
export default App;
