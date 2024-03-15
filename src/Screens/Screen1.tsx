import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  const navigateToScreen2 = () => {
    navigation.navigate('screen2');
  };
  return (
    <View>
      <Text>Screen1</Text>
      <Button title="move to screen 2" onPress={navigateToScreen2} />
    </View>
  );
};

export default Screen1;
