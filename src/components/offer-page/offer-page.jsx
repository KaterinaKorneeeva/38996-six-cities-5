import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import OfferList from "../offer-list/offer-list";
import ReviewsForm from "../reviews-form/reviews-form";
import ReviewsList from "../reviews_list/reviews_list";
import withActiveItem from "../../hocs/withActiveItem/withActiveItem";
import Map from "../map/map";
import User from "../user/user";
import {getCoordByCity} from "../../offers";
import {connect} from 'react-redux';
import {updateActiveOfferId} from "../../store/action";
import {getHotelsNearby, getCommentsByHotelId, addFavorite} from "../../store/api-actions";
const OfferListWrapped = withActiveItem(OfferList);
import {AuthorizationStatus} from "../../const";
class OfferPage extends PureComponent {

  constructor(props) {
    super(props);
    this.handleAddFavoriteClick = this.handleAddFavoriteClick.bind(this);
  }

  componentDidMount() {
    const {loadOffersNearby, _offerIdActive, offerId, loadComments} = this.props;
    loadOffersNearby(offerId);
    loadComments(offerId);
  }

  handleAddFavoriteClick(evt) {
    evt.preventDefault();
    this.props.updateFavoriteOffer({
      id: this.props.offer.id,
      status: this.props.offer.isFavorite ? 0 : 1,
    });
  }

  render() {
    const {offer, offersNearby, handleLoginClick, comments, updateActiveOfferIdAction, authorizationStatus, handleFavoriteClick} = this.props;
    const cityCoord = getCoordByCity(offer.city.name);
    return (
      <Fragment>
        <div style={{display: `none`}}>
          <svg xlinkHref="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>
        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link" href="/">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <User
                      handleLoginClick = {handleLoginClick}
                    />
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offer.images.map((picture, i) => (
                    <div key={i} className="property__image-wrapper">
                      <img className="property__image" src={picture} alt={offer.title}/>
                    </div>
                  ))}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {offer.isPremium
                    ?
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                    : null
                  }
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {offer.title}
                    </h1>
                    <button
                      className= {offer.isFavorite ? `property__bookmark-button--active button` : `property__bookmark-button button`}
                      type="button"
                      onClick= {authorizationStatus === AuthorizationStatus.NO_AUTH ? handleFavoriteClick : this.handleAddFavoriteClick}>
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: `${offer.rating * 20}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{offer.rating}</span>
                  </div>

                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {offer.type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {offer.bedrooms} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {offer.maxAdults} adults
                    </li>
                  </ul>

                  <div className="property__price">
                    <b className="property__price-value">&euro;{offer.price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {offer.goods.map((feature, i) => (
                        <li key={i} className="property__inside-item">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className =
                        {offer.host.isPro
                          ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                          : `property__avatar-wrapper user__avatar-wrapper`
                        }
                      >
                        <img className="property__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar"/>
                      </div>
                      <span className="property__user-name">
                        {offer.host.name}
                      </span>
                    </div>
                    <div className="property__description">
                      {offer.description}
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <ReviewsList
                      reviews={comments}
                    />
                    <ReviewsForm />
                  </section>
                </div>
              </div>
              <Map
                cityCoord = {cityCoord}
                offers={offersNearby}
                type = "property_map"
              />
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OfferListWrapped
                  offers={offersNearby}
                  type = "near-places"
                  updateActiveOfferId= {updateActiveOfferIdAction}
                  handleFavoriteClick = {handleFavoriteClick}
                />
              </section>
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

OfferPage.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.object.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  offersNearby: PropTypes.array.isRequired,
  loadComments: PropTypes.func.isRequired,
  loadOffersNearby: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  offerIdActive: PropTypes.number.isRequired,
  updateActiveOfferIdAction: PropTypes.func.isRequired,
  updateFavoriteOffer: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  handleFavoriteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (({DATA, USER}) => ({
  offersNearby: DATA.offersNearby,
  offerIdActive: DATA.offerIdActive,
  comments: DATA.comments,
  authorizationStatus: USER.authorizationStatus,
}));

const mapDispatchToProps = ((dispatch) => ({


  loadComments(offerIdActive) {
    dispatch(getCommentsByHotelId(offerIdActive));
  },
  loadOffersNearby(offerIdActive) {
    dispatch(getHotelsNearby(offerIdActive));
  },
  updateActiveOfferIdAction(offerIdActive) {
    dispatch(updateActiveOfferId(offerIdActive));
  },
  updateFavoriteOffer(favoriteData) {
    dispatch(addFavorite(favoriteData));
  },
}));

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
