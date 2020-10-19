import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";

const OfferList = (props) => {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key = {offer.id}
          offer = {offer}
          id = {offer.id}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferList;
