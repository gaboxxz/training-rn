import { StyleSheet } from 'react-native';

import { white, shadow, textColor, grey } from '@constants/colors';

export default StyleSheet.create({
  container: {
    margin: 7,
    padding: 10,
    paddingLeft: 20,
    borderColor: white,
    shadowColor: shadow,
    shadowOpacity: 0.2,
    shadowRadius: 0.8,
    shadowOffset: {
      height: 0.5,
      width: 0
    },
    backgroundColor: white,
    borderWidth: 10,
    height: 110,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textContainer: {
    flex: 1
  },
  textBasic: {
    color: textColor,
    marginLeft: 10,
    marginBottom: 8
  },
  authorStyle: {
    fontSize: 16
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  imageStyle: {
    width: '13%',
    height: '100%',
    backgroundColor: grey
  }
});
