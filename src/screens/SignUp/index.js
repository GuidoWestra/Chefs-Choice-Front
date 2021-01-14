import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { signup } from "../../store/user/actions";

export default function SignUp() {
  const [name, set_name] = useState("name");
  const [email, set_email] = useState("email");
  const [password, set_password] = useState("password");
  const dispatch = useDispatch();

  function submitSignUp(event) {
    event.preventDefault();
    console.log("hi");
    dispatch(signup(name, email, password));

    set_name("");
    set_email("");
    set_password("");
  }
  return (
    <View>
      <Text>Welcome to the Sign Up Page</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => set_name(text)}
        value={name}
      />
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
      <Button title="Sign Up" onPress={submitSignUp}></Button>
    </View>
  );
}
