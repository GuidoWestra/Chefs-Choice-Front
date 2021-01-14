import React from "react";
import { View, Text } from "react-native";
import { RecipeCardMedium } from "../../components/RecipeCardMedium";
export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Home </Text>
      <RecipeCardMedium />
    </View>
  );
}
