
import React, {Fragment} from 'react';
import ReviewCard from "../review_card/review_card";
import PropTypes from "prop-types";

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewCard
            key = {review.id}
            review = {review}
            id = {review.id}
          />
        )).slice(0, 5)}
      </ul>
    </Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};


export default ReviewsList;
