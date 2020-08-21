import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';

import BookDetail from './screens/Home/screens/BookDetail';
import HomeScreen from './screens/Home';
import styles from './styles';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={BookDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;
