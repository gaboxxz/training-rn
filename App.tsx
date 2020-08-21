import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookDetail from '@app/screens/BookDetail';
import HomeScreen from './src/app';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
