import { StyleSheet } from 'react-native';
import { grey } from '@constants/colors';

const SIZE = 60;
export default StyleSheet.create({
  bookCommentContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  bookCommentImage: {
    height: SIZE,
    width: SIZE,
    borderRadius: 40,
    alignSelf: 'flex-start'
  },
  bookCommentTextContainer: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: grey,
    borderBottomWidth: 1
  },
  bookCommentAuthor: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18
  },
  bookCommentText: {
    marginBottom: 10,
    fontSize: 15
  }
});
