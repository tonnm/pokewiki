import React, { createContext } from "react";
import PokemonTypes from "../components/PokemonTypesComponent";

export const UserContext = createContext();

const Home = () => {

  return (
    <PokemonTypes/>
  );
};

export default Home;
