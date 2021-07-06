import { useContext } from 'react';
import { PokemonContext } from '../App';

const Comp5 = ({ pkn }) => {
    const { states } = useContext(PokemonContext);

    return (
        <div className="mt-4">
            <h6>Component 5</h6>
            <h6>{states.pokemonName}</h6>
        </div>
    );
};

export default Comp5;
