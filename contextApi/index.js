import { createContext, useEffect, useState } from "react";
import Axios from "axios";

export const Context = createContext(null);

function PokemonContext({ children }) {
  // getting pokemon datas

  const [isLoading, setIsLoading] = useState(false);
  const [loadingDescription, setLoadingDescription] = useState(false);
  const [pokemonURLs, setPokemonURLs] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPokemonURLs, setNextPokemonURLs] = useState("");
  const [previousPokemonURLs, setPreviousPokemonURLs] = useState("");
  const [pokeDexData, setPokeDexData] = useState([]);
  const [description, setDescription] = useState("");
  const [catching, setCatching] = useState(false);
  const [catchStatus, setCatchStatus] = useState("");

  // console.log("catchStatus", catchStatus);
  // console.log("catching?", catching);

  const getPokemonURL = async () => {
    try {
      const { data } = await Axios.get(pokemonURLs);
      getPokeDexData(data.results);
      setNextPokemonURLs(data.next);
      setPreviousPokemonURLs(data.previous);
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

  const getNextPokemonData = () => {
    setPokeDexData([]);
    setPokemonURLs(nextPokemonURLs);
  };

  const getPreviousPokemonData = () => {
    if (!previousPokemonURLs) {
      alert("no more data");
    } else {
      setPokeDexData([]);
      setPokemonURLs(previousPokemonURLs);
    }
  };

  useEffect(() => {
    getPokemonURL();
  }, [pokemonURLs]);

  // getting pokemon description

  const getPokemonDescription = async (id) => {
    try {
      setLoadingDescription(true);
      const { data } = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      setDescription(data.flavor_text_entries[0].flavor_text);
      setLoadingDescription(false);
    } catch (error) {
      console.error("error", error);
      setLoadingDescription(false);
    }
  };

  // catching pokemon
  // range 1-100
  const catchPokemon = (id) => {
    const catchChance = Math.ceil(Math.random() * 100);

    if (catchChance > 90) {
      setCatchStatus("");
      setCatching(true);
      setTimeout(() => {
        setCatching(false);
        setCatchStatus("catched");
        alert("catched");
      }, 12000);
    } else if (catchChance <= 90 && catchChance > 70) {
      setCatchStatus("");
      setCatching(true);
      setTimeout(() => {
        setCatching(false);
        setCatchStatus("almost");
        alert("almost");
      }, 12000);
    } else if (catchChance <= 70 && catchChance > 50) {
      setCatchStatus("");
      setCatching(true);
      setTimeout(() => {
        setCatching(false);
        setCatchStatus("barely");
        alert("barely");
      }, 12000);
    } else if (catchChance <= 50) {
      setCatchStatus("");
      setCatching(true);
      setTimeout(() => {
        setCatching(false);
        setCatchStatus("run");
        alert("run");
      }, 12000);
    }
  };

  return (
    <Context.Provider
      value={{
        pokeDexData,
        isLoading,
        getNextPokemonData,
        getPreviousPokemonData,
        previousPokemonURLs,
        getPokemonDescription,
        description,
        loadingDescription,
        catchPokemon,
        catchStatus,
        catching,
      }}>
      {children}
    </Context.Provider>
  );
}

export default PokemonContext;
