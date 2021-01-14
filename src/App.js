import { NavigationContainer, StackActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation component={Navigation} />
      <StatusBar style="auto" />
    </View>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={} />
        <Stack.Screen name="SignUp" component={} />
        <Stack.Screen name="Home" component={} />
        <Stack.Screen name="Discover" component={} />
        <Stack.Screen name="Favorites" component={} />
        <Stack.Screen name="NotFound" component={} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
