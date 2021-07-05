import { useEffect, useState } from "react";
import Comp1 from "../components/Comp1";

function Index() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const data = await res.json();
      setPokemons(data.results);
    };
    fetchData();
  }, []);

  const handleDetail = (name) => {
    setPokemonName(name);
  };

  //   Ini contoh commit

  return (
    <div className="container pt-4">
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
