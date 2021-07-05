import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Comp1 from "../components/Comp1";
import { PokemonContext } from "../App";

function Index() {
  const [pokemons, setPokemons] = useState([]);
  // const [pokemonName, setPokemonName] = useState("");
  const { states, dispatch } = useContext(PokemonContext);
  const pokemonName = states.pokemonName;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const data = await res.json();
      setPokemons(data.results);
    };
    fetchData();
  }, []);

  const handleDetail = (name) => {
    dispatch({ type: "pokemon", payload: name });
  };

  return (
    <div className="container pt-4">
      <Link to="/page-two">Pindah ke halaman dua</Link>
      <h1 className="text-center">Pokemon App</h1>
      <div className="row mt-4">
        <div className="col-8">
          <ul className="list-group">
            <h2 className="text-center">List Pokemon </h2>
            {pokemons.map((pokemon, i) => {
              return (
                <li
                  key={i}
                  onClick={() => handleDetail(pokemon.name)}
                  className={`list-group-item list-group-item-action ${
                    pokemon.name === pokemonName && "active"
                  }`}
                >
                  {pokemon.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-4 pt-4">
          <Comp1 pokemonName={pokemonName} />
        </div>
      </div>
    </div>
  );
}

export default Index;
