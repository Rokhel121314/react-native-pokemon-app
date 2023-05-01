import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Context } from "../contextApi";
import { useContext } from "react";

function PokemonDetailItem() {
  const route = useRoute();
  const { pokemonData, pokemonName, pokemonImage } = route.params;
  const type = pokemonData.types.map((type) => type.type.name);
  const { description, loadingDescription } = useContext(Context);

  return (
    <View style={styles.pokemonDetailContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{ resizeMode: "contain", height: "100%", width: "100%" }}
          source={{ uri: pokemonImage }}
        />
        <View style={styles.imageShadow}></View>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{pokemonName.toUpperCase()}</Text>
      </View>

      <View style={styles.typeContainer}>
        {!type
          ? null
          : type.map((type, index) => {
              return (
                <View style={styles.typeButton} key={index}>
                  <Text style={styles.typeText}>{type.toUpperCase()}</Text>
                </View>
              );
            })}
      </View>

      <View style={styles.descriptionContainer}>
        {loadingDescription ? (
          <Text>......</Text>
        ) : (
          <Text style={styles.descriptionText}>{`"${description}"`}</Text>
        )}
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.catchBtn}>
          <Text style={styles.catchText}>CATCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pokemonDetailContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  imageShadow: {
    position: "absolute",
    backgroundColor: "rgba(217, 217, 217, .5)",
    marginTop: 20,
    height: 60,
    width: 60,
    borderRadius: 30,
    transform: [{ scaleX: 5 }],
    zIndex: -1,
    top: 235,
  },
  nameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: 3,
  },
  typeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  typeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "black",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 600,
    color: "white",
    letterSpacing: 2,
  },
  descriptionContainer: {
    flex: 2,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionText: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    letterSpacing: 1,
  },
  btnContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  catchBtn: {
    backgroundColor: "rgba(255,2,2, .7)",
    borderRadius: 30,
  },
  catchText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: 3,
  },
});

export default PokemonDetailItem;
