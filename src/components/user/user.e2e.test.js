
import React from "react";
import {Provider} from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import User from "./user";
import Enzyme, {mount} from "enzyme";
import {AuthorizationStatus} from "../../const";
import {userInfo} from "../../mocks/mocks";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore()({
  USER: {
    userInfo: {email: `email@mail.ru`},
    authorizationStatus: AuthorizationStatus.AUTH
  }
});

const mockEvent = {
  preventDefault: () => {}
};

it(`Should click login`, () => {
  const handleLoginClickMock = jest.fn();
  const wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <User
            userInfo={userInfo}
            authorizationStatus={AuthorizationStatus.AUTH}
            handleLoginClick = {handleLoginClickMock}
          />
        </MemoryRouter>
      </Provider>
  );

  wrapper.find(`.header__nav-link`).simulate(`click`, mockEvent);
  expect(handleLoginClickMock).toHaveBeenCalledTimes(1);
});
