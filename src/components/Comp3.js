import { useContext } from "react";
import { PokemonContext } from "../App";
import Comp4 from "./Comp4";

const Comp3 = ({ pokName }) => {
  const { states } = useContext(PokemonContext);
  return (
    <div className="mt-4">
      <h4>Component 3</h4>
      <h4>{states.pokemonName}</h4>
      <Comp4 />
    </div>
  );
};

export default Comp3;
