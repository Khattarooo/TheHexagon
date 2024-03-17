import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {UserProvider} from './src/context/UserContext';
import {ToastProvider} from 'react-native-toast-notifications';

function App(): React.JSX.Element {
  return (
    <UserProvider>
      <NavigationContainer>
        <ToastProvider duration={1000} successColor="green" dangerColor="red">
          <Navigation />
        </ToastProvider>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
