import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";

import { Context } from "../../contextApi";
import CatchedResult from "./CatchedResult";

const CatchingAnimation = ({ pokemonName, pokemonImage, pokemonData }) => {
  const { gotResult, catching } = useContext(Context);
  return (
    <View style={styles.catchingAnimationContainer}>
      {!catching ? null : (
        <>
          <Image
            style={styles.catchingAnimationImage}
            source={require("../../assets/images/catch_animation.gif")}
          />
          <Text
            style={
              styles.catchingAnimationText
            }>{`CATCHING ${pokemonName.toUpperCase()}....`}</Text>
        </>
      )}

      {/* CATCH RESULT SCREEN */}
      {catching ? (
        !gotResult ? null : (
          <CatchedResult
            pokemonName={pokemonName}
            pokemonImage={pokemonImage}
            pokemonData={pokemonData}
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
