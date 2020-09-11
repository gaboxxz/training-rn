import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  imageSource: ImageSourcePropType;
  resizeMode: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center' | undefined;
  onPress: Function;
}
function CustomHeaderButton({ imageSource, resizeMode, onPress }: Props) {
  return (
    <TouchableOpacity {...onPress}>
      <Image source={imageSource} resizeMode={resizeMode} style={styles.headerIconStyle} />
    </TouchableOpacity>
  );
}

export default CustomHeaderButton;
