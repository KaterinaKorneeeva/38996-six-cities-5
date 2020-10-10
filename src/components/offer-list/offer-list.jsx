import React, {PureComponent} from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offerActive: null,
    };
    this._handleOfferCardHover = this._handleOfferCardHover.bind(this);

  }

  _handleOfferCardHover(offer) {
    this.setState({
      offerActive: offer
    });
  }

  render() {

    const {offers} = this.props;
    return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) => (
        <OfferCard
          key = {offer.id}
          offer ={offer}
          id = {offer.id}
        />
      ))}
    </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferList;
