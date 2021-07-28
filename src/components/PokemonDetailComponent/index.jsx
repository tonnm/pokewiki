import React, { useEffect, useState } from "react";
import {
  PokemonName,
  StyledBox,
  StyledCard,
  StyledContainer,
  StyledParagraph,
} from "./styles";
import { PokemonInfos } from "../../pages/DetailPokemon";
import { useContext } from "react";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import PokemonSprite from "../PokemonSpritesComponent";

const PokemonDetail = (props) => {
  const pokemon = useContext(PokemonInfos);
  const [abilities, setAbilities] = useState();
  const [type, setType] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [textParagraph, setTextParagraph] = useState();
  useEffect(() => {
    console.log(props.pokemonId);
    abilitiesText();
    typeText();
    convertDecimetertoMeter();
    convertHectogramToKilogram();
    paragraphTextAppend();
  }, []);

  const abilitiesText = () => {
    let abilitiesTmp = "";
    pokemon.abilities.map(
      (abilities) =>
        (abilitiesTmp =
          abilitiesTmp + capitalizeFirstLetter(abilities.ability.name) + " / ")
    );
    abilitiesTmp = abilitiesTmp.replace(/-/g, " ");
    abilitiesTmp = abilitiesTmp.slice(0, -2) + "";
    setAbilities(abilitiesTmp);
  };
  const typeText = () => {
    let typeTmp = "";
    pokemon.types.map(
      (type) =>
        (typeTmp = typeTmp + capitalizeFirstLetter(type.type.name) + " / ")
    );
    typeTmp = typeTmp.replace(/-/g, " ");
    typeTmp = typeTmp.slice(0, -2) + "";
    setType(typeTmp);
  };
  const paragraphTextAppend = () => {
    let paragraph = "";
    pokemon.moves.map(
      (moves) =>
        (paragraph = paragraph + capitalizeFirstLetter(moves.move.name) + ", ")
    );
    paragraph = paragraph.slice(0, -2) + ".";
    paragraph = paragraph.replace(/-/g, " ");
    setTextParagraph(paragraph);
  };

  const convertDecimetertoMeter = () => {
    let meterTmp = 0;
    meterTmp = pokemon.height * 0.1;
    setHeight(meterTmp.toFixed(2))
  }

  const convertHectogramToKilogram = () => {
    let kylogramTmp = 0;
    kylogramTmp = pokemon.weight * 0.1;
    setWeight(kylogramTmp.toFixed(2))
  }

  return (
    <StyledContainer>
      <h1>Detalhes sobre o Pokémon</h1>
      <StyledBox>
        <StyledCard>
          <PokemonSprite pokemonId={props.pokemonId} />
          <PokemonName>Nome: {capitalizeFirstLetter(pokemon.name)}</PokemonName>
          <PokemonName>Habilidades: {abilities}</PokemonName>
          <PokemonName>Tipo: {type}</PokemonName>
          <PokemonName>Altura: {height} m</PokemonName>
          <PokemonName>Peso: {weight} kg</PokemonName>
          <PokemonName>Lista de Golpes</PokemonName>
          <div>
            <StyledParagraph>{textParagraph}</StyledParagraph>
          </div>
        </StyledCard>
      </StyledBox>
    </StyledContainer>
  );
};

export default PokemonDetail;
