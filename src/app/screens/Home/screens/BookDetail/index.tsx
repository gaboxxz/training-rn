import React from 'react';
import { View, Text, Button, Image } from 'react-native';

function BookDetail({ route, navigation }: any) {
  // const navigation: any = useNavigation();
  const { book } = route.params;
  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Image
        source={{
          uri: book.imageUrl
        }}
        resizeMode="cover"
      />
      <View>
        <Button title="Go home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

export default BookDetail;
