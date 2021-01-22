import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { selectResult } from "../../store/search_result/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchResult } from "../../store/search_result/actions";
import { toggleFav } from "../../store/user/actions";
import { selectMessage } from "../../store/appState/selectors";

export default function Discover() {
  const [ingredients, set_ingredients] = useState([]);
  const [temp, set_temp] = useState("");
  const [open, setOpen] = useState(false);

  const message = useSelector(selectMessage);
  const recipes = useSelector(selectResult);
  const dispatch = useDispatch();
  //removeFav
  function removeFav(i) {
    const j = i + 1;
    ingredients.splice(i, 1);
    const newIngredients = ingredients;
    set_ingredients([...newIngredients]);
    console.log("HI", ingredients);
  }
  //Handle Inputs
  function onPressHandler() {
    if (temp === "") return 0;
    if (ingredients.length === 5) return 0;
    set_ingredients([...ingredients, temp]);
    set_temp("");
  }
  //Handle Favorites Action
  function addFav(props) {
    dispatch(toggleFav(props));
  }
  //Call Api with ingredients provided
  async function startSearch() {
    if (ingredients === "") return 0;
    dispatch(fetchResult(ingredients));
    setOpen(!open);
  }
  //Render Page @Initial render & Change of Recipes
  useEffect(() => {}, [recipes]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please Enter Ingredients:</Text>
      {ingredients
        ? ingredients.map((name, i) => {
            return (
              <TouchableOpacity onPress={() => removeFav(i)}>
                <Text key={i} style={styles.ingredient}>
                  ✖️ {name}
                </Text>
              </TouchableOpacity>
            );
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

      <Modal visible={open} animationType="slide">
        {message ? (
          <View style={styles.succes}>
            <Text style={styles.succesText}>{message.text}</Text>
          </View>
        ) : null}
        <View style={styles.searchHeader}>
          <Text style={styles.favTitle}>Search Results for</Text>
          <Text>{ingredients[0]}</Text>
          {ingredients[1] ? <Text>{ingredients[1]}</Text> : null}
          {ingredients[2] ? <Text>{ingredients[2]}</Text> : null}
          {ingredients[3] ? <Text>{ingredients[3]}</Text> : null}
          {ingredients[4] ? <Text>{ingredients[4]}</Text> : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setOpen(!open);
            }}
          >
            <Text> Hide </Text>
          </TouchableOpacity>
        </View>
        {recipes ? (
          <FlatList
            data={recipes}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <View style={styles.favItem}>
                <Image
                  source={{
                    uri: item.image,
                    width: 320,
                    height: 200,
                  }}
                  style={styles.image}
                  alt="oops"
                />
                <Text style={styles.favTitle}>{item.title}</Text>
                <Text style={styles.likes}> ❤️ {item.likes}</Text>
                <TouchableOpacity
                  onPress={() => {
                    addFav(item);
                  }}
                  style={styles.button}
                >
                  <Text>Favorites</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : null}
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
  header: {
    marginBottom: 80,
    fontSize: 20,
  },
  ingredient: {
    borderColor: "black",
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 15,
  },
  inputField: {
    marginTop: 90,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 4,
    height: 34,
    width: "50%",
  },
  inputButton: {
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    borderWidth: 0.4,
    borderRadius: 4,
    paddingTop: 6,
    marginTop: 10,
    height: 34,
    width: "35%",
  },
  favItem: {
    borderWidth: 0.5,
    borderColor: "black",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 25,
    width: 370,
    padding: 10,
  },
  button: {
    borderWidth: 0.5,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  image: {
    alignSelf: "center",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  favTitle: {
    margin: 10,
    alignSelf: "center",
    fontSize: 20,
  },
  searchHeader: {
    alignSelf: "center",
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
