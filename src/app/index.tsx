import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import HomeNavigator from './components/Navigation';

function App() {
  return (
    <>
      <SafeAreaView style={styles.topAreaView} />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
export default App;
