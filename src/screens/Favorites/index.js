import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectFav } from "../../store/user/selectors";
import { fetchFav, toggleFav } from "../../store/user/actions";

export default function Favorites() {
  const dispatch = useDispatch();
  const fav = useSelector(selectFav);
  //on fav api_id
  async function onPressHandler(item) {
    console.log(item);
    dispatch(toggleFav(item));
    dispatch(fetchFav());
  }
  useEffect(() => {}, [fav]);
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
                width: 320,
                height: 200,
              }}
              alt="oops"
            />
            <Text style={styles.favTitle}>{item.title}</Text>

            <TouchableOpacity
              onPress={() => {
                onPressHandler(item);
              }}
              style={styles.button}
            >
              <Text> Remove from Favorites</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    marginLeft: 5,
    width: 370,
    padding: 10,
  },
  title: {
    marginTop: 25,
    fontSize: 20,
  },
  favTitle: {
    margin: 10,
    alignSelf: "center",
    fontSize: 20,
  },
  picture: {
    borderWidth: 1,
    borderRadius: 45,
  },
  button: {
    borderWidth: 0.5,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});
