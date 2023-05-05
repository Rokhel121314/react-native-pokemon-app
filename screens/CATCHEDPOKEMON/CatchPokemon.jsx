import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Context } from "../../contextApi";
import CatchedPokemonItem from "../../components/CATCHEDPOKEMON/CatchedPokemonItem";

export default function CatchedPokemon() {
  const { catchedPokemonList } = useContext(Context);
  // console.log(
  //   "catchedPokemonList",
  //   catchedPokemonList.map((pokemon) => pokemon.name)
  // );
  return (
    <View style={styles.CatchedPokemonContainer}>
      <FlatList
        data={catchedPokemonList}
        renderItem={({ item }) => (
          <CatchedPokemonItem
            pokemonName={item.name}
            pokemonImage={item.sprites.other.home.front_default}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  CatchedPokemonContainer: {
    flex: 1,
    backgroundColor: "white",
    // paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 90,
  },
});
