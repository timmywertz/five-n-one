import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { colors, currentColor } from "../src/reducers/colors";
import { buzzwords, currentBuzzword } from "../src/reducers/buzzwords";
import { starwarsNames } from "../src/reducers/starwars";
import { fortuneCookies } from "../src/reducers/fortune-cookies";
import { emojis, currentEmoji } from "../src/reducers/emojis";

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    currentBuzzword,
    starwarsNames,
    fortuneCookies,
    emojis,
    currentEmoji
  }),
  applyMiddleware(thunk)
);
