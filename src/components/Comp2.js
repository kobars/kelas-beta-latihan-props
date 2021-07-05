import Comp3 from "./Comp3";

const Comp2 = ({ pkmnName }) => {
  return (
    <div className="mt-4">
      <h3>Component 2</h3>
      <h3>{pkmnName}</h3>
      <Comp3 pokName={pkmnName} />
    </div>
  );
};

export default Comp2;
