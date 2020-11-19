
import _React, {_Fragment, PureComponent} from 'react';
import _ReviewCard from "../review_card/review_card";
import PropTypes from "prop-types";
import {loadComments} from "../../store/action";

import {getCommentsByHotelId} from "../../store/api-actions";
// const ReviewsList = (props) => {
import {connect} from 'react-redux';
class ReviewsList extends PureComponent {

  componentDidMount() {
    // console.log('wwww');
    const {loadComments, offerIdActive} = this.props;
    // const  idActiveOffer = offerIdActive;

    // console.log('offerIdActive',offerIdActive)

    loadComments(offerIdActive);
  }

  render() {
    const {comments} = this.props;
    console.log('reviews',comments);
    return (
    // <Fragment>
    //   <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    //   <ul className="reviews__list">
    //     {reviews.map((review) => (
    //       <ReviewCard
    //         key = {review.id}
    //         review = {review}
    //         id = {review.id}
    //       />
    //     ))}
    //   </ul>
    // </Fragment>
      ``
    );
  }
}

ReviewsList.propTypes = {
  comments: PropTypes.array.isRequired,
  offerIdActive: PropTypes.number.isRequired,
};

const mapStateToProps = (({DATA}) => ({
  comments: DATA.comments,
  offerIdActive: DATA.offerIdActive,
}));

const mapDispatchToProps = ((dispatch) => ({
  loadComments(offerIdActive) {
    dispatch(getCommentsByHotelId(offerIdActive));
  }
}));

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
