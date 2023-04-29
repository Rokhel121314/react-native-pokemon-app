import { Pressable, View, Text, StyleSheet } from "react-native";

function LoadMore({ getMorePokeDexData, index }) {
  console.log("index", index);
  return (
    <Pressable
      style={styles.flatListContainer}
      onPress={() => getMorePokeDexData()}>
      <View>
        <Text>LOAD MORE</Text>
      </View>
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
    position: "absolute",
    left: 260,
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

export default LoadMore;
