import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Container from "./common/Container";
import Navigation from "./components/Navigation";
import Spinner from "./common/Loader";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-view" */)
);
const MoviePage = lazy(() =>
  import("./pages/MoviePage" /*webpackChunkName: "movie-page"*/)
);
const MovieDetails = lazy(() =>
  import("./pages/MovieDetails" /* webpackChunkName: "movie-details"*/)
);
const NotFound = lazy(() =>
  import("./pages/NotFound" /*webpackChunkName: "not-found"*/)
);

const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.details} component={MovieDetails} />
          <Route path={routes.movies} component={MoviePage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
