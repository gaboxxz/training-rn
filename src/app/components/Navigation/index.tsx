import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DefaultTabNavigationProp } from '@interfaces/navigation';

import * as routes from '@constants/routes';
import BookDetail from '@app/screens/Home/screens/BookDetail';
import { secondaryBlue, grey } from '@constants/colors';
import CustomHeaderButton from '@app/components/CustomHeaderButton';
import HomeScreen from '../../screens/Home';
import backgroundImage from './assets/bc_nav_bar.png';
import backButtonImage from './assets/ic_back.png';
import notificationsIconImage from './assets/ic_notifications.png';
import searchIconImage from './assets/ic_search.png';
import styles from './styles';
import Test from '../../screens/test';
import iconActiveLibrary from './assets/tabBar/ic_library_active.png';
import iconLibrary from './assets/tabBar/ic_library.png';
import icWishList from './assets/tabBar/ic_wishlist.png';
import icWishListActive from './assets/tabBar/ic_wishlist_active.png';
import icSuggest from './assets/tabBar/ic_add_new.png';
import icSuggestActive from './assets/tabBar/ic_add_new_active.png';
import icRentals from './assets/tabBar/ic_myrentals.png';
import icRentalsActive from './assets/tabBar/ic_myrentals_active.png';

const defaultHeaderOpts: StackHeaderOptions = {
  headerStyle: { height: 100 },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 25
  },
  headerBackground: () => <Image source={backgroundImage} style={styles.imageStyle} />,
  headerBackImage: () => (
    <Image source={backButtonImage} resizeMode="contain" style={styles.headerBackImage} />
  )
};

const tabHeaderOptions = ({ route }: DefaultTabNavigationProp) => {
  const actualRoute = getFocusedRouteNameFromRoute(route);
  return {
    ...defaultHeaderOpts,
    headerTitle: getFocusedRouteNameFromRoute(route),
    headerLeft: () => (
      <CustomHeaderButton imageSource={notificationsIconImage} resizeMode="contain" onPress={() => null} />
    ),
    headerRight: () =>
      // TODO: Fix compare undefined. The actual route comes empty when the tab loads for the first time
      (actualRoute === routes.Home || actualRoute === undefined) && (
        <CustomHeaderButton imageSource={searchIconImage} resizeMode="contain" onPress={() => null} />
      )
  };
};

interface TabBarIconProps {
  focused: boolean;
}
const tabScreenOptions = ({ route }: DefaultTabNavigationProp): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }: TabBarIconProps) => {
    let image = null;
    switch (route.name) {
      case routes.Home:
        image = focused ? iconActiveLibrary : iconLibrary;
        break;
      case routes.Wishlist:
        image = focused ? icWishListActive : icWishList;
        break;
      case routes.Suggest:
        image = focused ? icSuggestActive : icSuggest;
        break;
      case routes.Rentals:
        image = focused ? icRentalsActive : icRentals;
        break;
      default:
        image = null;
    }

    return <Image source={image} resizeMode="contain" style={styles.tabIconImage} />;
  }
});
const TabNavigator = createBottomTabNavigator();

function TabNavigation() {
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: secondaryBlue,
        inactiveTintColor: grey,
        tabStyle: { paddingTop: 5 }
      }}
      screenOptions={tabScreenOptions}>
      <TabNavigator.Screen name={routes.Home} component={HomeScreen} />
      <TabNavigator.Screen name={routes.Wishlist} component={Test} />
      <TabNavigator.Screen name={routes.Suggest} component={Test} />
      <TabNavigator.Screen name={routes.Rentals} component={Test} />
    </TabNavigator.Navigator>
  );
}

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.Home} component={TabNavigation} options={tabHeaderOptions} />
      <Stack.Screen name={routes.BookDetail} component={BookDetail} options={defaultHeaderOpts} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
