import { StyleSheet } from 'react-native';
import { grey, secondaryBlue } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flexGrow: 0
  },
  viewAllButton: {
    color: secondaryBlue,
    alignSelf: 'center',
    fontSize: 18
  },
  bookCommentContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  bookCommentTextContainer: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: grey,
    borderBottomWidth: 1
  },
  bookCommentImage: {
    height: 60,
    width: 60,
    borderRadius: 40,
    alignSelf: 'flex-start'
  },
  bookCommnetAuthor: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18
  },
  bookCommentText: {
    marginBottom: 10,
    fontSize: 15
  }
});
