import React from 'react';
import { View, Text } from 'react-native';

import { RootStackParamList } from '@interfaces/navigation';
import { RouteProp } from '@react-navigation/native';
import * as routes from '@constants/routes';
import CommentsTable from './components/CommentsTable';

type BookDetailScreenRouteProp = RouteProp<RootStackParamList, typeof routes.BookDetail>;
interface Props {
  route: BookDetailScreenRouteProp;
}
function BookDetail({ route }: Props) {
  const { book } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <CommentsTable />
    </View>
  );
}

export default BookDetail;
