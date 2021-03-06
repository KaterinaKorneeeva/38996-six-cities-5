import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ReviewCard = (props) => {
  const {review} = props;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style = {{width: `${review.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <Moment className="reviews__time" date={review.date} format="MMMM/DD">
          {review.date}
        </Moment>
      </div>
    </li>
  );
};


ReviewCard.propTypes = {
  id: PropTypes.number.isRequired,
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReviewCard;
