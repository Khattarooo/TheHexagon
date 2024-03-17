import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  Keyboard,
  Text,
  Alert,
} from 'react-native';
import {useUserContext} from '../context/UserContext';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUserCircle,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {useToast} from 'react-native-toast-notifications';

const ProfileEditScreen = () => {
  const {username, email, phoneNumber, setUsername, setEmail, setPhoneNumber} =
    useUserContext();
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const navigation = useNavigation();
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const toast = useToast();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {},
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {},
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleUsernameSubmit = () => {
    emailRef.current?.focus();
  };

  const handleEmailSubmit = () => {
    phoneRef.current?.focus();
  };

  const saveProfile = () => {
    setUsername(newUsername);
    setEmail(newEmail);
    setPhoneNumber(newPhoneNumber);
    navigation.goBack();
    toast.show('Change Saved', {
      type: 'success',
      animationType: 'zoom-in',
    });
  };

  const resetProfile = () => {
    Alert.alert(
      'Reset Profile',
      'Are you sure you want to reset your profile?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            setUsername('');
            setEmail('');
            setPhoneNumber('');
            navigation.navigate('Home');
            toast.show('Reset Successfully', {
              type: 'success',
              animationType: 'zoom-in',
            });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ImageBackground
      source={require('../assets/w1.jpg')}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.label}>
          <FontAwesomeIcon icon={faUserCircle} size={25} color="white" />{' '}
          Username:
        </Text>
        <TextInput
          style={styles.input}
          value={newUsername}
          onChangeText={setNewUsername}
          onSubmitEditing={handleUsernameSubmit}
          placeholder="Username"
          keyboardType="default"
          returnKeyType="next"
          blurOnSubmit={false}
        />

        <Text style={styles.label}>
          <FontAwesomeIcon icon={faMailBulk} size={25} color="white" /> Email:
        </Text>
        <TextInput
          style={styles.input}
          value={newEmail}
          onChangeText={setNewEmail}
          onSubmitEditing={handleEmailSubmit}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          ref={emailRef}
          blurOnSubmit={false}
        />

        <Text style={styles.label}>
          <FontAwesomeIcon icon={faPhone} size={25} color="white" /> Phone
          Number:
        </Text>
        <TextInput
          style={styles.input}
          value={newPhoneNumber}
          onChangeText={setNewPhoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          returnKeyType="done"
          ref={phoneRef}
        />

        <Button title="Save" onPress={saveProfile} color="lightblue" />
        <View style={styles.buttonSpacing} />
        <Button title="Reset" onPress={resetProfile} color="red" />
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
  input: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
    backgroundColor: 'white',
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
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
  buttonSpacing: {
    marginBottom: 15,
  },
});

export default ProfileEditScreen;
