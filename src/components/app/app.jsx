import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthPage from "../auth-page/auth-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";
import {connect} from "react-redux";

const App = (props) => {
  const {offers, offer} = props;

  // console.log('props1111111111',props);
  // componentDidMount() {

  // };

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
            offer = {offer}
            nearOffers={offers.slice(0, 3)}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  // offers: DATA.selectedCity,
  // offerListByCity: DATA.offerListByCity
  offer: DATA.offer,
  offers: DATA.offerList,
  offerId: DATA.offerId,
});

export {App};
export default connect(mapStateToProps)(App);
