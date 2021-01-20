import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectFav } from "../../store/user/selectors";

export default function Favorites() {
  const fav = useSelector(selectFav);

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text>Welcome To Favorites</Text>
      {fav.map((fav, i) => {
        return <Text key={i}> {fav.title}</Text>;
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
