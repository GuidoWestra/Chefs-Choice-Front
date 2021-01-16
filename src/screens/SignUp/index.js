import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login, signUp } from "../../store/user/actions";

export default function SignUp() {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const dispatch = useDispatch();

  function submitSignUp(event) {
    event.preventDefault();
    dispatch(signUp(name, email, password));
    set_name("");
    set_email("");
    set_password("");
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to the Sign Up Page</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => set_name(text)}
        placeholder="name"
      />
      <TextInput
        style={styles.inputField}
        onChangeText={(text) => set_email(text)}
        placeholder="email"
      />
      <TextInput
        style={styles.inputField}
        secureTextEntry={true}
        onChangeText={(text) => set_password(text)}
        placeholder="password"
      />
      <TouchableOpacity title="SignUp" style={styles.button} onPress={submitSignUp}>
        <Text> Sign Up </Text>
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
    width: 100,
    height: 50,
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 28,
    paddingTop: 16,
  },
  inputField: {
    alignItems: "center",
    marginTop: 5,

    borderWidth: 1,
    borderRadius: 5,
    color: "#121212",
    height: 40,
    width: 250,
  },

  signupLink: {
    marginTop: 500,
  },
});
