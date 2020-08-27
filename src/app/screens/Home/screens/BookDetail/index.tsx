import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { RootStackParamList } from '@interfaces/navigation';
import { RouteProp } from '@react-navigation/native';
import * as routes from '@constants/routes';
import CommentsTable from './components/CommentsTable';
import styles from './styles';

type BookDetailScreenRouteProp = RouteProp<RootStackParamList, typeof routes.BookDetail>;
interface Props {
  route: BookDetailScreenRouteProp;
}
function BookDetail({ route }: Props) {
  const { book } = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, styles.bookContentContainer]}>
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
      <View style={[styles.contentContainer, styles.bookCommentsContainer]}>
        <CommentsTable />
      </View>
    </View>
  );
}

export default BookDetail;
