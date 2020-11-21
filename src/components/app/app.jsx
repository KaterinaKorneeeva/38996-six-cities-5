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
import {AppRoute, AuthorizationStatus} from "../../const";

const App = (props) => {
  const {offerList, authorizationStatus} = props;
  const handleLoginClick = (evt, history) => {
    evt.preventDefault();
    return (
      authorizationStatus === AuthorizationStatus.NO_AUTH
        ? history.push(AppRoute.LOGIN)
        : history.push(AppRoute.FAVORITES)
    );

  };

  const handleFavoriteClick = (evt, history) => {
    evt.preventDefault();
    return (
      authorizationStatus === AuthorizationStatus.NO_AUTH
        ? history.push(AppRoute.LOGIN)
        : ``
    );

  };

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={({history}) => (
          <MainPage
            history = {history}
            handleLoginClick={(evt) => handleLoginClick(evt, history)}
            handleFavoriteClick={(evt) => handleFavoriteClick(evt, history)} />
        )}>
        </Route>
        <Route exact
          path = {AppRoute.LOGIN}>
          <AuthPage />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
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
            const offerId = +data.match.params.id;
            const offer = offerList.find((it) => it.id === offerId);
            return (
              <OfferPage
                offer = {offer}
                history = {history}
                handleLoginClick={(evt) => handleLoginClick(evt, history)}
                handleFavoriteClick={(evt) => handleFavoriteClick(evt, history)}
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  offerList: DATA.offerList,
  authorizationStatus: USER.authorizationStatus,
  offerIdActive: DATA.offerIdActive,
});


export {App};
export default connect(mapStateToProps)(App);
