import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../store/user/actions";

export default function Login() {
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
    <View>
      <Text>Welcome to the LoginPage</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => set_email(text)}
        value={email}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => set_password(text)}
        value={password}
      />
      <Button title="Log in" onPress={submitLogin}></Button>
    </View>
  );
}
