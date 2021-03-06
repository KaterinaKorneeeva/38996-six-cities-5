import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addReview} from "../../store/api-actions";


class ReviewsForm extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      review: ``,
      rating: null,
      isDisabled: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this._formRef = createRef();
  }

  handleSubmit(evt) {
    const {onSubmit, offerIdActive} = this.props;
    evt.preventDefault();

    onSubmit({
      comment: this.state.review,
      id: offerIdActive,
      rating: this.state.rating,
    });

    this._formRef.current.reset();

    this.setState((state) => {
      return {
        isDisabled: !state.isDisabled,
      };
    });
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form
        ref= {this._formRef}
        className="reviews__form form"
        action="#" method="post"
        onSubmit={this.handleSubmit}>

        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input
            onChange={this.handleFieldChange}
            className="form__rating-input visually-hidden"
            name="rating"
            value="5"
            id="5-stars"
            type="radio"
            disabled={this.state.isDisabled}
          />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            onChange={this.handleFieldChange}
            className="form__rating-input visually-hidden"
            name="rating"
            value="4"
            id="4-stars"
            type="radio"
            disabled={this.state.isDisabled}
          />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            onChange={this.handleFieldChange}
            className="form__rating-input visually-hidden"
            name="rating"
            value="3"
            id="3-stars"
            type="radio"
            disabled={this.state.isDisabled}
          />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            onChange={this.handleFieldChange}
            className="form__rating-input visually-hidden"
            name="rating"
            value="2"
            id="2-stars"
            type="radio"
            disabled={this.state.isDisabled}
          />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input
            onChange={this.handleFieldChange}
            className="form__rating-input visually-hidden"
            name="rating" value="1"
            id="1-star"
            type="radio"
            disabled={this.state.isDisabled}
          />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          minLength = "50" maxLength = "300"
          onChange={this.handleFieldChange}
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          disabled={this.state.isDisabled}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

ReviewsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  offerIdActive: PropTypes.number.isRequired,
};


const mapStateToProps = (({DATA}) => ({
  offerIdActive: DATA.offerIdActive,
}));

const mapDispatchToProps = (dispatch) => ({
  onSubmit(reviewData) {
    dispatch(addReview(reviewData));
  }
});

export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
