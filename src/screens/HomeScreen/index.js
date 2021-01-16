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
      <Image style={styles.picture} source={recipe.image} alt="oops" />
      <Text>The Dish of the Day is:{recipe.title}</Text>
      <Text>The id for this dish is:{recipe.id}</Text>
      <Text>find out more here:{recipe.sourceUrl}</Text>
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
    width: "50%",
    height: "50%",
  },
});
