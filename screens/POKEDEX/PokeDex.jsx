import { useContext } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

// Flatlist Component
import PokeDexItem from "../../components/PokeDexItem";
import LoadMore from "../../components/LoadMore";

// CONTEXT API
import { Context } from "../../contextApi";
import PreviousNextButton from "../../components/PreviousNextButton";

export default function PokeDex() {
  const {
    pokeDexData,
    isLoading,
    getNextPokemonData,
    getPreviousPokemonData,
    previousPokemonURLs,
    navigateToDetails,
  } = useContext(Context);
  const flatListData = [...pokeDexData];

  if (flatListData.length < 20) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={"white"} size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.pokeDexContainer}>
      <FlatList
        contentContainerStyle={{}}
        data={flatListData}
        renderItem={({ item }) => (
          <PokeDexItem
            pokemonName={item.name}
            pokemonImage={item.sprites.front_default}
            pokemonData={item}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.pokeDexFlatList}
      />

      <PreviousNextButton
        previousPokemonURLs={previousPokemonURLs}
        getNextPokemonData={getNextPokemonData}
        getPreviousPokemonData={getPreviousPokemonData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  pokeDexContainer: {
    flex: 1,
    marginBottom: 90,
    justifyContent: "center",
    backgroundColor: "black",
  },
});
