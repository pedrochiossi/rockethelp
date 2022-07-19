import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Details } from '../screens/Details';

const { Navigator, Screen } = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="new" component={Register} />
        <Screen name="details" component={Details} />
      </Navigator>
    </NavigationContainer>
  )
};

export default Routes;
