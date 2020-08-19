import { SafeAreaView, View } from 'react-native';
import React from 'react';

// import BookItem from '@app/screens/Home/components/BookItem';
import BookList from '@app/screens/Home/components/BookList';
import Styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.mainViewStyle}>
        <BookList />
      </View>
    </SafeAreaView>
  );
};

export default App;
