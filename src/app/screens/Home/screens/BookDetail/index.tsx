import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

function BookDetail({ route }: any) {
  const { book } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.bookInfoContainer}>
          <Image
            style={styles.image}
            source={{
              uri: book.imageUrl
            }}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.bookTitleText} numberOfLines={1} ellipsizeMode={'tail'}>
              {book.title}
            </Text>
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
            <Text style={styles.buttonText}>RENT</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer} />
    </View>
  );
}

export default BookDetail;
