import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "../main-page/main-page";
import {AuthorizationStatus} from "../../const";
import {offerList} from "../../mocks/mocks";

import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

it(`Should MainPage render correctly`, () => {
  const noop = () => {};
  // const type = `cities__places`;

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
              <MainPage
                selectedCity = {'Paris'}
                offerList = {offerList}
                offerId = {1}
                toggleCityAction = {noop}
                loadOffers = {noop}
                updateActiveOfferIdAction = {noop}
                handleFavoriteClick = {noop}
                handleLoginClick = {noop}
              />
            </MemoryRouter>
        </Provider>)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
