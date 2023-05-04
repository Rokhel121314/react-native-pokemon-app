import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import CatchedResult from "./CatchedResult";
import { Context } from "../contextApi";

const CatchingAnimation = ({ pokemonName, pokemonImage }) => {
  const { gotResult, catching } = useContext(Context);
  return (
    <View style={styles.catchingAnimationContainer}>
      <Image
        style={styles.catchingAnimationImage}
        source={require("../assets/images/catch_animation.gif")}
      />
      <Text
        style={
          styles.catchingAnimationText
        }>{`CATCHING ${pokemonName.toUpperCase()}....`}</Text>

      {/* CATCH RESULT MODAL */}
      {catching ? (
        !gotResult ? null : (
          <CatchedResult
            pokemonName={pokemonName}
            pokemonImage={pokemonImage}
          />
        )
      ) : null}
    </View>
  );
};

export default CatchingAnimation;

const styles = StyleSheet.create({
  catchingAnimationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "relative",
  },
  catchingAnimationImage: {
    flex: 4,
    resizeMode: "contain",
    height: "100%",
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
  },
  catchingAnimationText: {
    flex: 1,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
});
