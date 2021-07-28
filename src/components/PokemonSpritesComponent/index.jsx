import React, { useState, useEffect } from 'react';
import { getPokemon } from "../../api/api";

const PokemonSprite = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [sprite, setSprite] = useState([]);
    
    useEffect(() => {
        if(props.pokemonId)
        getPokemon(`pokemon/${props.pokemonId}`,setPokemon)
    }, [props.pokemonId]);   

    useEffect(() => {
        if(pokemon.sprites){
            setSprite(pokemon.sprites.front_default)
        }
    }, [pokemon.sprites]);

    return ( 
        <img src={sprite} />
     );
}
 
export default PokemonSprite;