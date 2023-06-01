import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// SCREENS AND TAB SCREEN
import Tabs from "./tab";
import PokemonDetail from "../screens/POKEMONDETAIL/PokemonDetail";
import LoginScreen from "../screens/USER/LoginScreen";
import RegistrationScreen from "../screens/USER/RegistrationScreen";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />

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
          options={({ route }) => ({
            title: route.params.pokemonName.toUpperCase(),
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
