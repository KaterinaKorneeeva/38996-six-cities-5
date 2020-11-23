import React from "react";
import renderer from "react-test-renderer";
import OfferList from "../offer-list/offer-list";
import {offerList} from "../../mocks/mocks";
import {AuthorizationStatus} from "../../const";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

it(`Should OfferList render correctly`, () => {
  const noop = () => {};
  const mockStore = configureStore()({
    USER: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {
        email: `email@mail.ru`
      }
    }
  });
  const tree = renderer
    .create(
        <Provider store={mockStore}>
          <MemoryRouter>
            <OfferList
              type = {`cities__places`}
              handleFavoriteClick= {noop}
              onOfferCardHover= {noop}
              offers = {offerList}
            />
          </MemoryRouter>
        </Provider>)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
