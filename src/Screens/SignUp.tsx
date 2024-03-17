import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Keyboard,
  ImageBackground,
  Text,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useUserContext} from '../context/UserContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUserCircle,
  faPhone,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';
import {useToast} from 'react-native-toast-notifications';

interface SignUpScreenRouteParams {
  username?: string;
  email?: string;
  phoneNumber?: string;
}

const SignUp = () => {
  const route =
    useRoute<RouteProp<{params: SignUpScreenRouteParams}, 'params'>>();
  const {setUsername, setEmail, setPhoneNumber} = useUserContext();
  const [localUsername, setLocalUsername] = useState(
    route.params?.username || '',
  );
  const [localEmail, setLocalEmail] = useState(route.params?.email || '');
  const [localPhoneNumber, setLocalPhoneNumber] = useState(
    route.params?.phoneNumber || '',
  );

  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);

  const navigation = useNavigation<any>();
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

  const handleSubmit = () => {
    if (!localUsername || !localEmail || !localPhoneNumber) {
      toast.show('Please fill in all required fields.', {type: 'danger'});
      return;
    }
    if (!/^\d+$/.test(localPhoneNumber)) {
      toast.show('Please enter a valid phone number.', {type: 'danger'});
      return;
    }
    if (!localEmail.includes('@')) {
      toast.show('Please enter a valid email address.', {type: 'danger'});
      return;
    }
    setUsername(localUsername);
    setEmail(localEmail);
    setPhoneNumber(localPhoneNumber);
    navigation.navigate('Home');
    toast.show('Sign Up Successful', {
      type: 'success',
      animationType: 'zoom-in',
    });
  };

  const handleHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/w6.jpg')}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.label}>
          <FontAwesomeIcon icon={faUserCircle} size={25} color="lightblue" />{' '}
          Username:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username *"
          keyboardType="name-phone-pad"
          returnKeyType="next"
          value={localUsername}
          onChangeText={setLocalUsername}
          onSubmitEditing={handleUsernameSubmit}
          blurOnSubmit={false}
        />
        <Text style={styles.label}>
          <FontAwesomeIcon icon={faMailBulk} size={25} color="lightblue" />{' '}
          Email:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email *"
          keyboardType="email-address"
          returnKeyType="next"
          value={localEmail}
          onChangeText={setLocalEmail}
          ref={emailRef}
          onSubmitEditing={handleEmailSubmit}
          blurOnSubmit={false}
        />
        <Text style={styles.label}>
          <FontAwesomeIcon icon={faPhone} size={25} color="lightblue" /> Phone
          Number:
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Phone Number *"
          value={localPhoneNumber}
          onChangeText={setLocalPhoneNumber}
          ref={phoneRef}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={!localUsername || !localEmail || !localPhoneNumber}
          color="lightblue"
        />
        <View style={styles.buttonSpacing} />

        <Button title="Go Back" onPress={handleHome} color="red" />
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
    fontWeight: 'bold',
    color: 'lightblue',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  imageBackground: {
    flex: 1,
  },
  buttonSpacing: {
    marginBottom: 15,
  },
});

export default SignUp;
