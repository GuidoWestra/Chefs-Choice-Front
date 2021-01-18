import React, { useState } from "react";
import { View, Text } from "react-native";

export default function index(props) {
  const [heart, set_heart] = useState(true);
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{
          uri:
            props.image ||
            "https://www.pinclipart.com/picdir/big/175-1750251_loader-loading-progress-wait-icon-loading-png-clipart.png",
        }}
        alt="oops"
      />
      <Text style={styles.title}>{props.title}</Text>
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
