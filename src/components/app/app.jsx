import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../main-page/main-page";


const App = (props) => {
  const {offersCount} = props;

  return (
    <WelcomeScreen offersCount = {offersCount} />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
