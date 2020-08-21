import React from 'react';
import { View, Text, Image } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

function BookDetail({ route }: any) {
  // const navigation: any = useNavigation();
  const { book } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.bookInfoContainer}>
        <Image
          style={styles.image}
          source={{
            uri: book.imageUrl
          }}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.bookTitleText}>{book.title}</Text>
          <Text style={styles.statusText}>Available</Text>
          <Text style={styles.bookInfoText}>{book.author}</Text>
          <Text style={styles.bookInfoText}>{book.year}</Text>
          <Text style={styles.bookInfoText}>{book.genre}</Text>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={[styles.buttonDefault, styles.addToWishListButton]}>
          <Text style={styles.buttonText}>ADD TO WHISHLIST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonDefault, styles.rentButton]}>
          <Text>RENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BookDetail;
