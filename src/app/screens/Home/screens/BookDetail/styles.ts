import { StyleSheet } from 'react-native';
import { white, secondaryBlue, lightBlue, grey, textColor, green } from '@constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    height: '40%',
    margin: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20
  },
  bookInfoContainer: {
    flexDirection: 'row',
    flex: 1
  },
  image: {
    width: '27%',
    height: '100%'
  },
  buttonDefault: {
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    height: '40%',
    flexGrow: 1,
    justifyContent: 'center'
  },
  buttonsView: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'space-evenly'
  },
  addToWishListButton: {
    borderColor: secondaryBlue,
    borderWidth: 2
  },
  rentButton: {
    borderColor: secondaryBlue,
    borderWidth: 2
  },
  textContainer: {
    flex: 1,
    flexGrow: 1,
    paddingLeft: 30,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
  buttonText: {
    fontWeight: '800',
    color: secondaryBlue
  },
  bookTitleText: {
    fontSize: 25,
    fontWeight: '700'
  },
  statusText: {
    color: green,
    fontSize: 20,
    fontWeight: '500'
  },
  bookInfoText: {
    color: textColor,
    fontSize: 16
  }
});
