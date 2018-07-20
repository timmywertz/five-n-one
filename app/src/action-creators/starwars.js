import fetch from "isomorphic-fetch";
import { SET_STARWARSNAMES } from "../constants";

const url = "http://localhost:5000/starwars";

export const setStarWarsNames = async (dispatch, getState) => {
  const starWarsNames = await fetch(url).then(res => res.json());
  dispatch({ type: SET_STARWARSNAMES, payload: starWarsNames });
};
