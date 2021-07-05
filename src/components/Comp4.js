import Comp5 from "./Comp5";

const Comp4 = ({ name }) => {
  return (
    <div className="mt-4">
      <h5>Component 4</h5>
      <h5>{name}</h5>
      <Comp5 pkn={name} />
    </div>
  );
};

export default Comp4;
