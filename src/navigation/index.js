// React
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
// Token
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
// Components
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import Discover from "../screens/DiscoverRecipes";
import Favorites from "../screens/Favorites";
import NotFound from "../screens/NotFound";

export default function Navigation() {
  const token = useSelector(selectToken());
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  if (!token) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Discover" component={Discover} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="NotFound" component={NotFound} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
