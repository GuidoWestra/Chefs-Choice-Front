import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDaily } from "../../store/daily_recipe/actions";
import { selectDaily } from "../../store/daily_recipe/selectors";
import { toggleFav } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

export default function HomeScreen() {
  const user = useSelector(selectUser);
  const recipe = useSelector(selectDaily);
  const dispatch = useDispatch();
  // recipe.id
  async function onPressHandler(recipe) {
    console.log("Added to Favorites", recipe);
    dispatch(toggleFav(recipe));
  }

  useEffect(() => {
    dispatch(fetchDaily());
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{
          uri: recipe.image || null,
        }}
        alt="oops"
      />
      <Text style={styles.title}>{recipe.title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPressHandler(recipe);
        }}
      >
        <Text style={styles.title}>Add to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    marginTop: 50,
    alignSelf: "center",
    width: 400,
    height: 550,
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    marginTop: 20,
    padding: 5,
  },
  picture: {
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 10,
    width: "95%",
    height: "80%",
  },
});
