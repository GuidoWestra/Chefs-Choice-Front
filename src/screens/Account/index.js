import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  function submitLogOut(event) {
    event.preventDefault();
    dispatch(logOut());
  }
  return (
    <View style={styles.container}>
      <Text>Hi {user.name}</Text>
      <Text>Welcome to your account page!</Text>

      <TouchableOpacity style={styles.button} onPress={submitLogOut}>
        <Text> LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: "#db4848",
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
