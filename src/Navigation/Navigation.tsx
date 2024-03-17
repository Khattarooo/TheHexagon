import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';
import ProfileScreen from '../Screens/ProfileScreen';
import CategoriesItemScreen from '../Screens/CategoriesItemScreen';
import React from 'react';
import ProfileEditScreen from '../Screens/ProfileEditScreen';

export type RootStackParamList = {
  SignUp: undefined;
  Home: undefined;
  ProfileScreen: undefined;
  CategoriesItemScreen: {id: string};
  ProfileEditScreen: undefined;
};

const MainNavigator = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <MainNavigator.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
        },
        animation: 'slide_from_right',
      }}
      initialRouteName="Home">
      <MainNavigator.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <MainNavigator.Screen
        name="Home"
        component={Home}
        options={{headerBackVisible: false}}
      />
      <MainNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{title: 'Profile Screen'}}
      />
      <MainNavigator.Screen
        name="CategoriesItemScreen"
        component={CategoriesItemScreen}
        options={{title: 'Types '}}
      />
      <MainNavigator.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={{title: 'Profile Edit'}}
      />
    </MainNavigator.Navigator>
  );
}

export default Navigation;
