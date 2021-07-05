import Comp4 from "./Comp4";

const Comp3 = ({ pokName }) => {
  return (
    <div className="mt-4">
      <h4>Component 3</h4>
      <h4>{pokName}</h4>
      <Comp4 name={pokName} />
    </div>
  );
};

export default Comp3;
