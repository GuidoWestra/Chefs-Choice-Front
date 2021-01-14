// #React
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// #Token
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
// #Components
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Homescreen from "../screens/HomeScreen";
import Discover from "../screens/DiscoverRecipes";
import Favorites from "../screens/Favorites";
import NotFound from "../screens/NotFound";
import { Text } from "react-native";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  // const token = useSelector(selectToken());

  if (true === true) {
    return (
      <NavigationContainer>
        <Text>hi</Text>
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
          <Tab.Screen name="Homescreen" component={Homescreen} />
          <Tab.Screen name="Discover" component={Discover} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="NotFound" component={NotFound} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
