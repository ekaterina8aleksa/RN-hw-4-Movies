import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
// import HomePage from "./pages/HomePage.js";
// import MoviePage from "./pages/MoviePage";
// import MovieDetails from "./pages/MovieDetails";
// import NotFound from "./pages/NotFound.js";
import Container from "./components/Container";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-view" */)
);

const App = () => {
  return (
    <Container>
      <Suspense fallback={<h1>Добреньких вечерочков</h1>}></Suspense>
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
        <Route exact path={routes.home} component={HomePage} />
        {/* <Route path="/" component={MoviePage} />
                <Route path="/" component={MovieDetails} />
                <Route component={NotFound} /> */}
      </Switch>
    </Container>
  );
};

export default App;
