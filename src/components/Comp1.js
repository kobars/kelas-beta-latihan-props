import Comp2 from "./Comp2";

const Comp1 = ({ pokemonName }) => {
  return (
    <div>
      <h2>Component 1</h2>
      <h2>isi di sini</h2>
      <Comp2 />
    </div>
  );
};

export default Comp1;
