import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchDaily } from "../../store/recipe/actions";
import { selectDaily } from "../../store/recipe/selectors";
import { selectUser } from "../../store/user/selectors";

export default function HomeScreen() {
  const user = useSelector(selectUser);
  const recipe = useSelector(selectDaily);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDaily);
  }, [recipe]);
  return (
    <View style={styles.container}>
      <Text>Welcome {user.name},</Text>
      <Text>The Dish of the Day is:</Text>
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
