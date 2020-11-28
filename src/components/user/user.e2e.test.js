
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import User from "./user";
import Enzyme, {shallow} from "enzyme";
import {AuthorizationStatus} from "../../const";
import {userInfo} from "../../mocks/mocks";
import {MemoryRouter} from "react-router-dom";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault: () => {}
};

it(`Should click login`, () => {
  const handleLoginClickMock = jest.fn();
  const wrapper = shallow(
      <MemoryRouter>
        <User
          userInfo={userInfo}
          authorizationStatus={AuthorizationStatus.AUTH}
          handleLoginClick = {handleLoginClickMock}
        />
      </MemoryRouter>
  );

  wrapper.find(`.header__nav-link`).simulate(`click`, mockEvent);
  expect(handleLoginClickMock).toHaveBeenCalledTimes(1);
});
