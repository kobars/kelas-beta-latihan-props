import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/index";
// import HalamanDua from "./pages/HalamanDua";
// import NotFound from "./pages/NotFound";

const BasicExample = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route exact path="/page-two">
          <HalamanDua />
        </Route> */}
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default BasicExample;
