import { StyleSheet } from 'react-native';

import { lightBlue } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: lightBlue,
    flex: 1
  },
  bookList: {
    flexGrow: 1,
    width: '100%',
    marginBottom: 10,
    marginTop: 20
  }
});
