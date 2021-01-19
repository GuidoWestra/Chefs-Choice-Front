import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";

export default function index() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Discover" component={} />
        <Stack.Screen name="SearchResult" component={} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
