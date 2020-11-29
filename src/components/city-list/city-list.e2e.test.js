
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import CityList from "./city-list";
import Enzyme, {shallow} from "enzyme";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault: () => {}
};

it(`Should click city-tab`, () => {
  const toggleCityMock = jest.fn();
  const wrapper = shallow(
      <CityList
        selectedCity = {`Paris`}
        toggleCity = {toggleCityMock}
      />
  );

  wrapper.find(`.locations__item`).first().simulate(`click`, mockEvent);
  expect(toggleCityMock).toHaveBeenCalledTimes(1);
});
