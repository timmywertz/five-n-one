import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { colors } from "../src/reducers/colors";
import { buzzwords } from "../src/reducers/buzzwords";
import { starwarsNames } from "../src/reducers/starwars";
import { fortuneCookies } from "../src/reducers/fortune-cookies";
import { emojis } from "../src/reducers/emojis";

export default createStore(
  combineReducers({
    colors,
    buzzwords,
    starwarsNames,
    fortuneCookies,
    emojis
  }),
  applyMiddleware(thunk)
);
