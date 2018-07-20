import { SET_STARWARSNAMES } from "../constants";

export const starwarsNames = (state = [], action) => {
  switch (action.type) {
    case SET_STARWARSNAMES:
      return action.payload;
    default:
      return state;
  }
};
