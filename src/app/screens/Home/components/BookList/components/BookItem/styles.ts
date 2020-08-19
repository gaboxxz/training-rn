import { StyleSheet } from 'react-native';

import { white, shadow, textColor } from '@constants/colors';

export default StyleSheet.create({
  container: {
    padding: 10,
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
    height: 100,
    width: '100%',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textBasic: {
    color: textColor,
    marginLeft: 10,
    flex: 1
  },
  authorStyle: {
    fontSize: 14
  },
  titleStyle: {
    fontWeight: '400',
    fontSize: 20
  },
  imageStyle: {
    width: 43,
    height: 60
  }
});
