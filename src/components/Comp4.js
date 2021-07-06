import { useContext } from "react";
import { PokemonContext } from "../App";
import Comp5 from "./Comp5";

const Comp4 = ({ name }) => {
  const { states } = useContext(PokemonContext);
  return (
    <div className="mt-4">
      <h5>Component 4</h5>
      <h5>{states.pokemonName}</h5>
      <Comp5 />
    </div>
  );
};

export default Comp4;
