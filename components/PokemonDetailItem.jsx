import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Context } from "../contextApi";
import { useContext } from "react";
import PokemonType from "./PokemonType";
import CatchingAnimation from "./CatchingAnimation";

function PokemonDetailItem() {
  const route = useRoute();
  const { pokemonData, pokemonName, pokemonImage } = route.params;
  const type = pokemonData.types.map((type) => type.type.name);
  const {
    description,
    loadingDescription,
    catchPokemon,
    catching,
    catchStatus,
  } = useContext(Context);

  return (
    <>
      {catching ? (
        <CatchingAnimation
          pokemonName={pokemonName}
          catching={catching}
          pokemonImage={pokemonImage}
        />
      ) : (
        <View style={styles.pokemonDetailContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={{ resizeMode: "contain", height: "90%", width: "90%" }}
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
                  return <PokemonType type={type} index={index} key={index} />;
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
            <TouchableOpacity
              style={styles.catchBtn}
              onPress={() => catchPokemon(pokemonData)}>
              <Image
                source={require("../assets/images/pokeball.png")}
                style={{ resizeMode: "contain", height: 100, width: 100 }}
              />
              <Text style={styles.catchText}>CATCH</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
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
    top: 255,
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
    // backgroundColor: "rgba(255,2,2, .7)",
    // borderRadius: 30,
    alignItems: "center",
  },
  catchText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "black",
    fontSize: 16,
    fontWeight: 800,
    letterSpacing: 3,
  },
});

export default PokemonDetailItem;
