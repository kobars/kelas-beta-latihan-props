import Comp2 from "./Comp2";

const Comp1 = ({ pokemonName }) => {
  return (
    <div>
      <h2>Component 1</h2>
      <h2>{pokemonName}</h2>
      <Comp2 pkmnName={pokemonName} />
    </div>
  );
};

export default Comp1;
