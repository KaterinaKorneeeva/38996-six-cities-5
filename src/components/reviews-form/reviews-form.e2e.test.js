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

const noop = () => {};

it(`Should send review click`, () => {
  const onSubmitMock = jest.fn();

  const wrapper = shallow(
      <ReviewsForm
        handleSubmit = {noop}
        onSubmit= {onSubmitMock}
        handleFieldChange = {noop}
        reset= {noop}
        comment = {``}
        offerIdActive = {1}
        rating = {`2`}
        isDisabled={false}
      />
  );


  const form = wrapper.find(`form`);
  form.simulate(`submit`, mockEvent);
  expect(onSubmitMock).toHaveBeenCalledTimes(1);
});
