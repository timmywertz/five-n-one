import React from "react";
//import fetch from "isomorphic-fetch";
import { map } from "ramda";
import { connect } from "react-redux";

const li = buzzwords => {
  return (
    <li key={buzzwords.id} style={{ buzzword: buzzwords.name }}>
      {buzzwords.value}
    </li>
  );
};

const Buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { buzzwords: state.buzzwords };
};

const connector = connect(mapStateToProps);

export default connector(Buzzwords);
