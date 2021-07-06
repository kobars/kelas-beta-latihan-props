import { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/index';
import HalamanDua from './pages/HalamanDua';
// import NotFound from "./pages/NotFound";

const initialStates = {
    pokemonName: 'BUKAN BULBASAUR',
    pokemonUrl: '',
};

export const PokemonContext = createContext(initialStates);

function reducer(state, action) {
    switch (action.type) {
        case 'pokemon':
            return { ...state, pokemonName: action.payload };
        case 'mentor':
            return { ...state, pokemonName: 'Kobar' };
        default:
            throw new Error();
    }
}

const BasicExample = () => {
    const [states, dispatch] = useReducer(reducer, initialStates);
    return (
        <PokemonContext.Provider value={{ states, dispatch, initialStates }}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/page-two">
                        <HalamanDua />
                    </Route>
                    {/* <Route path="*">
          <NotFound />
        </Route> */}
                </Switch>
            </Router>
        </PokemonContext.Provider>
    );
};

export default BasicExample;
