
import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
const FavoritesList = (props) => {
  const {city, favoriteOffersInCity} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffersInCity.map((offer) => (
          <OfferCard
            key = {offer.id}
            offer = {offer}
            id = {offer.id}
          />
        ))}
      </div>
    </li>
  );
};

FavoritesList.propTypes = {
  favoriteOffersInCity: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

export default FavoritesList;
