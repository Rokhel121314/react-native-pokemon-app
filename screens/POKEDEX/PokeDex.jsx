import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

// Flatlist Component
import PokeDexItem from "../../components/PokeDexItem";
import LoadMore from "../../components/LoadMore";

// CONTEXT API
import { Context } from "../../contextApi";

export default function PokeDex() {
  const { pokeDexData, isLoading, getMorePokeDexData } = useContext(Context);

  console.log("lenght", pokeDexData.length - 1);

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
        data={pokeDexData}
        renderItem={({ item, index }) => (
          <>
            <PokeDexItem
              pokemonName={item.name}
              pokemonImage={item.sprites.front_default}
              pokemonData={item}
            />
            {pokeDexData.length === index + 1 ? (
              <LoadMore getMorePokeDexData={getMorePokeDexData} index={index} />
            ) : (
              ""
            )}
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
