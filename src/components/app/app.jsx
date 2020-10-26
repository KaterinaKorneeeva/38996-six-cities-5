import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthPage from "../auth-page/auth-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <AuthPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id">
          <OfferPage
            offer={offers[0]}
            offers={offers.slice(0, 3)}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
