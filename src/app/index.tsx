<<<<<<< HEAD
import { SafeAreaView } from 'react-native';
import React from 'react';

// import BookItem from '@app/screens/Home/components/BookItem';
import BookList from '@app/screens/Home/components/BookList';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BookList />
=======
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
>>>>>>> 26c42c8d222af6aba694ced1c1ceec18021211bf
    </SafeAreaView>
  );
};

export default App;
