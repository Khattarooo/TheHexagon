import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';

const PenIcon: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProfileEditScreen');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <FontAwesomeIcon icon={faPen} size={22} />
      </View>
    </TouchableOpacity>
  );
};

export default PenIcon;
