import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function PokemonType({ type, index }) {
  // types water, fire, grass, ground, rock, steel, ice, electric, dragon, ghost, psychic, normal, fighting, poison, bug, flying, drak, fairy

  const [typeColor, setTypeColor] = useState("");

  useEffect(() => {
    switch (type) {
      case "normal":
        setTypeColor("#A8A77A");
        break;
      case "fire":
        setTypeColor("#EE8130");
        break;
      case "water":
        setTypeColor("#6390F0");
        break;
      case "electric":
        setTypeColor("#F7D02C");
        break;
      case "grass":
        setTypeColor("#7AC74C");
        break;
      case "ice":
        setTypeColor("#96D9D6");
        break;
      case "fighting":
        setTypeColor("#C22E28");
        break;
      case "poison":
        setTypeColor("#A33EA1");
        break;
      case "ground":
        setTypeColor("#E2BF65");
        break;
      case "flying":
        setTypeColor("#A98FF3");
        break;
      case "psychic":
        setTypeColor("#F95587");
        break;
      case "bug":
        setTypeColor("#A6B91A");
        break;
      case "rock":
        setTypeColor("#B6A136");
        break;
      case "ghost":
        setTypeColor("#735797");
        break;
      case "dragon":
        setTypeColor("#6F35FC");
        break;
      case "dark":
        setTypeColor("#705746");
        break;
      case "steel":
        setTypeColor("#B7B7CE");
        break;
      case "fairy":
        setTypeColor("#D685AD");
        break;

      default:
        setTypeColor("#fffff");
        break;
    }
  }, [type]);

  return (
    <View
      style={[styles.typeButton, { backgroundColor: typeColor }]}
      key={index}>
      <Text style={styles.typeText}>{type.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  typeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 600,
    color: "white",
    letterSpacing: 2,
  },
});
