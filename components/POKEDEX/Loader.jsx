import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <Image
        source={require("../../assets/images/pokeloader.gif")}
        style={{ resizeMode: "contain", height: 500, width: 500 }}
      />
      <Text style={styles.loaderText}>Loader</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    marginBottom: 100,
    backgroundColor: "#F3FCFF",
    height: "100%",
    justifyContent: "center",
  },
  loaderText: {
    color: "black",
  },
});
