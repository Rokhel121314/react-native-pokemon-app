import { View, Pressable, Image, Text, StyleSheet } from "react-native";

function PokeDexItem(props) {
  const { pokemonName, pokemonImage, pokemonData } = props;

  return (
    <Pressable
      android_ripple={"#334c54"}
      style={styles.flatListContainer}
      onPress={() => alert(pokemonName)}>
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
    width: 110,
    height: 110,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonImage: {
    resizeMode: "contain",
    width: 110,
    height: 110,
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
