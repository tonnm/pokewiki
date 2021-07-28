import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import Home from "../pages/Home";
import ListOfPokemons from "../pages/ListOfPokemons";
import DetailPokemon from "../pages/DetailPokemon";
const Routes = () => {
  return (
    
    <Router>
      <HeaderComponent/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list-pokemon/:idTipo">
          <ListOfPokemons />
        </Route>
        <Route path="/detail-pokemon/:idPokemon">
          <DetailPokemon />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
