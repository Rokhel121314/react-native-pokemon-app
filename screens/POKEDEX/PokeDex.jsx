import React, { Fragment, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import PokeDexItem from "../../components/PokeDexItem";
import { Context } from "../../contextApi";

export default function PokeDex() {
  const { pokeDexData, isLoading } = useContext(Context);

  console.log("lenght", pokeDexData.length);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={"black"} size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.pokeDexContainer}>
      <FlatList
        data={pokeDexData}
        renderItem={({ item, index }) => (
          <>
            <PokeDexItem
              pokemonName={item.name}
              pokemonImage={item.sprites.front_default}
              pokemonData={item}
            />
            {index === pokeDexData.length - 1 ? <Text>Load More</Text> : ""}
          </>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.pokeDexFlatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  pokeDexContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 90,
    justifyContent: "center",
  },
});
