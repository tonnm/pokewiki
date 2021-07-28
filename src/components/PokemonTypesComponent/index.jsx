import React, { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import returnId from "../../utils/returnId";
import { Link } from "react-router-dom";
import { listOfTypesOfPokemons } from "../../api/api";
import CardSpritesComponent from "../CardSpritesComponent";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

const PokemonTypes = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    listOfTypesOfPokemons(`/type`, setTypes);
  }, []);
  return (
    <div className="container">
      {types
        .filter((type) => type.name !== "unknown" && type.name !== "shadow")
        .map((type, index) => (
          <Card className="card" key={index}>
            <CardActionArea>
              <Link
                to={`/list-pokemon/` + returnId(type.url)}
                style={{ textDecoration: "none" }}
              >
                <CardSpritesComponent nameType={type.name} typeUrl={type.url} />
                <CardContent>
                  <h2>{capitalizeFirstLetter(type.name)}</h2>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}
    </div>
  );
};

export default PokemonTypes;
