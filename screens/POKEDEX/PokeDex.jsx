import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from "react-native";

// Flatlist Component
import PokeDexItem from "../../components/PokeDexItem";
import LoadMore from "../../components/LoadMore";

// CONTEXT API
import { Context } from "../../contextApi";

export default function PokeDex() {
  const {
    pokeDexData,
    isLoading,
    getNextPokemonData,
    getPreviousPokemonData,
    previousPokemonURLs,
  } = useContext(Context);
  const flatListData = [...pokeDexData];

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
        contentContainerStyle={{}}
        data={flatListData}
        renderItem={({ item, index }) => (
          <>
            <PokeDexItem
              pokemonName={item.name}
              pokemonImage={item.sprites.front_default}
              pokemonData={item}
            />
          </>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.pokeDexFlatList}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => getPreviousPokemonData()}>
          {previousPokemonURLs === null ? (
            ""
          ) : (
            <View style={styles.backButton}>
              <Text style={styles.backButtonText}>
                {previousPokemonURLs === null ? "" : "BACK"}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getNextPokemonData()}>
          <View style={styles.nextButton}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    marginBottom: 90,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "none",
  },
  nextButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 70,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingLeft: 70,
    paddingRight: 20,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
