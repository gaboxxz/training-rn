import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import styles from './styles';

interface Props {
  title: string;
  author: string;
  imageUrl?: any;
}

const image = (imageUrl: any) => {
  return imageUrl ? (
    <Image
      source={{
        uri: imageUrl
      }}
      style={styles.imageStyle}
      resizeMode="cover"
    />
  ) : (
    <View style={styles.imageStyle} />
  );
};
function BookItem({ title, author, imageUrl }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      {image(imageUrl)}
      <View>
        <Text style={[styles.textBasic, styles.titleStyle]}>{title}</Text>
        <Text style={[styles.textBasic, styles.authorStyle]}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
