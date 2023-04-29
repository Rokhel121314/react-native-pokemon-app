import { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const Context = createContext(null);

function PokemonContext({ children }) {
  // getting pokemon datas

  const [isLoading, setIsLoading] = useState(false);
  const [pokemonURLs, setPokemonURLs] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPokemonURLs, setNextPokemonURLs] = useState("");
  const [pokeDexData, setPokeDexData] = useState([]);

  // console.log("test", pokeDexData);

  const getPokemonURL = async () => {
    try {
      setIsLoading(true);
      const { data } = await Axios.get(pokemonURLs);
      getPokeDexData(data.results);
      setNextPokemonURLs(data.next);
      setIsLoading(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  const getPokeDexData = (urls) => {
    urls.map(async (link) => {
      try {
        setIsLoading(true);
        const { data } = await Axios.get(link.url);
        setPokeDexData((pokemonData) => {
          pokemonData = [...pokemonData, data];
          pokemonData.sort((a, b) => (a.id > b.id ? 1 : -1));
          return pokemonData;
        });
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    });
  };

  const getMorePokeDexData = () => {
    setPokemonURLs(nextPokemonURLs);
  };

  useEffect(() => {
    getPokemonURL();
  }, [pokemonURLs]);

  return (
    <Context.Provider value={{ pokeDexData, isLoading, getMorePokeDexData }}>
      {children}
    </Context.Provider>
  );
}

export default PokemonContext;