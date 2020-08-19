import { Text, View, TouchableOpacity, Image } from 'react-native';

import React from 'react';
import styles from './styles';

interface Props {
  title: string;
  detail: string;
  imageSource: object;
}
function BookItem({ title, detail, imageSource }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageSource} style={styles.imageStyle} resizeMode="cover" />
      <View style={styles.textsView}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.detailStyle}>{detail}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
