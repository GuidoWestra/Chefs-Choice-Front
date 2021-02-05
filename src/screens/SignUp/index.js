import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { signUp, login } from "../../store/user/actions";

export default function SignUp() {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const dispatch = useDispatch();

  const message = useSelector(selectMessage);
  if (message) console.log("I am message on SignUp", message);

  function submitSignUp(event) {
    event.preventDefault();
    dispatch(signUp(name, email, password));
    set_name("");
    set_email("");
    set_password("");
  }

  return (
    <View style={styles.container}>
      {message ? (
        <View style={styles.error}>
          <Text style={styles.errorText}>{message.text}</Text>
        </View>
      ) : null}
      <Text style={styles.title}>Welcome to the Sign Up Page</Text>
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
  title: {
    paddingBottom: 40,
    fontSize: 22,
    fontWeight: "bold",
  },
  error: {
    borderWidth: 1,
    borderRadius: 15,
    color: "#cc0033",
    borderColor: "#fcc2c3",
    padding: 5,
    backgroundColor: "#fce4e4",
  },
  errorText: {
    color: "#ff4040",
  },
});
