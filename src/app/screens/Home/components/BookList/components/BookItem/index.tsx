import { Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

import styles from './styles';

interface Props {
  title: string;
  author: string;
  imageUrl?: any;
}

function BookItem({ title, author, imageUrl }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri:
            imageUrl ||
            'http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg'
        }}
        style={styles.imageStyle}
        resizeMode="cover"
      />
      <View>
        <Text style={[styles.textBasic, styles.titleStyle]}>{title}</Text>
        <Text style={[styles.textBasic, styles.authorStyle]}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
