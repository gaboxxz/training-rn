import React, { useState } from 'react';
import { Text, ListRenderItem, View, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { bookCommentList } from '@services/bookService';
import { BookComment } from '@interfaces/books';
import styles from './styles';
import maleUserImage from './assets/img_user1@3x.png.png';
import femaleUserImage from './assets/img_user2@3x.png.png';

function CommentsTable() {
  const [state, setState] = useState({ amount: 2, buttonVisible: true, scrollEnabled: false });

  const handlePress = () => setState({ amount: 5, buttonVisible: false, scrollEnabled: true });
  const keyExtractor = (_item: BookComment, index: number) => `list-item-${index}`;
  const renderItem: ListRenderItem<BookComment> = ({ item }) => (
    <View style={styles.bookCommentContainer}>
      <Image
        source={item.gender === 'F' ? femaleUserImage : maleUserImage}
        resizeMode="cover"
        style={styles.bookCommentImage}
      />
      <View style={styles.bookCommentTextContainer}>
        <Text style={styles.bookCommnetAuthor}>{item.author}</Text>
        <Text style={styles.bookCommentText}>{item.text}</Text>
      </View>
    </View>
  );
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
        <TouchableOpacity onPress={() => handlePress()}>
          <Text style={styles.viewAllButton}>View All</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
}
export default CommentsTable;
