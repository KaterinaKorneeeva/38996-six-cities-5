import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import offers from "./mocks/offers";
// import {reducer} from "./store/reducer";
import rootReducer from "./store/reducers/root-reducer";

import {requireAuthorization} from "./store/action";
import {fetchHotelList, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

console.log('fetchHotelList',fetchHotelList);

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    // reducer,
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    applyMiddleware(thunk.withExtraArgument(api)),
  );

  store.dispatch(fetchHotelList()),
  store.dispatch(checkAuth()),

ReactDOM.render(
    <Provider store={store}>
      <App
        offersCount={offers.length}
        offers={offers}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
