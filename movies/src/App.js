import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetails from "./pages/MovieDetails";
// import NotFound from "./pages/NotFound.js";
import Container from "./components/Container";

const App = () => {
  return (
    <Container>
      {/* <ul>
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/">Details</NavLink>
                </li>
                <li>
                    <NavLink to="/">Credits</NavLink>
                </li>
                <li>
                    <NavLink to="/">Reviews</NavLink>
                </li>
            </ul> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/" component={MoviePage} />
                <Route path="/" component={MovieDetails} />
                <Route component={NotFound} /> */}
      </Switch>
    </Container>
  );
};

export default App;
