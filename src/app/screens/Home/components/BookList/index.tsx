import { FlatList, ListRenderItem, View } from 'react-native';
import React from 'react';

import { bookList } from '@services/bookService';
import BookItem from './components/BookItem';
import styles from './styles';
import { Book } from './interfaces';

function BookList() {
  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <BookItem title={item.title} author={item.author} imageUrl={item.imageUrl} />
  );
  const idExtractor = (item: Book) => `${item.id}`;
  return (
    <View style={styles.contentContainer}>
      <FlatList style={styles.bookList} data={bookList} renderItem={renderItem} keyExtractor={idExtractor} />
    </View>
  );
}

export default BookList;
