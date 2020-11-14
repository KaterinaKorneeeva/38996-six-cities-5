import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthPage from "../auth-page/auth-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {offers, offer, offerList} = props;


  const onLinkEmailClick = (evt, history) => {
    evt.preventDefault();
    history.push(authorizationStatus === AuthorizationStatus.NO_AUTH
      ? LOGIN
      : FAVORITE);
  };

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
          render={({history}) => {
            return (
              <FavoritesPage
                offers={offerList}
              />
            );
          }}
        />
        {/* <Route exact path="/favorites">
          <FavoritesPage
            offers={offerList}
          />
        </Route> */}

        <Route path={"/offer/:id"} component={OfferPage} />
        <Route exact path="/offer/:id">

          render = {() => {
            const offerId = 42;
            const offer = offerList.find((offer) => offer.id == offer.id === offerId )
            return  (
              <OfferPage
              offer = {offer}
              nearOffers={offerList.slice(0, 3)}
            />
            )
          }}

        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offerList: PropTypes.array.isRequired,
};


// const mapStateToProps = ({DATA}) => ({
//   // selectedCity: DATA.selectedCity,
//   offerList: DATA.offerListByCity,
//   offerId: DATA.offerId,
//   offerListByCity: DATA.offerListByCity,
//   // city: PropTypes.string.isRequired,
//   // updateActiveOfferId: PropTypes.func.isRequired,
//   // offerIdActive: DATA.offerIdActive,

// });


export default App;
