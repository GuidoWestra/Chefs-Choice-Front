import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../store/user/actions";

export default function LogIn({ navigation }) {
  const [email, set_email] = useState("email");
  const [password, set_password] = useState("password");
  const dispatch = useDispatch();
  function submitLogin(event) {
    event.preventDefault();
    dispatch(login(email, password));

    set_email("");
    set_password("");
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to the LoginPage</Text>
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

      <TouchableOpacity title="Log in" style={styles.button} onPress={submitLogin}>
        <Text> Log in </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push("SignUp")}>
        <Text style={styles.signupLink}> Dont have an accout?</Text>
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
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    color: "#121212",
    height: 40,
    width: 250,
  },

  signupLink: {
    paddingTop: 10,
  },
});
