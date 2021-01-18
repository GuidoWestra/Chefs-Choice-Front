import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Discover() {
  const [ingredients, set_ingredients] = useState("");
  const [temp, set_temp] = useState("");

  function onPressHandler() {
    set_ingredients([...ingredients, temp]);
    set_temp("");
    console.log("Ingredients:", ingredients);
  }

  useEffect(() => {
    console.log("useEffect rendered");
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please Enter Ingredients:</Text>
      {ingredients
        ? ingredients.map((name) => {
            return <Text style={styles.ingredient}>{name} </Text>;
          })
        : null}
      <TextInput
        onChangeText={(text) => {
          set_temp(text);
        }}
        style={styles.inputField}
        value={temp}
      />
      <TouchableOpacity onPress={() => onPressHandler()} style={styles.inputButton}>
        <Text> +</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => startSearch()} style={styles.inputButton}>
        <Text> Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => set_ingredients("")} style={styles.inputButton}>
        <Text> Clear All</Text>
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
  header: {
    paddingTop: 40,
  },
  ingredient: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 45,
    paddingLeft: 6,
    paddingTop: 6,
    height: 4,
    width: "25%",
    margin: 2,
  },
  inputField: {
    marginTop: 100,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    height: "5%",
    width: "50%",
  },
  inputButton: {
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.4,
    borderRadius: 6,
    paddingTop: 6,
    marginTop: 10,
    height: 34,
    width: "25%",
  },
});
