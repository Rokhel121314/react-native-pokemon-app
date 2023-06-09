import { useNavigation } from "@react-navigation/native";
import { Pressable, Image, Text, StyleSheet } from "react-native";

import { useContext } from "react";
import { Context } from "../../contextApi";

function PokeDexItem(props) {
  const { pokemonName, pokemonImage, pokemonData } = props;
  const { getPokemonDescription, pokemonAlreadyCaught } = useContext(Context);

  const navigation = useNavigation();

  return (
    <Pressable
      android_ripple={"#334c54"}
      style={styles.flatListContainer}
      onPress={() => {
        getPokemonDescription(pokemonData.id);
        pokemonAlreadyCaught(pokemonData);
        navigation.navigate("pokemonDetail", {
          pokemonData,
          pokemonName,
          pokemonImage,
        });
      }}>
      <Image source={{ uri: pokemonImage }} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>{pokemonName}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 115,
    height: 115,
    margin: 8,
    // justifyContent: "center",
    alignItems: "center",
  },
  pokemonImage: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    position: "relative",
  },
  pokemonName: {
    fontWeight: "bold",
    letterSpacing: 2,
    paddingBottom: 5,
    position: "absolute",
    top: 90,
  },
});

export default PokeDexItem;
