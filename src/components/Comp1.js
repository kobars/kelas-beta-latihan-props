import { useContext } from "react";
import { PokemonContext } from "../App";
import Comp2 from "./Comp2";

const Comp1 = ({ pokemonName }) => {
  const { states } = useContext(PokemonContext);
  return (
    <div>
      <h2>Component 1</h2>
      <h2>{states.pokemonName}</h2>
      <Comp2 />
    </div>
  );
};

export default Comp1;
