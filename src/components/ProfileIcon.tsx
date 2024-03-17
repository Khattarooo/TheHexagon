import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {useUserContext} from '../context/UserContext';

const ProfileIcon: React.FC = () => {
  const {username, email, phoneNumber} = useUserContext();
  const navigation = useNavigation();

  const handlePress = () => {
    if (username && email && phoneNumber) {
      navigation.navigate('ProfileScreen');
    } else {
      navigation.navigate('SignUp');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <FontAwesomeIcon icon={faUser} size={25} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileIcon;
