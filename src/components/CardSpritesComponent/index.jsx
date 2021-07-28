import React, { useState, useEffect } from "react";

import { getPokemonsOfAType } from "../../api/api";

import PokemonSprite from "../PokemonSpritesComponent/index";

const CardSpritesComponent = (props) => {
  const [typeOfPokemons, setTypeOfPokemons] = useState([]);

  useEffect(() => {
    getPokemonsOfAType(`${props.typeUrl}`, setTypeOfPokemons);
  }, []);
  
  const getPokemonId = (pokemonUrl) => {
    return pokemonUrl.split("/")[6];
  };
  return typeOfPokemons[0] ? (
  <PokemonSprite pokemonId={getPokemonId(typeOfPokemons[0].pokemon.url)} />
  ): null;
};

export default CardSpritesComponent;
