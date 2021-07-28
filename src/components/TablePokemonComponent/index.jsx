import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonDataList } from "../../pages/ListOfPokemons";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import { AlignItemsInCenter, StyledButton, StyledNewDiv, StyledTr, StyledDiv } from "./styles";

const TablePokemon = (props) => {
  const pokemonList = props.pokemonList;
  const [currentPosition, setCurrentPosition] = useState(0);

  const nextArrayChunk = () => {
    let currentPostion = currentPosition;
    currentPostion++;
    setCurrentPosition(currentPostion);
    if (currentPostion >= pokemonList.length) {
      currentPostion--;
      setCurrentPosition(currentPostion);
    }
  };

  const prevArrayChunck = () => {
    let currentPostion = currentPosition;
    currentPostion--;
    setCurrentPosition(currentPostion);
    if (currentPostion < 0) {
      currentPostion++;
      setCurrentPosition(currentPostion);
    }
  };

  const getPokemonId = (pokemonUrl) => {
    return pokemonUrl.split("/")[6];
  };

  return (
    <StyledNewDiv>
    <StyledDiv>
      <table>
        <thead>
          <StyledTr>
            <th>Pokémon Name</th>
          </StyledTr>
        </thead>
        <tbody className="list">
          {pokemonList[currentPosition]?.map((pokemon, index) => (
            <StyledTr key={index}>
              <Link to={`/detail-pokemon/`+ getPokemonId(pokemon.pokemon.url) }>
              {capitalizeFirstLetter(pokemon.pokemon.name)}
              </Link>
            </StyledTr>
          ))}
        </tbody>
      </table>
      <AlignItemsInCenter>
        <StyledButton onClick={prevArrayChunck}>Prev</StyledButton>
        <StyledButton onClick={nextArrayChunk}>Next</StyledButton>
      </AlignItemsInCenter>
    </StyledDiv>
    </StyledNewDiv>
  );
};

export default TablePokemon;
