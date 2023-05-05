import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Context } from "../../contextApi";
import { useNavigation } from "@react-navigation/native";

export default function CatchedResult({
  pokemonName,
  pokemonImage,
  pokemonData,
}) {
  const { catchStatus, closeCatchResultScreen, catchPokemon } =
    useContext(Context);
  const navigation = useNavigation();
  return (
    <View style={styles.catchResultContainer}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{catchStatus}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pokemonImage }}
          style={{ resizeMode: "contain", height: "90%", width: "90%" }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={
            styles.catchText
          }>{`WILD ${pokemonName.toUpperCase()} !`}</Text>

        {catchStatus === "Gotcha!" ? (
          <Text style={styles.catchText}>{`HAS BEEN CAUGHT!`}!</Text>
        ) : catchStatus === "Broke free!" ? (
          <Text style={styles.catchText}>{`BROKE FREE!`}!</Text>
        ) : catchStatus === "Fled!" ? (
          <Text style={styles.catchText}>{`RUN AWAY`}!</Text>
        ) : null}
      </View>
      <View style={styles.btnContainer}>
        {catchStatus === "Gotcha!" ? (
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              navigation.navigate("catchedPokemon");
              closeCatchResultScreen();
            }}>
            <Text style={styles.closeText}>MY POKEMON</Text>
          </TouchableOpacity>
        ) : catchStatus === "Broke free!" ? (
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              closeCatchResultScreen();
            }}>
            <Text style={styles.closeText}>TRY AGAIN</Text>
          </TouchableOpacity>
        ) : catchStatus === "Fled!" ? (
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => {
              navigation.navigate("pokeDex");
              closeCatchResultScreen();
            }}>
            <Text style={styles.closeText}>LEAVE</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  catchResultContainer: {
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    fontSize: 42,
    fontWeight: 800,
    color: "black",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  catchText: {
    fontSize: 24,
    color: "black",
    fontWeight: 600,
    letterSpacing: 2,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    backgroundColor: "red",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
  },
  closeText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: 600,
  },
});
