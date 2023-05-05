import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function CatchedPokemonItem({ pokemonName, pokemonImage }) {
  const [toggle, setToggle] = useState(false);

  function toToggle() {
    setToggle((current) => !current);
  }

  // console.log("toggle", toggle);
  return (
    <View style={styles.catchedPokemonListContainer}>
      <Image
        source={{ uri: pokemonImage }}
        style={styles.catchedPokemonListImage}
      />
      <Text style={styles.catchedPokemonListText}>
        {pokemonName.toUpperCase()}
      </Text>
      {toggle ? (
        <Pressable style={styles.addBtnToggle}>
          <Text style={styles.addTextToggle}>FREE</Text>
        </Pressable>
      ) : null}
      <Pressable style={styles.addBtn} onPress={() => toToggle()}>
        <Text style={styles.addText}>...</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  catchedPokemonListContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    paddingVertical: 5,
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  catchedPokemonListText: {
    flex: 3,
    color: "black",
    fontSize: 20,
    fontWeight: 600,
  },
  catchedPokemonListImage: {
    flex: 2,
    resizeMode: "contain",
    width: 70,
    height: 70,
  },
  addBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "90deg" }],
  },
  addText: {
    color: "black",
    fontSize: 32,
    fontWeight: 600,
  },
});

export default CatchedPokemonItem;
