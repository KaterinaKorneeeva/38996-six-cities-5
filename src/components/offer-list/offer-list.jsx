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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextState' ,nextState);
    console.log('offerIdshouldComponentUpdate' ,this.state);
    const {offerId} = this.state;
    return !(offerId === nextState.offerId)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate' ,this.state);
    console.log('update');
  }

  _handleOfferCardHover(offerId) {
    console.log('offerId',offerId);
    this.setState({
      offerActive: offerId
    });
  }

  render() {
    const {offers} = this.props;

    console.log('offerIdddddd',this.state);
    return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key = {offer.id}
          offer = {offer}
          id = {offer.id}
          onOfferCardHover={this._handleOfferCardHover}
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
