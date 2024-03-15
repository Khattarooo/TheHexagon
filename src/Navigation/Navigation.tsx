import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';

const MainNavigator = createNativeStackNavigator();

function Navigation() {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name="screen1" component={Screen1} />
      <MainNavigator.Screen name="screen2" component={Screen2} />
      <MainNavigator.Screen name="screen3" component={Screen3} />
    </MainNavigator.Navigator>
  );
}

export default Navigation;
