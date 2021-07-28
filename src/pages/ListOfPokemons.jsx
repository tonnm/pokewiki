import React, { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { getListOfPokemons } from "../api/api";
import TablePokemonComponent from "../components/TablePokemonComponent/index";
export const PokemonDataList = createContext();

const ListOfPokemons = () => {
  const { idTipo } = useParams();
  const [listOfPokemons, setListOfPokemons] = useState([]);
  let showAmountOfRows = 5;
  useEffect(() => {
    getListOfPokemons(`type/${idTipo}`, setListOfPokemons);
  }, []);

  const arrayToChunks = (itemsPerChunks, array) => {
    let tempArr = [];
    for (let i = 0; i < array.length; i += itemsPerChunks) {
      let chunk = array.slice(i, i + itemsPerChunks);
      tempArr.push(chunk);
    }
    return tempArr;
  };

  return (
    <PokemonDataList.Provider value={arrayToChunks(showAmountOfRows,listOfPokemons)}>
      <TablePokemonComponent pokemonList={arrayToChunks(showAmountOfRows,listOfPokemons)} />
    </PokemonDataList.Provider>
  );
};

export default ListOfPokemons;
