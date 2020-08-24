import React from 'react';
import { View, Text, Button } from 'react-native';

function BookDetail({ route, navigation }: any) {
  const { book } = route.params;
  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <View>
        <Button title="Go home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

export default BookDetail;
