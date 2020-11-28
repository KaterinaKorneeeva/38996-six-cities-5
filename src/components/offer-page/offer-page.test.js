import React from "react";
import renderer from "react-test-renderer";
import OfferPage from "../offer-page/offer-page";
import {offerList} from "../../mocks/mocks";
import {AuthorizationStatus} from "../../const";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore()({
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: {
      email: `email@mail.ru`
    }
  },
  DATA: {
    offersNearby: offerList,
    offerIdActive: 6,
    comments: []
  }
});
jest.mock(`../map/map`, () => `Map`);
it(`Should OfferPage render correctly`, () => {
  const noop = () => {};

  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <OfferPage
              offer = {offerList[0]}
              offerId = {3}
              handleLoginClick={noop}
              handleFavoriteClick={noop}
              authorizationStatus = {AuthorizationStatus.AUTH}
              cityCoord = {[48.88, 2.35]}
              type = {`property_map`}
              loadComments ={noop}
              updateFavoriteOffer ={noop}
            />
          </MemoryRouter>
        </Provider>)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
