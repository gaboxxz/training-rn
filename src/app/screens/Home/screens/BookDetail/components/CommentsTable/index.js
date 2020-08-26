import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';

const elements = [
  <Text key="1">Hola</Text>,
  <Text key="2">Como</Text>,
  <Text key="3">Va</Text>,
  <Text key="4">Fin</Text>
];
function CommentsTable() {
  const [state, setState] = useState({ amount: 2, buttonVisible: true });

  const handlePress = () => setState({ amount: 5, buttonVisible: false });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', height: 300 }}>
        <View />
        {elements.slice(0, state.amount)}
      </View>
      {state.buttonVisible ? <Button title="View All" onPress={() => handlePress()} /> : <></>}
    </View>
  );
}
export default CommentsTable;
