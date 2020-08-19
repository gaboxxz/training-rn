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
  return (
    <View style={styles.contentContainer}>
      <FlatList data={bookList} renderItem={renderItem} keyExtractor={(item: Book) => `${item.id}`} />
    </View>
  );
}

export default BookList;
