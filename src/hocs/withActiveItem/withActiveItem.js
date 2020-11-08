import React, {PureComponent} from "react";
import PropTypes from "prop-types";
const withActiveItem = (Component) => {
  class withActive extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        offerActive: null,
      };

      this.handleOfferCardHover = this.handleOfferCardHover.bind(this);
    }

    handleOfferCardHover(offerId) {
      this.props.updateOfferIdActive(offerId);
      this.setState({
        offerActive: offerId
      });
    }

    render() {
      const {offerActive} = this.state;
      return (
        <Component
          {...this.props}
          id={offerActive}
          onOfferCardHover={this.handleOfferCardHover}
        />
      );
    }
  }

  return withActive;
};

withActiveItem.PropTypes = {
  updateOfferIdActive: PropTypes.func.isRequired,
};

export default (withActiveItem);
