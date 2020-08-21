import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import styles from './styles';
import { Book } from '../../interfaces';

interface Props {
  title: string;
  author: string;
  imageUrl?: string;
}

function BookItem({ title, author, imageUrl }: Book) {
  return (
    <TouchableOpacity style={styles.container}>
      {imageUrl ? (
        <Image
          source={{
            uri: imageUrl
          }}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imageStyle} />
      )}
      <View style={styles.textContainer}>
        <Text style={[styles.textBasic, styles.titleStyle]}>{title}</Text>
        <Text style={[styles.textBasic, styles.authorStyle]}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
