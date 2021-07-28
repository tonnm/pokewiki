import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../api/api";
import PokemonDetail from "../components/PokemonDetailComponent";
export const PokemonInfos = createContext();

const DetailPokemon = () => {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    getPokemon(`/pokemon/${idPokemon}`, setPokemon);
  }, []);
  console.log(pokemon)
  return pokemon?(
    <PokemonInfos.Provider value={pokemon}>
      <PokemonDetail pokemonId={idPokemon} />
    </PokemonInfos.Provider>
  ): null;
};

export default DetailPokemon;
