import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
export default function HomeScreen() {
  const user = useSelector(selectUser);
  console.log("I am on the home page", user.name);
  return (
    <View>
      <Text>Welcome {user.name},</Text>
    </View>
  );
}
