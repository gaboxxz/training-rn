import { Text, View, Image } from 'react-native';
import React from 'react';
import { BookComment } from '@interfaces/books';
import maleUserImage from './assets/img_user1@3x.png.png';
import femaleUserImage from './assets/img_user2@3x.png.png';
import styles from './styles';

interface Props {
  comment: BookComment;
}
function CommentItem({ comment }: Props) {
  return (
    <View style={styles.bookCommentContainer}>
      <Image
        source={comment.gender === 'F' ? femaleUserImage : maleUserImage}
        resizeMode="cover"
        style={styles.bookCommentImage}
      />
      <View style={styles.bookCommentTextContainer}>
        <Text style={styles.bookCommentAuthor}>{comment.author}</Text>
        <Text style={styles.bookCommentText}>{comment.text}</Text>
      </View>
    </View>
  );
}

export default CommentItem;
