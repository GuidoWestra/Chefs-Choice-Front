import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDaily } from "../../store/recipe/actions";
import { selectDaily } from "../../store/recipe/selectors";
import { selectUser } from "../../store/user/selectors";

export default function HomeScreen() {
  const user = useSelector(selectUser);
  const recipe = useSelector(selectDaily);
  const dispatch = useDispatch();
  console.log("recipe on home", recipe);
  useEffect(() => {
    dispatch(fetchDaily());
    console.log("UseEffect called");
  }, []);
  return (
    <View style={styles.container}>
      <Text>Welcome {user.name},</Text>
      <Image
        style={styles.picture}
        source={
          {
            uri: recipe.image,
          } ||
          "https://www.pinclipart.com/picdir/big/175-1750251_loader-loading-progress-wait-icon-loading-png-clipart.png"
        }
        alt="oops"
      />
      <Text>The Dish of the Day is:{recipe.title}</Text>
      <Text>The id for this dish is:{recipe.id}</Text>
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
  picture: {
    paddingBottom: 20,
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 10,
    width: "50%",
    height: "50%",
  },
});
