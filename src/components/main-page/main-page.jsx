import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Sorting from "../sorting/sorting";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import MainPageEmpty from "../main-page-empty/main-page-empty";
import CityList from "../city-list/city-list";
import User from "../user/user";
import {connect} from "react-redux";
import {toggleCity, updateActiveOfferId} from "../../store/action";
import {loadOffers} from "../../store/action";
import {getCoordByCity} from "../../offers";
import withActiveItem from "../../hocs/withActiveItem/withActiveItem";

const OfferListWrapped = withActiveItem(OfferList);
const MainPage = (props) => {
  const {offerList, selectedCity, toggleCityAction, updateActiveOfferIdAction, handleLoginClick, handleFavoriteClick} = props;
  const cityCoord = getCoordByCity(selectedCity);
  return (
    <Fragment>
      <div style={{display: `none`}}>
        <svg xlinkHref="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <User
                    handleLoginClick = {handleLoginClick}
                  />
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className= {props.offerList.length === 0 ? `page__main page__main--index page__main--index-empty` : `page__main page__main--index`}>
          <h1 className="visually-hidden">Cities</h1>
          <CityList
            selectedCity = {selectedCity}
            toggleCity = {toggleCityAction}
          />
          <div className="cities">
            {
              offerList.length === 0
                ? (
                  <MainPageEmpty
                    city={selectedCity}
                  />
                )
                : (
                  <div className="cities__places-container container">
                    <section className="cities__places places">
                      <h2 className="visually-hidden">Places</h2>
                      <b className="places__found"> {offerList.length} places to stay in {selectedCity}</b>
                      <Sorting />
                      <OfferListWrapped
                        offers={offerList}
                        type = "cities__places"
                        updateActiveOfferId= {updateActiveOfferIdAction}
                        handleFavoriteClick = {handleFavoriteClick}
                      />
                    </section>
                    <div className="cities__right-section">
                      <Map
                        cityCoord = {cityCoord}
                        offers={offerList}
                        type = "cities_map"
                      />
                    </div>
                  </div>
                )
            }
          </div>
        </main>
      </div>
    </Fragment>
  );
};

MainPage.propTypes = {
  toggleCityAction: PropTypes.func.isRequired,
  updateActiveOfferIdAction: PropTypes.func.isRequired,
  offerList: PropTypes.array.isRequired,
  selectedCity: PropTypes.string.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  handleFavoriteClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  selectedCity: DATA.selectedCity,
  offerList: DATA.offerListByCity,
  offerId: DATA.offerId,
  offerIdActive: DATA.offerIdActive,

});

const mapDispatchToProps = (dispatch) => ({
  toggleCityAction(selectedCity) {
    dispatch(toggleCity(selectedCity));
  },

  loadOffers() {
    dispatch(loadOffers());
  },

  updateActiveOfferIdAction(offerIdActive) {
    dispatch(updateActiveOfferId(offerIdActive));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
