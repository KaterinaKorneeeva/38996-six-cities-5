
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {AuthPage} from "./auth-page";
import Enzyme, {shallow} from "enzyme";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockEvent = {
  preventDefault() {}
};

it(`Should user link click`, () => {
  const onSubmit = jest.fn();
  const noop = () => {};
  const wrapper = shallow(
      <AuthPage
        handleSubmit = {noop}
        selectedCity = 'Paris'
        onSubmit={() => {}}
      />
  );
  wrapper.find(`.header__nav-link`).simulate(`click`, mockEvent);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
