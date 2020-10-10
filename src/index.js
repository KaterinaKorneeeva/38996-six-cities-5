import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";

ReactDOM.render(
    <App
      offersCount={offers.length}
      offers={offers}
    />,
    document.querySelector(`#root`)
);
