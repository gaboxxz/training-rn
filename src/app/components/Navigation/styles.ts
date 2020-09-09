import { StyleSheet, Platform } from 'react-native';
import { lightBlue } from '@constants/colors';

export default StyleSheet.create({
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    backgroundColor: lightBlue
  },
  headerBackImage: {
    marginLeft: Platform.OS === 'ios' ? 10 : 0,
    height: 20
  }
});
