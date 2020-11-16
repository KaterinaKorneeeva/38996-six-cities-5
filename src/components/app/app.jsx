import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthPage from "../auth-page/auth-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {connect} from "react-redux";

const App = (props) => {
  const {offerList, offerListByCity} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <AuthPage />
        </Route>
        <PrivateRoute
          exact
          path={`/favorites`}
          render={({_history}) => {
            return (
              <FavoritesPage
                offers={offerList}
              />
            );
          }}
        />
        <Route exact path="/offer/:id"
          render={(data) => {
            const offerId = parseInt(data.match.params.id, 10);
            const offer = offerList.find((it) => it.id === offerId);

            return (
              <OfferPage
                offer = {offer}
                nearOffers={offerListByCity.slice(0, 3)}
              />
            );
          }}
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offerList: PropTypes.array.isRequired,
  offerListByCity: PropTypes.array.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  offerList: DATA.offerList,
  offerListByCity: DATA.offerListByCity,
});

export {App};
export default connect(mapStateToProps)(App);
