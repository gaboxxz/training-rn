import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Book } from '../../interfaces';

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail', { book })}>
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
