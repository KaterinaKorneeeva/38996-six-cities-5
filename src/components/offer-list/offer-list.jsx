
import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";

const OfferList = (props) => {
  const {onOfferCardHover, offers, type} = props;
  return (
    <div className = {type === `cities__places` ? `cities__places-list tabs__content places__list` : `near-places__list places__list`}>
      {offers.map((offer) => (
        <OfferCard
          key = {offer.id}
          offer = {offer}
          id = {offer.id}
          onOfferCardHover={onOfferCardHover}
          type = {type}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default OfferList;
