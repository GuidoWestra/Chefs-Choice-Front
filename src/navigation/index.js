// #React
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { loginSucces } from "../store/user/actions";
// #Token
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
// #Components
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Homescreen from "../screens/HomeScreen";
import Discover from "../screens/DiscoverRecipes";
import Favorites from "../screens/Favorites";
import Account from "../screens/Account";
import NotFound from "../screens/NotFound";
import AsyncStorage from "@react-native-async-storage/async-storage";
// #Logos
// import { Heart, Home, Search } from "../../assets/logos";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  const token2 = useSelector(selectToken);
  console.log("is this mooi man?", token2);
  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem("token");
      console.log("insideUseffect", token);
      console.log("INside with token type?", typeof token);
      if (token) {
        console.log("insideIf", token);
        dispatch(loginSucces(token));
      } else {
        console.log("Oops there was no token provided");
      }
    }
    getToken();
  }, []);

  if (!token2) {
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
          <Tab.Screen name="Home" component={Homescreen} />
          <Tab.Screen name="Discover" component={Discover} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
