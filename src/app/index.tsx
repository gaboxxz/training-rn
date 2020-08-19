import { SafeAreaView } from 'react-native';
import React from 'react';

// import BookItem from '@app/screens/Home/components/BookItem';
import BookList from '@app/screens/Home/components/BookList';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BookList />
    </SafeAreaView>
  );
};

export default App;
