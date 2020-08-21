import { View } from 'react-native';
import React from 'react';

import BookList from '@app/screens/Home/components/BookList';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BookList />
    </View>
  );
};

export default HomeScreen;
