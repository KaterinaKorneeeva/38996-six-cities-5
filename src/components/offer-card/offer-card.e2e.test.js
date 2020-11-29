
import {AuthorizationStatus} from "../../const";
import {offerList} from "../../mocks/mocks";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import Enzyme, {shallow} from "enzyme";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockEvent = {
  preventDefault() {}
};

it(`Should offer-card click favorite button`, () => {
  const updateFavoriteOfferMock = jest.fn();
  const noop = () => {};
  const wrapper = shallow(
      <OfferCard
        type = {`cities__places`}
        id = {1}
        handleFavoriteClick = {noop}
        onOfferCardHover = {noop}
        addFavorite = {noop}
        authorizationStatus = {AuthorizationStatus.AUTH}
        offer = {offerList[0]}
        preventDefault = {() => {}}
        handleAddFavoriteClick={() => {}}
        updateFavoriteOffer= {updateFavoriteOfferMock}
      />
  );
  wrapper.find(`.place-card__bookmark-button`).simulate(`click`, mockEvent);
  expect(updateFavoriteOfferMock).toHaveBeenCalledTimes(1);
});

it(`Should update offer card id onMouse`, () => {
  const onOfferCardHoverMock = jest.fn();
  const noop = () => {};
  const wrapper = shallow(
      <OfferCard
        type = {`cities__places`}
        id = {1}
        handleFavoriteClick = {noop}
        addFavorite = {noop}
        authorizationStatus = {AuthorizationStatus.AUTH}
        offer = {offerList[0]}
        updateFavoriteOffer = {() => {}}
        preventDefault = {() => {}}
        handleAddFavoriteClick={() => {}}
        onOfferCardHover= {onOfferCardHoverMock}
      />
  );
  wrapper.find(`.place-card`).simulate(`mouseover`, mockEvent);
  expect(onOfferCardHoverMock).toHaveBeenCalledTimes(1);
});
