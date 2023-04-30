import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function PreviousNextButton(props) {
  const { previousPokemonURLs, getNextPokemonData, getPreviousPokemonData } =
    props;
  return (
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
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "none",
  },
  nextButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingLeft: 60,
    paddingRight: 30,
    borderColor: "white",
    borderWidth: 1,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  backButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingLeft: 30,
    paddingRight: 60,
    borderColor: "white",
    borderWidth: 1,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PreviousNextButton;
