import React from 'react';
import { View, Text } from 'react-native';

function BookDetail({ route }: any) {
  const { book } = route.params;
  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
    </View>
  );
}

export default BookDetail;
