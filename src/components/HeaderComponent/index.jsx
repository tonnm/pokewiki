import React from "react";
import { StyledHeader } from "./styles";
import Icon from "../../assets/images/image2vector.svg";
import { Link } from "react-router-dom";
import "../../App.css";

export default function HeaderComponent() {
  return (
    <StyledHeader className="header">
      <Link to={`/`}>
        <img className="logo" src={Icon} alt="Pokémon" />
      </Link> 
    </StyledHeader>
  );
}
