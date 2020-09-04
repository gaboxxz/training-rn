import React, { useState } from 'react';
import { Text, ListRenderItem } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { bookCommentList } from '@services/bookService';
import { BookComment } from '@interfaces/books';
import styles from './styles';
import CommentItem from './components/CommentItem';

function CommentsTable() {
  const [state, setState] = useState({ amount: 2, buttonVisible: true, scrollEnabled: false });

  const handlePress = () => setState({ amount: 5, buttonVisible: false, scrollEnabled: true });
  const keyExtractor = (_item: BookComment, index: number) => `list-item-${index}`;
  const renderItem: ListRenderItem<BookComment> = ({ item }) => <CommentItem comment={item} />;
  return (
    <>
      <FlatList
        style={styles.container}
        data={bookCommentList.slice(0, state.amount)}
        renderItem={renderItem}
        scrollEnabled={state.scrollEnabled}
        showsVerticalScrollIndicator={state.scrollEnabled}
        keyExtractor={keyExtractor}
      />
      {state.buttonVisible ? (
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.viewAllButton}>View All</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
}
export default CommentsTable;
