import { useContext } from 'react';
import { PokemonContext } from '../App';

const HalamanDua = () => {
    const { states } = useContext(PokemonContext);
    return <h1>{states.pokemonName}</h1>;
};

export default HalamanDua;
