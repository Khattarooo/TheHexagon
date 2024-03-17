import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import {useUserContext} from '../context/UserContext';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUserCircle,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import PenIcon from '../components/PenIcon';

const ProfileScreen = () => {
  const {username, email, phoneNumber} = useUserContext();
  const navigation = useNavigation();

  const penIcon = () => {
    return <PenIcon />;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: penIcon,
    });
  }, [navigation]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../assets/w2.jpg')}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.label}>
          <FontAwesomeIcon icon={faUserCircle} size={25} color="white" />{' '}
          Username:
        </Text>
        <Text style={styles.text}>{username}</Text>

        <Text style={styles.label}>
          <FontAwesomeIcon icon={faMailBulk} size={25} color="white" /> Email:
        </Text>
        <Text style={styles.text}>{email}</Text>

        <Text style={styles.label}>
          <FontAwesomeIcon icon={faPhone} size={25} color="white" /> Phone
          Number:
        </Text>
        <Text style={styles.text}>{phoneNumber}</Text>

        <Button title="Go Back" onPress={handleGoBack} color="red" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
    backgroundColor: 'white',
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  imageBackground: {
    flex: 1,
  },
});

export default ProfileScreen;
