import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Context } from "../../contextApi";

function CatchedPokemonItem({ pokemonName, pokemonImage, pokemonData }) {
  const [toggle, setToggle] = useState(false);
  const { setPokemonFree } = useContext(Context);

  function toToggle() {
    setToggle((current) => !current);
  }

  const navigation = useNavigation();

  // console.log("toggle", toggle);
  return (
    <>
      <View style={styles.catchedPokemonListContainer}>
        <Image
          source={{ uri: pokemonImage }}
          style={styles.catchedPokemonListImage}
        />
        <Text style={styles.catchedPokemonListText}>
          {pokemonName.toUpperCase()}
        </Text>

        <Pressable style={styles.addBtn} onPress={() => toToggle()}>
          {!toggle ? (
            <Text style={styles.addText}>lll</Text>
          ) : (
            <Text style={styles.addTextX}>+</Text>
          )}
        </Pressable>
      </View>
      {!toggle ? null : (
        <View style={styles.catchedPokemonOption}>
          <Pressable
            style={styles.checkDetailBtn}
            onPress={() =>
              navigation.navigate("pokemonDetail", {
                pokemonImage,
                pokemonName,
                pokemonData,
              })
            }>
            <Text style={styles.optionText}>CHECK DETAIL</Text>
          </Pressable>
          <Pressable style={styles.addToLineUpBtn}>
            <Text style={styles.optionText}>+ LINE UP</Text>
          </Pressable>
          <Pressable
            style={styles.setFreeBtn}
            onPress={() => setPokemonFree(pokemonData.id)}>
            <Text style={styles.optionText}>SET FREE</Text>
          </Pressable>
        </View>
      )}
    </>
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
    fontSize: 24,
    fontWeight: 600,
  },
  addTextX: {
    color: "black",
    fontSize: 42,
    fontWeight: 300,
    transform: [{ rotate: "45deg" }],
  },
  catchedPokemonOption: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  checkDetailBtn: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "black",
    marginBottom: 10,
    borderRadius: 10,
  },
  addToLineUpBtn: {
    borderColor: "green",
    borderWidth: 1,
    backgroundColor: "green",
    marginBottom: 10,
    borderRadius: 10,
  },
  optionText: {
    fontWeight: 600,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    letterSpacing: 1,
  },
  setFreeBtn: {
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "red",
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default CatchedPokemonItem;
