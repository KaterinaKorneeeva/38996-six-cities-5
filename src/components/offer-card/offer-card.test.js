import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "../offer-card/offer-card";
import {AuthorizationStatus} from "../../const";
import {offerList} from "./../../mocks/mocks";

it(`Should OfferCard render correctly`, () => {
  const noop = () => {};
  const authorizationStatus = AuthorizationStatus.AUTH;
  const type = `cities__places`;
  const tree = renderer
     .create(<OfferCard
       type = {type}
       id = {1}
       handleFavoriteClick = {noop}
       updateFavoriteOffer = {noop}
       onOfferCardHover = {noop}
       addFavorite = {noop}
       authorizationStatus = {authorizationStatus}
       offer = {offerList[0]}
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
