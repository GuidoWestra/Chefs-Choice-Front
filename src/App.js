import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import store from "./store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Navigation />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
