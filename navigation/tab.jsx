import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";

// screens
import PokeDex from "../screens/POKEDEX/PokeDex";
import CatchedPokemon from "../screens/CATCHEDPOKEMON/CatchPokemon";
import PokemonLineUp from "../screens/POKEMONLINEUP/PokemonLineUp";
import MyHeader from "../components/Logout";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="pokeDex"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "black",
          height: 90,
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
          letterSpacing: 2,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "#FF0000",
          height: 90,
        },
      }}>
      <Tab.Screen
        name="catchedPokemon"
        component={CatchedPokemon}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={!focused ? styles.tabButton : styles.tabButtonFocused}>
              <Text
                style={
                  focused ? styles.tabButtonTextFocused : styles.tabButtonText
                }>
                MY POKEMON
              </Text>
            </View>
          ),

          header: ({ navigation, route, options }) => {
            const title = "MY POKEMONS";

            return <MyHeader title={title} style={options.headerStyle} />;
          },
        }}
      />

      <Tab.Screen
        name="pokeDex"
        component={PokeDex}
        options={{
          headerTitle: "POKEDEX",
          tabBarIcon: ({ focused }) => (
            <View style={!focused ? styles.tabButton : styles.tabButtonFocused}>
              <Text
                style={
                  focused ? styles.tabButtonTextFocused : styles.tabButtonText
                }>
                POKEDEX
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="pokemonLineUp"
        component={PokemonLineUp}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={!focused ? styles.tabButton : styles.tabButtonFocused}>
              <Text
                style={
                  focused ? styles.tabButtonTextFocused : styles.tabButtonText
                }>
                BATTLE
              </Text>
            </View>
          ),
          headerTitle: "BATTLE",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButtonFocused: {
    borderColor: "white",
    backgroundColor: "black",
    color: "white",
    borderWidth: 1,
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButtonText: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  tabButtonTextFocused: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Tabs;
