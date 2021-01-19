import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { fetchDaily } from "../../store/daily_recipe/actions";
import { selectDaily } from "../../store/daily_recipe/selectors";
import { selectUser } from "../../store/user/selectors";

export default function HomeScreen() {
  const [heart, set_heart] = useState(true);
  const user = useSelector(selectUser);
  const recipe = useSelector(selectDaily);
  const dispatch = useDispatch();
  console.log("user:", user);
  useEffect(() => {
    dispatch(fetchDaily());
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{
          uri:
            recipe.image ||
            "https://www.pinclipart.com/picdir/big/175-1750251_loader-loading-progress-wait-icon-loading-png-clipart.png",
        }}
        alt="oops"
      />
      <Text style={styles.title}>{recipe.title}</Text>
      <TouchableOpacity onPress={() => set_heart(!heart)}>
        <Text style={styles.title}>{heart ? "♡" : "🖤"}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text> find out more</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.4,
    borderColor: "grey",
    borderRadius: 25,
    marginTop: 100,
    marginLeft: 5,
    width: 400,
    height: 600,
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  picture: {
    paddingBottom: 20,
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 10,
    width: "95%",
    height: "75%",
  },
});
