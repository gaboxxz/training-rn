import { BookDetail } from '@constants/routes';

import { Book } from '@interfaces/books';

export type RootStackParamList = {
  Home: undefined;
  [BookDetail]: { book: Book };
};
