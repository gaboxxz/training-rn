import { StyleSheet } from 'react-native';
import { lightBlue, secondaryBlue } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  mainViewStyle: {
    flex: 1
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    backgroundColor: lightBlue
  },
  topAreaView: {
    flex: 0,
    backgroundColor: secondaryBlue
  }
});
