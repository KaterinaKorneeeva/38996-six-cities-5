import React from "react";
import PropTypes from "prop-types";

const OfferCard = (props) => {
  const {offer, id} = props;
  console.log('dddd',typeof offer.isArchive);

  return (
    <React.Fragment>
      <article  key={`${id}-${offer.title}`} className="cities__place-card place-card">

        {offer.isPremium
        ? <div className="place-card__mark">
            <span>Premium</span>
          </div>
        : null
        }

        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={offer.pictures[0]} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offer.title}</a>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>

    </React.Fragment>

  );
};


OfferCard.propTypes = {
  offer: PropTypes.shape({
    rating: PropTypes.string.isRequired,
    isArchive: PropTypes.bool.isRequired,
    pictures: PropTypes.array.isRequired,
    isPremium:PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rooms: PropTypes.string.isRequired,
    guests: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired,

    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired,
      author:  PropTypes.shape({
        name: PropTypes.string.isRequired,
        // rating: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
};

export default OfferCard;
