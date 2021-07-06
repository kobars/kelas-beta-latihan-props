import { useContext } from "react";
import { PokemonContext } from "../App";
import Comp3 from "./Comp3";

const Comp2 = ({ pkmnName }) => {
  const { states } = useContext(PokemonContext);
  return (
    <div className="mt-4">
      <h3>Component 2</h3>
      <h3>{states.pokemonName}</h3>
      <Comp3 />
    </div>
  );
};

export default Comp2;
