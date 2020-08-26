import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import * as routes from '@constants/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@interfaces/navigation';
import { Book } from '@interfaces/books';
import styles from './styles';

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const navigation: StackNavigationProp<RootStackParamList, typeof routes.BookDetail> = useNavigation();
  const handlePress = () => navigation.navigate(routes.BookDetail, { book });
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
      {book.imageUrl ? (
        <Image
          source={{
            uri: book.imageUrl
          }}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imageStyle} />
      )}
      <View style={styles.textContainer}>
        <Text style={[styles.textBasic, styles.titleStyle]}>{book.title}</Text>
        <Text style={[styles.textBasic, styles.authorStyle]}>{book.author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
