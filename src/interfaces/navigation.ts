import { RouteProp, NavigationProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Book } from '@interfaces/books';
import * as routes from '@constants/routes';

export type RootStackParamList = {
  [routes.Home]: undefined;
  [routes.BookDetail]: { book: Book };
};

export type Props = StackScreenProps<RootStackParamList, typeof routes.Home>;

export type RootTabParamList = {
  Library: undefined;
  Wishlist: undefined;
  Suggest: undefined;
  Rentals: undefined;
};

export interface DefaultTabNavigationProp {
  navigation: NavigationProp<Record<string, object | undefined>>;
  route: RouteProp<Record<string, object | undefined>, string>;
}
