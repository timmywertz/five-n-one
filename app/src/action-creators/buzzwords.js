import fetch from "isomorphic-fetch";
import { SET_BUZZWORDS } from "../constants";
import { CHG_CURRENT_BUZZWORD } from "../constants";

const url = "http://localhost:5000/buzzwords";

export const setBuzzwords = async (dispatch, getState) => {
  const buzzwords = await fetch(url).then(res => res.json());
  dispatch({ type: SET_BUZZWORDS, payload: buzzwords });
};

export const addBuzzword = (buzzword, history) => async (
  dispatch,
  getState
) => {
  const headers = { "Content-Type": "application/json" };
  const method = "POST";
  const body = JSON.stringify(buzzword);

  const result = await fetch(url, {
    headers,
    method,
    body
  }).then(res => res.json());
  if (result.ok) {
    dispatch(setBuzzwords);
    history.push("/buzzwords");
  } else {
    //Handle Error
  }
};

export const chgBuzzword = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_BUZZWORD, payload: { [field]: value } });
};
