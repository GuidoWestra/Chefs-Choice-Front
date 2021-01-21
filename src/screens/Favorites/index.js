import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectFav } from "../../store/user/selectors";
import { toggleFav } from "../../store/user/actions";
import { fetchRecipe } from "../../store/search_result/actions";
import { selectResult, selectRecipe } from "../../store/search_result/selectors";

export default function Favorites() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const fav = useSelector(selectFav);
  console.log("on fav page", recipe);

  async function onPressFavorite(item) {
    console.log(item);
    dispatch(toggleFav(item));
  }
  async function onPressRecipe(item) {
    console.log("inside recipe", item);
    dispatch(fetchRecipe(item));
    setOpen(!open);
  }
  useEffect(() => {}, [recipe]);
  if (!recipe) return <Text>No recipes liked yet!</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your favorites </Text>
      <FlatList
        data={fav}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) => (
          <View style={styles.favItem}>
            <Image
              styles={styles.picture}
              source={{
                uri: item.image,
                width: 350,
                height: 250,
              }}
              alt="oops"
            />
            <Text style={styles.favTitle}>{item.title}</Text>
            <TouchableOpacity
              onPress={() => {
                onPressFavorite(item);
              }}
              style={styles.button}
            >
              <Text> Remove </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPressRecipe(item);
              }}
              style={styles.button}
            >
              <Text> Show me the Recipe!</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Modal visible={open} animationType="fade">
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              setOpen(!open);
            }}
          >
            <Text style={styles.button}> Return to favorites </Text>
          </TouchableOpacity>

          <ScrollView style={styles.favItem}>
            <Image
              source={{
                uri: recipe.image,
                width: 320,
                height: 200,
              }}
              style={styles.picture}
              alt="oops"
            />

            <Text style={styles.favTitle}>{recipe.title}</Text>
            <Text style={styles.favText}>
              Price per serving: {recipe.pricePerServing}${"\n"}
            </Text>
            <Text>{recipe.vegetarian ? "This dish is Vegetarian" : null}</Text>

            {recipe.instructions !== undefined ? (
              <Text style={styles.infoBox}>{recipe.instructions.replace(/<[^>]*>?/gm, "")}</Text>
            ) : null}
            {/* <Text>{recipe.sourceUrl}</Text> */}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  favItem: {
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 5,
    marginTop: 25,
    alignSelf: "center",
    margin: 10,
    padding: 5,
  },
  title: {
    marginTop: 30,
    fontSize: 24,
  },
  favTitle: {
    margin: 10,
    alignSelf: "center",
    fontSize: 20,
  },
  picture: {
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
  },
  button: {
    borderWidth: 0.5,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 6,
    width: "50%",
  },
  favText: {
    alignSelf: "center",
    fontSize: 16,
  },
  infoBox: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
});
