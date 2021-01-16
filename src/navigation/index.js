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
import { Feather, AntDesign, Foundation, FontAwesome, Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  const token2 = useSelector(selectToken);
  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        dispatch(loginSucces(token));
      } else {
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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                return focused ? (
                  <Foundation name="home" size={24} color="black" />
                ) : (
                  <Feather name="home" size={24} color="black" />
                );
              }
              if (route.name === "Discover") {
                return focused ? (
                  <FontAwesome name="search" size={24} color="black" />
                ) : (
                  <AntDesign name="search1" size={24} color="black" />
                );
              }
              if (route.name === "Favorites") {
                return focused ? (
                  <AntDesign name="heart" size={23} color="black" />
                ) : (
                  <AntDesign name="hearto" size={23} color="black" />
                );
              }
              if (route.name === "Account") {
                return focused ? (
                  <Ionicons name="person-circle-sharp" size={24} color="black" />
                ) : (
                  <Ionicons name="person-circle-outline" size={24} color="black" />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={Homescreen} />
          <Tab.Screen name="Discover" component={Discover} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
