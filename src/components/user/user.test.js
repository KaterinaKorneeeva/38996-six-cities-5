import React from "react";
import renderer from "react-test-renderer";
import {User} from "./user";

it(`Should User render correctly`, () => {
  const noop = () => {};
  const authorizationStatus = `AUTH`;
  const userInfo = {email: `Oliver.conner@.com`};
  const tree = renderer
     .create(<User
       userInfo = {userInfo}
       handleLoginClick={noop}
       authorizationStatus= {authorizationStatus}
     />)
     .toJSON();

  expect(tree).toMatchSnapshot();
});
