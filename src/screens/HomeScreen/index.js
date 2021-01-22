import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectMessage } from "../../store/appState/selectors";
import { fetchDaily } from "../../store/daily_recipe/actions";
import { selectDaily } from "../../store/daily_recipe/selectors";
import { toggleFav } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

export default function HomeScreen() {
  const recipe = useSelector(selectDaily);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  // recipe.id
  async function onPressHandler(recipe) {
    dispatch(toggleFav(recipe));
  }

  useEffect(() => {
    dispatch(fetchDaily());
  }, []);

  if (!recipe) return <Text> Loading...</Text>;
  return (
    <View>
      {message ? (
        <View style={styles.succes}>
          <Text style={styles.succesText}>{message.text}</Text>
        </View>
      ) : null}
      <View style={styles.container}>
        <Image
          style={styles.picture}
          source={{
            uri: recipe.image || null,
          }}
          alt="oops"
        />
        <Text style={styles.title}>{recipe.title}</Text>
        {recipe.summary !== undefined ? (
          <Text style={styles.text}>{recipe.summary.replace(/<[^>]*>?/gm, "")}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            onPressHandler(recipe);
          }}
        >
          <Text style={styles.title}>Add to Favorites</Text>
        </TouchableOpacity>
      </View>
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
    padding: 10,
    alignSelf: "center",
    width: 400,
    height: 600,
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  text: {
    fontSize: 13,
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
    width: "100%",
    height: "50%",
  },
  succes: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 25,
    margin: 15,
    borderColor: "white",
    padding: 5,
    backgroundColor: "#77c593",
  },
  succesText: {
    color: "white",
  },
});
