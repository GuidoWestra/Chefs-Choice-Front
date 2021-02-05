import React, { useState } from "react";
import { selectMessage } from "../../store/appState/selectors";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/user/actions";

export default function LogIn({ navigation }) {
  const [email, set_email] = useState("email");
  const [password, set_password] = useState("password");
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const message = useSelector(selectMessage);
  if (message) console.log("I am message on home", message);

  function submitLogin(event) {
    event.preventDefault();
    dispatch(login(email, password));

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
      <Text style={styles.title}>Welcome to the LoginPage</Text>
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
        <Text style={styles.signupLink}> Dont have an account?</Text>
      </TouchableOpacity>

      <Modal visible={open} animationType="fade">
        <ScrollView style={styles.Modal}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              setOpen(!open);
            }}
          >
            <Text> Continue </Text>
          </TouchableOpacity>
          <Text style={styles.title}>Welcome to Chef's Choice!</Text>
          <Text style={styles.body}>
            {"\n"}
            This is the app for you.. yes You! even though you might not have realized it. {"\n"}
            have you ever encountered that piece of ham that just passed the expiry date.. yea me
            too.{"\n"}
            Wouldn't it be great if we had a simple App, (subtle hint, this is that app ;) ) to look
            for a recipe based on the ingredients entered? {"\n"}
            {"\n"}I know.. i know. how has no one thought of ths before? I asked myself the same
            question.{"\n"}
            {"\n"} Well.. now someone has! ME! isn't that crazy? 10 weeks ago i was learning how, to
            console.log("doesn't that seem like a long time ago?") now im here building full stack
            apps. And actually being able to transfer my ideas into code!! I know crazy stuff.
            Enough about me for now, lets shed some light on the app.. After all thats why your here{" "}
            {"\n"}
            {"\n"}HomePage {"\n"}A random recipe just for you.. Looks good? why not save it for
            later? simply add it to your favorites {"\n"}
            {"\n"}Discover {"\n"}Enter up to 5 ingredients. and boom! 5 recipes just for you.
            showing exactly what you need to know. what can i use of the igredients ive entered and
            what do i still need to get.. {"\n"}
            {"\n"}Favorites {"\n"}Saved ingredients. This is were the magic happens. All the cool
            recipes you find and save.. end up here.. Lets find out more! {"\n"}
            {"\n"}Account {"\n"}Have you finished using the app.. With the click of a button you can
            simply log out! {"\n"} {"\n"}Thanks for downloading my app! Please let me know if you
            find any bugs, or have any cool ideas to add! {"\n"} {"\n"}--Chef
          </Text>
          <Image style={styles.logo} source={require("../../../assets/logos/AppBase.png")} />
        </ScrollView>
      </Modal>
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
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 28,
    paddingTop: 16,
  },
  modalButton: {
    width: 200,
    height: 50,
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
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
  title: {
    paddingTop: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  body: {
    fontSize: 19,
  },
  Modal: {
    margin: 0.5,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  logo: {
    height: 200,
    width: 400,
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
