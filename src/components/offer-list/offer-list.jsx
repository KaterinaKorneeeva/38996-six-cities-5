// import React, {PureComponent} from "react";
import React from "react";
import OfferCard from "../offer-card/offer-card";
import PropTypes from "prop-types";

// class OfferList extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       offerActive: null,
//     };
//     this._handleOfferCardHover = this._handleOfferCardHover.bind(this);

//   }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   console.log('nextState' ,nextState);
//   //   console.log('offerIdshouldComponentUpdate' ,this.state);
//   //   const {offerId} = this.state;
//   //   return !(offerId === nextState.offerId)
//   // }
//   componentDidUpdate() {
//     console.log('componentDidUpdate' ,this.state);
//     console.log('updateerrrrrrrrrrrrrr');
//   }

//   _handleOfferCardHover(offerId) {
//     console.log('offerId',this.state);
//     this.setState({
//       offerActive: offerId
//     });
//   }

//   render() {
//     const {offers} = this.props;

//     console.log('offerIdddddd',this.state);



// import withActiveItem from "../../hocs/withActiveItem/withActiveItem";

// const OfferCardWrapped = withActiveItem(OfferCard);



import withActiveItem from "../../hocs/withActiveItem/withActiveItem";

const OfferCardWrapped = withActiveItem(OfferCard);



const OfferList = (props) => {
  // const {offers, onOfferCardHover ,children } = props;

  const {
    onOfferCardHover,
    offers,
    children,
  } = props;

  // console.log('onOfferCardHover',onOfferCardHover);


  console.log('children',children);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        // <OfferCardWrapped
        <OfferCard
          key = {offer.id}
          offer = {offer}
          id = {offer.id}
          // {onOfferCardHover(offer.id)}
          onOfferCardHover={onOfferCardHover}
        />
      ))}
    </div>
  );
}

OfferList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  offers: PropTypes.array.isRequired,
  // onOfferCardHover: PropTypes.func.isRequired,
};

export default OfferList;
