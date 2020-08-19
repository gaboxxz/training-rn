import { FlatList, ListRenderItem } from 'react-native';
import React from 'react';

import BookItem from '@app/screens/Home/components/BookItem';
import bookListService from '@services/bookService';
import styles from './styles';

interface Props {
  id: string;
  title: string;
  author: string;
  imageUrl: object;
}

function BookList() {
  const renderItem: ListRenderItem<Props> = ({ item }) => (
    <BookItem title={item.title} detail={item.author} imageSource={item.imageUrl} />
  );
  const books = bookListService;

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={books}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default BookList;
