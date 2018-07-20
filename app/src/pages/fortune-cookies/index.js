import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";

const li = cookies => {
  return (
    <li key={cookies.id} style={{ name: cookies.value }}>
      {cookies.value}
    </li>
  );
};

const Cookies = props => {
  return (
    <div>
      <h1>Fortune Cookies</h1>
      <ul>{map(li, props.cookies)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { cookies: state.fortuneCookies };
};

const connector = connect(mapStateToProps);

export default connector(Cookies);
