import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class withActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        offerActive: null,
        // offerActive: false,
      };

      this.handleOfferCardHover = this.handleOfferCardHover.bind(this);
    }

    handleOfferCardHover() {
      const { offerId } = this.props;
      this.setState({
        offerActive: offerId
      });
    }

    render() {
      const {offerActive} = this.state;
      return (
        <Component
          {...this.props}
          // userAnswers={answers}
          // onAnswer={this.handleAnswer}
          // onChange={this.handleChange}
          id={offerActive}
          onOfferCardHover={this.handleOfferCardHover}
        />
      );
    }
  }

  withActiveItem.propTypes = {
    onOfferCardHover: PropTypes.func.isRequired,
  };

  return withActiveItem;
};


export default withActiveItem;

