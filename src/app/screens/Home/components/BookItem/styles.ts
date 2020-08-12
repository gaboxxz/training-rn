import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    borderColor: 'white',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 0.8,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    backgroundColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 350,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  titleStyle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailStyle: {},
  textsView: {
    marginLeft: 10,
    flex: 1,
  },
  imageStyle: {
    width: 45,
    height: 60,
  },
});
