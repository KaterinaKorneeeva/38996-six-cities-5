
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {AuthPage} from "./auth-page";
import Enzyme, {mount} from "enzyme";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockEvent = {
  preventDefault() {}
};

it(`Should submit user form `, () => {
  const onSubmitMock = jest.fn();
  const wrapper = mount(
      <AuthPage
        selectedCity = 'Paris'
        onSubmit={onSubmitMock}
      />
  );
  wrapper.find(`.login__input[type="email"]`).value = `login`;
  wrapper.find(`.login__input[type="password"]`).value = `password`;

  wrapper.find(`.login__form`).simulate(`submit`, mockEvent);
  expect(onSubmitMock).toHaveBeenCalledTimes(1);
});
