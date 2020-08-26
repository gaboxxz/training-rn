import { FlatList, ListRenderItem, View } from 'react-native';
import React from 'react';

import { bookList } from '@services/bookService';
import { Book } from '@interfaces/books';
import BookItem from './components/BookItem';
import styles from './styles';

function BookList() {
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookItem book={item} />;
  const idExtractor = (item: Book) => `${item.id}`;
  return (
    <View style={styles.contentContainer}>
      <FlatList style={styles.bookList} data={bookList} renderItem={renderItem} keyExtractor={idExtractor} />
    </View>
  );
}

export default BookList;
