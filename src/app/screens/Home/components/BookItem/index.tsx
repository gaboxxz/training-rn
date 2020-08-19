import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import styles from './styles';

interface Props {
  title: string;
  author: string;
  imageUrl: object;
}
function BookItem({ title, author, imageUrl }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageUrl} style={styles.imageStyle} resizeMode="cover" />
      <View>
        <Text style={[styles.textBasic, styles.titleStyle]}>{title}</Text>
        <Text style={[styles.textBasic, styles.authorStyle]}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
