import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectFav } from "../../store/user/selectors";

export default function Favorites() {
  const fav = useSelector(selectFav);

  return (
    <View style={styles.container}>
      <Text>Welcome To Favorites</Text>
      {fav.map((fav) => {
        return <Text> {fav.title}</Text>;
      })}
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
});
