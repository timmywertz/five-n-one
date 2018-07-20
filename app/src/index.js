import React from "react";
import "tachyons";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import { setColors } from "./action-creators/colors";
import { setBuzzwords } from "./action-creators/buzzwords";
import { setStarWarsNames } from "./action-creators/starwars";
import { setFortuneCookies } from "./action-creators/fortune-cookies";
import { setEmojis } from "./action-creators/emojis";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch(setColors);
store.dispatch(setBuzzwords);
store.dispatch(setStarWarsNames);
store.dispatch(setFortuneCookies);
store.dispatch(setEmojis);
