import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const OfferCard = (props) => {
  const {offer, id, onOfferCardHover} = props;
  const offerUrl = `offer/` + id;

  return (
    <React.Fragment>
      <article  key={`${id}-${offer.title}`}
        className="cities__place-card place-card"
        onMouseOver={(evt) => {
          evt.preventDefault();
          onOfferCardHover(id);
        }}
      >

        {offer.isPremium
        ? <div className="place-card__mark">
            <span>Premium</span>
          </div>
        : null
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
            <img className="place-card__image" src={offer.pictures[0]} width="260" height="200" alt="Place image" />
        </Link>
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
            <Link to={offerUrl}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </React.Fragment>

  );
};


OfferCard.propTypes = {
  onOfferCardHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    rating: PropTypes.string.isRequired,
    pictures: PropTypes.array.isRequired,
    isPremium:PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default OfferCard;