import PokemonContext from "./contextApi";
import Stacks from "./navigation/stacks";

export default function App() {
  return (
    <PokemonContext>
      <Stacks />
    </PokemonContext>
  );
}
