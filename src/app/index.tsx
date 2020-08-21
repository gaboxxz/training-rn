import { SafeAreaView } from 'react-native';
import React from 'react';

import Home from './screens/Home';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
