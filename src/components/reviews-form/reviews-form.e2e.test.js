
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {ReviewsForm} from "../reviews-form/reviews-form";
import Enzyme, {shallow} from "enzyme";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockEvent = {
  preventDefault() {}
};

it(`Should send review click`, () => {
  const onSubmit = jest.fn();
  const noop = () => {};
  const wrapper = shallow(
      <ReviewsForm
        // handleSubmit = {noop}
        // selectedCity = 'Paris'
        // onSubmit={() => {}}

        handleSubmit = {noop}
        onSubmit= {onSubmit}
        handleFieldChange = {noop}
        comment = {``}
        offerIdActive = {1}
        rating = {`2`}
      />
  );
  wrapper.find(`.reviews__form`).simulate(`click`, mockEvent);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
