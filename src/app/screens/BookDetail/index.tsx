import React from 'react';
import { View, Text, Button } from 'react-native';
import { Route, NavigationProp } from '@react-navigation/native';
//TODO: how to set 
interface Props{
  route: any ;
  navigation: any;
}
function BookDetail({ route, navigation }: Props) {
  return (
    <View>
      <Text>{route.params.title}</Text>
      <View>
        <Button title="Go home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
}

export default BookDetail;
