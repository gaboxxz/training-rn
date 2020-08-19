import { SafeAreaView, View } from 'react-native';
import React from 'react';
import BookItem from '@app/screens/Home/components/BookItem';
import Styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.mainViewStyle}>
        <BookItem
          title="The lord of the rings"
          author="JRR Tolkien"
          imageUrl={{ uri: 'https://picsum.photos/60/100' }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
