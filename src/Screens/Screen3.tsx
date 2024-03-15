import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Screen3 = () => {
  const navigate = useNavigation();
  const navigateToScreen3 = () => {
    navigate.push('screen3');
  };
  return (
    <View>
      <Text>Screen3</Text>
      <Button title="move to screen 3" onPress={navigateToScreen3} />
    </View>
  );
};

export default Screen3;
