import { StatusBar } from "expo-status-bar";

import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import PokemonDetail from "./screens/POKEMONDETAIL/PokemonDetail";
import Tabs from "./navigation/tab";
import PokemonContext from "./contextApi";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PokemonContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="bottomTab"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="pokemonDetail"
            component={PokemonDetail}
            options={{
              headerTitle: "POKEMON NAME",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PokemonContext>
  );
}
